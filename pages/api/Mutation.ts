import { intArg, mutationType, stringArg } from '@nexus/schema'
import { addDays } from 'date-fns'
import { prisma } from './index'

export const Mutation = mutationType({
  definition(t) {
    t.field('bookWorkout', {
      type: 'User',
      args: {
        traineeId: intArg({ required: true }),
        workoutId: intArg({ required: true }),
      },
      resolve: async (_, args) => {
        const { traineeId, workoutId } = args
        const user = await prisma.user.findOne({
          where: { id: traineeId },
        })
        if (!user) throw new Error('User not Signup')
        const workout = await prisma.workout.findOne({
          where: { id: workoutId },
          select: { trainees: { select: { id: true } } },
        })
        if (workout) {
          const { trainees } = workout
          if (trainees.some((user) => user.id === traineeId)) {
            throw new Error('already booked')
          }
        }
        await prisma.workout.update({
          data: { trainees: { connect: { id: traineeId } } },
          where: { id: workoutId },
        })
        return user
      },
    })
    t.field('deleteBookedWorkout', {
      type: 'User',
      args: {
        traineeId: intArg({ required: true }),
        workoutId: intArg({ required: true }),
      },
      resolve: async (_, args) => {
        const { traineeId, workoutId } = args
        const user = await prisma.user.findOne({
          where: { id: traineeId },
        })
        if (!user) throw new Error('User not Signup')
        const workout = await prisma.workout.findOne({
          where: { id: workoutId },
          select: { trainees: { select: { id: true } } },
        })
        if (!workout) throw new Error('Workout Does not exists!!!')
        const { trainees } = workout
        const newTraineesArray = trainees.filter(
          (user) => user.id !== traineeId,
        )
        await prisma.workout.update({
          data: { trainees: { set: newTraineesArray } },
          where: { id: workoutId },
        })
        return user
      },
    })
    t.field('updateWorkoutDate', {
      type: 'Workout',
      args: {
        workoutId: intArg({ required: true }),
        date: 'DateTime',
      },
      resolve: async (_, args) => {
        const workout = await prisma.workout.findOne({
          where: { id: args.workoutId },
        })
        if (workout) {
          return prisma.workout.update({
            where: { id: args.workoutId },
            data: { date: args.date },
          })
        }
        return null
      },
    })
    t.field('deleteworkoutIdTrainees', {
      type: 'Workout',
      args: {
        workoutId: intArg({ required: true }),
      },
      resolve: async (_, args) => {
        const workout = await prisma.workout.findOne({
          where: { id: args.workoutId },
        })
        if (workout) {
          return prisma.workout.update({
            where: { id: args.workoutId },
            data: { trainees: undefined },
          })
        }
        return null
      },
    })
    t.int('addWeekToAllWorkouts', {
      resolve: async () => {
        const workouts = await prisma.workout.findMany({})
        let count = 0

        await Promise.all(
          workouts.map(async (w) => {
            const workout = await prisma.workout.update({
              where: { id: w.id },
              data: { date: addDays(w.date, 7) },
            })
            if (workout) count++
            prisma.$disconnect()
          }),
        )
        return count
      },
    })
    t.field('createUser', {
      type: 'User',
      args: {
        firstName: stringArg({ required: true }),
        lastName: stringArg({ required: true }),
        email: stringArg({ required: true }),
        left: intArg({ required: true }),
      },
      async resolve(_root, args) {
        const { firstName, lastName, email, left } = args
        const user = {
          firstName,
          lastName,
          email,
          left,
        }
        return prisma.user.create({ data: user })
      },
    })
  },
})

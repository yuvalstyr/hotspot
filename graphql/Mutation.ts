import { intArg, mutationType, nonNull, stringArg } from 'nexus'
import { addDays } from 'date-fns'
import prisma from '../lib/prisma'
import { Workout } from '../components/Workout'
import { WorkoutType } from '@prisma/client'

export const Mutation = mutationType({
  definition(t) {
    t.field('bookWorkout', {
      type: 'User',
      args: {
        traineeId: nonNull(intArg()),
        workoutId: intArg(),
      },
      async resolve(_, args) {
        const { traineeId, workoutId } = args
        const user = await prisma.user.findUnique({
          where: { id: traineeId },
        })
        if (!user) throw new Error('User not Signup')
        const workout = await prisma.workout.findUnique({
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
        prisma.$disconnect()
        return user
      },
    })
    t.field('unBookedWorkout', {
      type: 'User',
      args: {
        traineeId: intArg(),
        workoutId: intArg(),
      },
      resolve: async (_, args) => {
        const { traineeId, workoutId } = args
        const user = await prisma.user.findUnique({
          where: { id: traineeId },
        })
        if (!user) throw new Error('User not Signup')
        const workout = await prisma.workout.findUnique({
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
        prisma.$disconnect()
        return user
      },
    })
    //Todo delete all data for user
    t.field('deleteUser', {
      type: 'User',
      args: {
        userId: intArg(),
      },
      resolve: async (_, { userId }) => {
        const user = await prisma.user.delete({
          where: { id: userId },
        })
        prisma.$disconnect()
        return user
      },
    })
    t.field('updateWorkoutDate', {
      type: 'Workout',
      args: {
        workoutId: intArg(),
        date: stringArg(),
      },
      resolve: async (_, args) => {
        const workout = await prisma.workout.findUnique({
          where: { id: args.workoutId },
        })
        if (workout) {
          const updatedWorkout = prisma.workout.update({
            where: { id: args.workoutId },
            data: { date: args.date },
          })
          prisma.$disconnect()
          return updatedWorkout
        }
        prisma.$disconnect()
        return null
      },
    })
    t.field('signup', {
      type: 'User',
      args: {
        name: nonNull(stringArg()),
        phone: nonNull(stringArg()),
        gender: nonNull(stringArg()),
        email: nonNull(stringArg()),
      },
      resolve: async (_, args) => {
        const { name, phone, gender, email } = args
        const user = await prisma.user.create({
          data: { name, phone, gender, email },
        })
        prisma.$disconnect()
        return user
      },
    })
    t.field('deleteworkoutIdTrainees', {
      type: 'Workout',
      args: {
        workoutId: intArg(),
      },
      resolve: async (_, args) => {
        const workout = await prisma.workout.findUnique({
          where: { id: args.workoutId },
        })
        if (workout) {
          return prisma.workout.update({
            where: { id: args.workoutId },
            data: { trainees: undefined },
          })
        }
        prisma.$disconnect()
        return null
      },
    })
    t.int('addWeekToAllWorkouts', {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      resolve: async (_, _a) => {
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
    t.field('createWorkout', {
      args: {
        ...WorkoutType,
      },
    })
  },
})

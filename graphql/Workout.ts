import {
  objectType,
  enumType,
  intArg,
  nonNull,
  stringArg,
  extendType,
  inputObjectType,
  list,
} from 'nexus'
import prisma from '../lib/prisma'
import { addDays } from 'date-fns'

export const WorkoutType = enumType({
  name: 'WorkoutType',
  members: ['PERSONAL', 'TEAM'],
})
export const Gender = enumType({
  name: 'Gender',
  members: ['MALE', 'FEMALE'],
})

export const InputCreateWorkout = inputObjectType({
  name: 'InputCreateDay',
  definition(t) {
    t.nonNull.string('time')
    t.nonNull.date('date')
    t.nonNull.field('gender', { type: Gender })
    t.nonNull.field('type', { type: WorkoutType })
  },
})

export const Workout = objectType({
  name: 'Workout',
  definition(t) {
    t.int('id')
    t.string('type')
    t.dateTime('date')
    t.string('localDateTime')
    t.field('gender', { type: Gender })
    t.list.field('trainees', {
      type: 'User',
      async resolve(parent) {
        const trainees = await prisma.workout
          .findUnique({
            where: { id: Number(parent.id) },
            select: { trainees: true },
          })
          .trainees()
        return trainees
      },
    })
  },
})

export const WorkoutMutation = extendType({
  type: 'Mutation',
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
    t.field('updateWorkoutDate', {
      type: 'Workout',
      args: {
        workoutId: intArg(),
        date: stringArg(),
      },
      async resolve(_, args) {
        const workout = await prisma.workout.findUnique({
          where: { id: args.workoutId },
        })
        if (workout) {
          const updatedWorkout = prisma.workout.update({
            where: { id: args.workoutId },
            data: { isoDateTime: args.date },
          })
          prisma.$disconnect()
          return updatedWorkout
        }
        prisma.$disconnect()
        return null
      },
    })
    t.int('addWeekToAllWorkouts', {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async resolve(_, _a) {
        const workouts = await prisma.workout.findMany({})
        let count = 0

        await Promise.all(
          workouts.map(async (w) => {
            const workout = await prisma.workout.update({
              where: { id: w.id },
              data: { isoDateTime: addDays(w.isoDateTime, 7) },
            })
            if (workout) count++
            prisma.$disconnect()
          }),
        )
        return count
      },
    })
    t.field('createWorkout', {
      type: 'Workout',
      args: {
        InputCreateWorkout,
      },
      async resolve(_, { InputCreateWorkout }) {
        const { date, gender, time, type } = InputCreateWorkout
        const isoDateTime = new Date(`${date}T${time}`)
        const workout = await prisma.workout.create({
          data: {
            status: 'Active',
            type,
            gender,
            isoDateTime,
            localDateTime: isoDateTime.toLocaleString(),
          },
        })
        prisma.$disconnect()
        return workout
      },
    })
    t.string('createManyWorkouts', {
      args: {
        data: list(InputCreateWorkout),
      },
      async resolve(_, { data }) {
        let count = 0
        await Promise.all(
          data.map((data) => {
            const { date, gender, time, type } = data
            const isoDateTime = new Date(`${date}T${time}`)
            const workout = prisma.workout.create({
              data: {
                status: 'Active',
                type,
                gender,
                isoDateTime,
                localDateTime: isoDateTime.toLocaleString(),
              },
            })
            if (workout) count++
          }),
        )
        return `good ${count} workouts craeted`
      },
    })
  },
})

import { intArg, mutationType, nonNull, stringArg } from 'nexus'

import prisma from '../lib/prisma'

export const Mutation = mutationType({
  definition(t) {
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
  },
})

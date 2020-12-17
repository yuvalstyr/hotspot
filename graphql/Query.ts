import { intArg, nullable, queryType, stringArg } from 'nexus'
import { format } from 'date-fns'
import heLocale from 'date-fns/locale/he'
import prisma from '../lib/prisma'

export const Query = queryType({
  definition(t) {
    t.list.field('users', {
      type: 'User',
      args: {
        id: nullable(intArg()),
        name: nullable(stringArg()),
      },
      resolve: async (_, { id, name }) => {
        return prisma.user.findMany({ where: { id, name } })
      },
    })
    t.list.field('workoutsPerWeek', {
      type: 'Workout',
      resolve: async () => {
        const workouts = await prisma.workout.findMany({
          where: { status: 'Active' },
          orderBy: { date: 'asc' },
        })
        const currentWeekNumber = format(new Date(), 'wo', {
          locale: heLocale,
          weekStartsOn: 0,
        })
        return workouts.filter(
          (w) =>
            format(new Date(w.date), 'wo', { locale: heLocale }) ===
            currentWeekNumber,
        )
      },
    })
  },
})

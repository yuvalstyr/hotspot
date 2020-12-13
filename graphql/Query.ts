import { intArg, queryType } from '@nexus/schema'
import { format } from 'date-fns'
import heLocale from 'date-fns/locale/he'

export const Query = queryType({
  definition(t) {
    t.list.field('todayWorkouts', {
      type: 'Workout',
      resolve(_parent, args, ctx) {
        return ctx.prisma.workout.findMany()
      },
    })
    t.list.field('workouts', {
      type: 'Workout',
      args: {
        workoutId: intArg(),
      },
      resolve: (root, args, ctx) => {
        if (args.workoutId) {
          return ctx.prisma.workout.findMany({
            where: { id: { equals: args.workoutId } },
          })
        }
        return ctx.prisma.workout.findMany({})
      },
    })
    t.list.field('workoutsPerWeek', {
      type: 'Workout',
      resolve: async (_, args, ctx) => {
        const workouts = await ctx.prisma.workout.findMany({
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
    t.crud.users()
  },
})

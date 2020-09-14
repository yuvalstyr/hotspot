import { schema, use } from "nexus"
import { prisma } from "nexus-plugin-prisma"
import { format } from "date-fns"
import heLocale from "date-fns/locale/he"

use(prisma({ features: { crud: true } }))

schema.objectType({
  name: "User",
  definition(t) {
    t.model.id()
    t.model.email()
    t.model.firstName()
    t.model.lastName()
    t.model.left()
    t.model.createdAt()
  },
})
schema.objectType({
  name: "Workout",
  definition(t) {
    t.model.id()
    t.model.status()
    t.model.type()
    t.model.trainees()
    t.model.date()
    t.model.time()
    t.model.trainees({
      filtering: true,
    })
  },
})

schema.queryType({
  definition(t) {
    t.list.field("todayWorkouts", {
      type: "Workout",
      resolve(_parent, args, ctx) {
        return ctx.db.workout.findMany()
      },
    })
    t.crud.user()
    t.crud.workout()
    t.crud.users()
    t.crud.workouts({ filtering: true, ordering: true })
    t.list.field("workoutsPerWeek", {
      type: "Workout",
      resolve: async (_, args, ctx) => {
        const workouts = await ctx.db.workout.findMany({
          where: { status: "Active" },
          orderBy: { date: "asc" },
        })
        const currentWeekNumber = format(new Date(), "wo", {
          locale: heLocale,
          weekStartsOn: 0,
        })
        console.log("currentWeekNumber", currentWeekNumber)
        return workouts.filter(
          (w) =>
            format(new Date(w.date), "wo", { locale: heLocale }) ===
            currentWeekNumber
        )
      },
    })
  },
})

schema.mutationType({
  definition(t) {
    t.crud.createOneUser()
    t.crud.updateOneUser()
    t.crud.createOneWorkout()
    t.crud.updateOneWorkout()
    t.crud.updateManyWorkout()
    t.crud.updateOneWorkout()
  },
})

import { mutationType, objectType, queryType, intArg } from '@nexus/schema';
import { format } from 'date-fns';
import heLocale from 'date-fns/locale/he';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.firstName();
    t.model.lastName();
    t.model.left();
  },
});
export const Workout = objectType({
  name: 'Workout',
  definition(t) {
    t.model.id();
    t.model.status();
    t.model.type();
    t.model.time();
    t.model.date();
    t.model.trainees({
      filtering: true,
    });
  },
});

export const Query = queryType({
  definition(t) {
    t.list.field('todayWorkouts', {
      type: 'Workout',
      resolve(_parent, args, ctx) {
        return ctx.prisma.workout.findMany();
      },
    });
    t.crud.user();
    t.crud.workout();
    t.crud.users();
    t.crud.workouts({ filtering: true, ordering: true });
    t.list.field('workoutsPerWeek', {
      type: 'Workout',
      resolve: async (_, args, ctx) => {
        const workouts = await ctx.prisma.workout.findMany({
          where: { status: 'Active' },
          orderBy: { date: 'asc' },
        });
        const currentWeekNumber = format(new Date(), 'wo', {
          locale: heLocale,
          weekStartsOn: 0,
        });
        return workouts.filter(
          (w) =>
            format(new Date(w.date), 'wo', { locale: heLocale }) ===
            currentWeekNumber
        );
      },
    });
  },
});

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser();
    t.crud.updateOneUser();
    t.crud.createOneWorkout();
    t.crud.updateOneWorkout();
    t.crud.updateManyWorkout();
    t.crud.updateManyUser();
    t.field('bookWorkout', {
      type: 'User',
      args: {
        traineeId: intArg({ required: true }),
        workoutId: intArg({ required: true }),
      },
      resolve: async (_, args, ctx) => {
        const { traineeId, workoutId } = args;
        const user = await ctx.prisma.user.findOne({
          where: { id: traineeId },
        });
        if (!user) throw new Error('User not Signup');
        const { trainees } = await ctx.prisma.workout.findOne({
          where: { id: workoutId },
          select: { trainees: { select: { id: true } } },
        });
        if (trainees.some((user) => user.id === traineeId)) {
          throw new Error('already booked');
        }
        await ctx.prisma.workout.update({
          data: { trainees: { connect: { id: traineeId } } },
          where: { id: workoutId },
        });
        return user;
      },
    }),
      t.field('deleteBookedWorkout', {
        type: 'User',
        args: {
          traineeId: intArg({ required: true }),
          workoutId: intArg({ required: true }),
        },
        resolve: async (_, args, ctx) => {
          const { traineeId, workoutId } = args;
          const user = await ctx.prisma.user.findOne({
            where: { id: traineeId },
          });
          if (!user) throw new Error('User not Signup');
          const workout = await ctx.prisma.workout.findOne({
            where: { id: workoutId },
            select: { trainees: { select: { id: true } } },
          });
          if (!workout) throw new Error('Workout Does not exists!!!');
          const { trainees } = workout;
          const newTraineesArray = trainees.filter(
            (user) => user.id !== traineeId
          );
          await ctx.prisma.workout.update({
            data: { trainees: { set: newTraineesArray } },
            where: { id: workoutId },
          });
          return user;
        },
      });
  },
});

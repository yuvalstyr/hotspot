import {
  makeSchema,
  objectType,
  stringArg,
  asNexusMethod,
  intArg,
  queryType,
  mutationType,
} from '@nexus/schema';
import { GraphQLDate } from 'graphql-iso-date';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-micro';
import { format } from 'date-fns';
import heLocale from 'date-fns/locale/he';
import path from 'path';

export const GQLDate = asNexusMethod(GraphQLDate, 'date');

const prisma = new PrismaClient({ log: ['info', 'warn', 'error'] });

export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id');
    t.string('name');
    t.string('email');
    t.string('firstName');
    t.string('lastName');
    t.int('left');
  },
});
export const Workout = objectType({
  name: 'Workout',
  definition(t) {
    t.int('id');
    t.string('status');
    t.string('type');
    t.string('time');
    t.string('date');
    t.list.field('trainees', {
      type: 'User',
      resolve: (parent) =>
        prisma.workout
          .findOne({
            where: { id: Number(parent.id) },
          })
          .trainees(),
    });
  },
});

export const Query = queryType({
  definition(t) {
    t.list.field('todayWorkouts', {
      type: 'Workout',
      resolve(_parent, args, ctx) {
        return prisma.workout.findMany();
      },
    }),
      t.list.field('workouts', {
        type: 'Workout',
        resolve: (_parent, _args, ctx) => {
          return prisma.workout.findMany();
        },
      }),
      // t.crud.user();
      // t.crud.workout();
      // t.crud.users();
      // t.crud.workouts({ filtering: true, ordering: true });
      t.list.field('workoutsPerWeek', {
        type: 'Workout',
        resolve: async (_, args, ctx) => {
          const workouts = await prisma.workout.findMany({
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
    // t.crud.createOneUser();
    // t.crud.updateOneUser();
    // t.crud.createOneWorkout();
    // t.crud.updateOneWorkout();
    // t.crud.updateManyWorkout();
    // t.crud.updateManyUser();
    t.field('bookWorkout', {
      type: 'User',
      args: {
        traineeId: intArg({ required: true }),
        workoutId: intArg({ required: true }),
      },
      resolve: async (_, args, ctx) => {
        const { traineeId, workoutId } = args;
        const user = await prisma.user.findOne({
          where: { id: traineeId },
        });
        if (!user) throw new Error('User not Signup');
        const { trainees } = await prisma.workout.findOne({
          where: { id: workoutId },
          select: { trainees: { select: { id: true } } },
        });
        if (trainees.some((user) => user.id === traineeId)) {
          throw new Error('already booked');
        }
        await prisma.workout.update({
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
          const user = await prisma.user.findOne({
            where: { id: traineeId },
          });
          if (!user) throw new Error('User not Signup');
          const workout = await prisma.workout.findOne({
            where: { id: workoutId },
            select: { trainees: { select: { id: true } } },
          });
          if (!workout) throw new Error('Workout Does not exists!!!');
          const { trainees } = workout;
          const newTraineesArray = trainees.filter(
            (user) => user.id !== traineeId
          );
          await prisma.workout.update({
            data: { trainees: { set: newTraineesArray } },
            where: { id: workoutId },
          });
          return user;
        },
      });
  },
});

export const schema = makeSchema({
  types: [Query, Mutation, Workout, User, GQLDate],
  outputs: {
    typegen: path.join(process.cwd(), 'pages', 'api', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'pages', 'api', 'schema.graphql'),
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default new ApolloServer({ schema }).createHandler({
  path: '/api',
});

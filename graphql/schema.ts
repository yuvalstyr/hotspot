import {
  asNexusMethod,
  enumType,
  makeSchema,
  mutationType,
  objectType,
  queryType,
} from '@nexus/schema'
import { GraphQLDateTime } from 'graphql-iso-date'
import { nexusPrisma } from 'nexus-plugin-prisma'
import path from 'path'

export const GQLDate = asNexusMethod(GraphQLDateTime, 'date')

const WorkoutStatus = enumType({
  name: 'status',
  members: ['Active', 'Cancelled', 'Over'],
})

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.left()
    t.model.image()
  },
})

export const Workout = objectType({
  name: 'Workout',
  definition(t) {
    t.model.id()
    t.model.status()
    t.model.trainees()
  },
})

const Query = queryType({
  definition(t) {
    t.list.field('allUsers', {
      type: 'User',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany({})
      },
    })
    t.crud.user()
    t.crud.users()
  },
})

const Mutation = mutationType({
  definition(t) {
    t.field('deleteAllUsers', {
      type: 'String',
      async resolve(_parent, _args, ctx) {
        const { count } = await ctx.prisma.user.deleteMany({})
        return `${count} user(s) destroyed.`
      },
    })

    t.crud.createOneUser()
    t.crud.deleteOneUser()
    t.crud.deleteManyUser()
    t.crud.updateOneUser()
    t.crud.updateManyUser()
  },
})

export const schema = makeSchema({
  types: [User, Query, Workout, Mutation, GQLDate, WorkoutStatus],
  plugins: [
    nexusPrisma({
      outputs: {
        typegen: process.cwd() + '/generated/typegen-nexus-plugin-prisma.d.ts',
      },
    }),
  ],

  outputs: {
    typegen: path.join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated', 'schema.graphql'),
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: path.join(process.cwd(), 'graphql', 'context.ts'),
        alias: 'Context',
      },
    ],
  },
})

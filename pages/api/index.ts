import { asNexusMethod, makeSchema, objectType } from '@nexus/schema'
import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server-micro'
import { GraphQLDateTime } from 'graphql-iso-date'
import path from 'path'
import { Mutation } from './Mutation'
import { Query } from './Query'

export const GQLDate = asNexusMethod(GraphQLDateTime, 'date')

export const prisma = new PrismaClient({ log: ['info', 'error'] })

export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('email')
    t.string('firstName')
    t.string('lastName')
    t.int('left')
    t.date('createdAt')
  },
})
export const Workout = objectType({
  name: 'Workout',
  definition(t) {
    t.int('id')
    t.string('status')
    t.string('type')
    t.date('date')
    t.list.field('trainees', {
      type: 'User',
      resolve: (parent) =>
        prisma.workout
          .findOne({
            where: { id: Number(parent.id) },
          })
          .trainees(),
    })
  },
})

export const schema = makeSchema({
  types: [Query, Mutation, Workout, User, GQLDate],
  outputs: {
    typegen: path.join(process.cwd(), 'pages', 'api', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'pages', 'api', 'schema.graphql'),
  },
})
export const config = {
  api: {
    bodyParser: false,
  },
}

export default new ApolloServer({ schema }).createHandler({
  path: '/api',
})

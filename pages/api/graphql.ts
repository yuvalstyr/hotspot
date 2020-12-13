import { asNexusMethod } from '@nexus/schema'
import { GraphQLDateTime } from 'graphql-iso-date'

import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../graphql/schema'
import { createContext } from '../../graphql/context'
// import { Query } from './Query'

export const GQLDate = asNexusMethod(GraphQLDateTime, 'date')

const apolloServer = new ApolloServer({
  context: createContext,
  schema,
  tracing: process.env.NODE_ENV === 'development',
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({
  path: '/api/graphql',
})

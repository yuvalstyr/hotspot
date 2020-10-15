import { ApolloServer } from 'apollo-server-micro';
import { createContext } from 'nexus/context';
import { schema } from 'nexus/schema';

const server = new ApolloServer({ schema, context: createContext });
const handler = server.createHandler({ path: '/api/graphql' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;

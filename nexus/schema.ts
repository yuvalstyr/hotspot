import { makeSchema } from '@nexus/schema';
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import { Mutation, Query, User, Workout } from './types';
import path from 'path';

const types = { Query, User, Workout, Mutation };

export const schema = makeSchema({
  types,
  plugins: [nexusSchemaPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: path.join(process.cwd(), 'schema.graphql'),
    typegen: path.join(process.cwd(), 'nexus.ts'),
  },
  typegenAutoConfig: {
    contextType: 'ContextmModule.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'ContextmModule',
      },
    ],
  },
});

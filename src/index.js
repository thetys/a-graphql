import {GraphQLDate, GraphQLDateTime, GraphQLTime} from 'graphql-iso-date';
import {GraphQLServer} from 'graphql-yoga';
import {prisma} from './generated/prisma-client';

import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Event from './resolvers/Event';
import AllContent from './resolvers/AllContent';

const resolvers = {
  Query,
  Mutation,
  Event,
  AllContent,
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
    };
  },
});

server.start({endpoint: '/'}, ({endpoint}) =>
  console.log(`Server is running on http://localhost:4000${endpoint}`)
);

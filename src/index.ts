import * as fs from 'fs';
import {GraphQLDate, GraphQLDateTime, GraphQLTime} from 'graphql-iso-date';
import {ApolloServer, gql, IResolvers} from 'apollo-server';
import {prisma} from './generated/prisma-client';

import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Event from './resolvers/Event';
import AllContent from './resolvers/AllContent';

const typeDefs = gql(
    fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')
);

const resolvers: IResolvers = {
  Query,
  Mutation,
  Event,
  AllContent,
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
    };
  },
  engine: {
    apiKey: 'service:thetys-3346:CmXrqJQre_JzeZMifUKOfw',
  },
});

server
    .listen()
    .then(({url}) =>
      console.log(
          `Server is running on http://localhost:4000${server.graphqlPath}`
      )
    );

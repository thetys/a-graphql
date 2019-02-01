const {GraphQLDate, GraphQLDateTime, GraphQLTime} = require('graphql-iso-date');
const {GraphQLServer} = require('graphql-yoga');
const {prisma} = require('./generated/prisma-client');

const Query = require('./resolvers/Query');

const resolvers = {
  Query,
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime
};

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    }
  }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));

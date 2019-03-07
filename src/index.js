const {GraphQLDate, GraphQLDateTime, GraphQLTime} = require('graphql-iso-date');
const {GraphQLServer} = require('graphql-yoga');
const {prisma} = require('./generated/prisma-client');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Event = require('./resolvers/Event');
const AllContent = require('./resolvers/AllContent');

const resolvers = {
  Query,
  Mutation,
  Event,
  AllContent,
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    }
  }
});

server.start(
    { endpoint: '/' },
    ({ endpoint }) => console.log(`Server is running on http://localhost:4000${endpoint}`)
);

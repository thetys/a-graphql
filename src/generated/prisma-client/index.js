"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Character",
    embedded: false
  },
  {
    name: "Occurrence",
    embedded: false
  },
  {
    name: "Place",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://mydocker:4466`
});
exports.prisma = new exports.Prisma();

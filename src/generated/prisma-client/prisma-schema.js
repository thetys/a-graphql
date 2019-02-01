module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCharacter {
  count: Int!
}

type AggregateOccurrence {
  count: Int!
}

type AggregatePlace {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Character {
  id: ID!
  createdAt: DateTime!
  name: String!
  description: String!
}

type CharacterConnection {
  pageInfo: PageInfo!
  edges: [CharacterEdge]!
  aggregate: AggregateCharacter!
}

input CharacterCreateInput {
  name: String!
  description: String!
}

input CharacterCreateManyInput {
  create: [CharacterCreateInput!]
  connect: [CharacterWhereUniqueInput!]
}

type CharacterEdge {
  node: Character!
  cursor: String!
}

enum CharacterOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CharacterPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  description: String!
}

input CharacterScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [CharacterScalarWhereInput!]
  OR: [CharacterScalarWhereInput!]
  NOT: [CharacterScalarWhereInput!]
}

type CharacterSubscriptionPayload {
  mutation: MutationType!
  node: Character
  updatedFields: [String!]
  previousValues: CharacterPreviousValues
}

input CharacterSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CharacterWhereInput
  AND: [CharacterSubscriptionWhereInput!]
  OR: [CharacterSubscriptionWhereInput!]
  NOT: [CharacterSubscriptionWhereInput!]
}

input CharacterUpdateDataInput {
  name: String
  description: String
}

input CharacterUpdateInput {
  name: String
  description: String
}

input CharacterUpdateManyDataInput {
  name: String
  description: String
}

input CharacterUpdateManyInput {
  create: [CharacterCreateInput!]
  update: [CharacterUpdateWithWhereUniqueNestedInput!]
  upsert: [CharacterUpsertWithWhereUniqueNestedInput!]
  delete: [CharacterWhereUniqueInput!]
  connect: [CharacterWhereUniqueInput!]
  disconnect: [CharacterWhereUniqueInput!]
  deleteMany: [CharacterScalarWhereInput!]
  updateMany: [CharacterUpdateManyWithWhereNestedInput!]
}

input CharacterUpdateManyMutationInput {
  name: String
  description: String
}

input CharacterUpdateManyWithWhereNestedInput {
  where: CharacterScalarWhereInput!
  data: CharacterUpdateManyDataInput!
}

input CharacterUpdateWithWhereUniqueNestedInput {
  where: CharacterWhereUniqueInput!
  data: CharacterUpdateDataInput!
}

input CharacterUpsertWithWhereUniqueNestedInput {
  where: CharacterWhereUniqueInput!
  update: CharacterUpdateDataInput!
  create: CharacterCreateInput!
}

input CharacterWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [CharacterWhereInput!]
  OR: [CharacterWhereInput!]
  NOT: [CharacterWhereInput!]
}

input CharacterWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createCharacter(data: CharacterCreateInput!): Character!
  updateCharacter(data: CharacterUpdateInput!, where: CharacterWhereUniqueInput!): Character
  updateManyCharacters(data: CharacterUpdateManyMutationInput!, where: CharacterWhereInput): BatchPayload!
  upsertCharacter(where: CharacterWhereUniqueInput!, create: CharacterCreateInput!, update: CharacterUpdateInput!): Character!
  deleteCharacter(where: CharacterWhereUniqueInput!): Character
  deleteManyCharacters(where: CharacterWhereInput): BatchPayload!
  createOccurrence(data: OccurrenceCreateInput!): Occurrence!
  updateOccurrence(data: OccurrenceUpdateInput!, where: OccurrenceWhereUniqueInput!): Occurrence
  updateManyOccurrences(data: OccurrenceUpdateManyMutationInput!, where: OccurrenceWhereInput): BatchPayload!
  upsertOccurrence(where: OccurrenceWhereUniqueInput!, create: OccurrenceCreateInput!, update: OccurrenceUpdateInput!): Occurrence!
  deleteOccurrence(where: OccurrenceWhereUniqueInput!): Occurrence
  deleteManyOccurrences(where: OccurrenceWhereInput): BatchPayload!
  createPlace(data: PlaceCreateInput!): Place!
  updatePlace(data: PlaceUpdateInput!, where: PlaceWhereUniqueInput!): Place
  updateManyPlaces(data: PlaceUpdateManyMutationInput!, where: PlaceWhereInput): BatchPayload!
  upsertPlace(where: PlaceWhereUniqueInput!, create: PlaceCreateInput!, update: PlaceUpdateInput!): Place!
  deletePlace(where: PlaceWhereUniqueInput!): Place
  deleteManyPlaces(where: PlaceWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Occurrence {
  id: ID!
  createdAt: DateTime!
  name: String!
  description: String!
  startDate: DateTime!
  endDate: DateTime
  characters(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Character!]
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place!]
}

type OccurrenceConnection {
  pageInfo: PageInfo!
  edges: [OccurrenceEdge]!
  aggregate: AggregateOccurrence!
}

input OccurrenceCreateInput {
  name: String!
  description: String!
  startDate: DateTime!
  endDate: DateTime
  characters: CharacterCreateManyInput
  places: PlaceCreateManyInput
}

type OccurrenceEdge {
  node: Occurrence!
  cursor: String!
}

enum OccurrenceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OccurrencePreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  description: String!
  startDate: DateTime!
  endDate: DateTime
}

type OccurrenceSubscriptionPayload {
  mutation: MutationType!
  node: Occurrence
  updatedFields: [String!]
  previousValues: OccurrencePreviousValues
}

input OccurrenceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OccurrenceWhereInput
  AND: [OccurrenceSubscriptionWhereInput!]
  OR: [OccurrenceSubscriptionWhereInput!]
  NOT: [OccurrenceSubscriptionWhereInput!]
}

input OccurrenceUpdateInput {
  name: String
  description: String
  startDate: DateTime
  endDate: DateTime
  characters: CharacterUpdateManyInput
  places: PlaceUpdateManyInput
}

input OccurrenceUpdateManyMutationInput {
  name: String
  description: String
  startDate: DateTime
  endDate: DateTime
}

input OccurrenceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  endDate: DateTime
  endDate_not: DateTime
  endDate_in: [DateTime!]
  endDate_not_in: [DateTime!]
  endDate_lt: DateTime
  endDate_lte: DateTime
  endDate_gt: DateTime
  endDate_gte: DateTime
  characters_every: CharacterWhereInput
  characters_some: CharacterWhereInput
  characters_none: CharacterWhereInput
  places_every: PlaceWhereInput
  places_some: PlaceWhereInput
  places_none: PlaceWhereInput
  AND: [OccurrenceWhereInput!]
  OR: [OccurrenceWhereInput!]
  NOT: [OccurrenceWhereInput!]
}

input OccurrenceWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Place {
  id: ID!
  createdAt: DateTime!
  name: String!
  description: String!
}

type PlaceConnection {
  pageInfo: PageInfo!
  edges: [PlaceEdge]!
  aggregate: AggregatePlace!
}

input PlaceCreateInput {
  name: String!
  description: String!
}

input PlaceCreateManyInput {
  create: [PlaceCreateInput!]
  connect: [PlaceWhereUniqueInput!]
}

type PlaceEdge {
  node: Place!
  cursor: String!
}

enum PlaceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PlacePreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  description: String!
}

input PlaceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [PlaceScalarWhereInput!]
  OR: [PlaceScalarWhereInput!]
  NOT: [PlaceScalarWhereInput!]
}

type PlaceSubscriptionPayload {
  mutation: MutationType!
  node: Place
  updatedFields: [String!]
  previousValues: PlacePreviousValues
}

input PlaceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlaceWhereInput
  AND: [PlaceSubscriptionWhereInput!]
  OR: [PlaceSubscriptionWhereInput!]
  NOT: [PlaceSubscriptionWhereInput!]
}

input PlaceUpdateDataInput {
  name: String
  description: String
}

input PlaceUpdateInput {
  name: String
  description: String
}

input PlaceUpdateManyDataInput {
  name: String
  description: String
}

input PlaceUpdateManyInput {
  create: [PlaceCreateInput!]
  update: [PlaceUpdateWithWhereUniqueNestedInput!]
  upsert: [PlaceUpsertWithWhereUniqueNestedInput!]
  delete: [PlaceWhereUniqueInput!]
  connect: [PlaceWhereUniqueInput!]
  disconnect: [PlaceWhereUniqueInput!]
  deleteMany: [PlaceScalarWhereInput!]
  updateMany: [PlaceUpdateManyWithWhereNestedInput!]
}

input PlaceUpdateManyMutationInput {
  name: String
  description: String
}

input PlaceUpdateManyWithWhereNestedInput {
  where: PlaceScalarWhereInput!
  data: PlaceUpdateManyDataInput!
}

input PlaceUpdateWithWhereUniqueNestedInput {
  where: PlaceWhereUniqueInput!
  data: PlaceUpdateDataInput!
}

input PlaceUpsertWithWhereUniqueNestedInput {
  where: PlaceWhereUniqueInput!
  update: PlaceUpdateDataInput!
  create: PlaceCreateInput!
}

input PlaceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [PlaceWhereInput!]
  OR: [PlaceWhereInput!]
  NOT: [PlaceWhereInput!]
}

input PlaceWhereUniqueInput {
  id: ID
}

type Query {
  character(where: CharacterWhereUniqueInput!): Character
  characters(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Character]!
  charactersConnection(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CharacterConnection!
  occurrence(where: OccurrenceWhereUniqueInput!): Occurrence
  occurrences(where: OccurrenceWhereInput, orderBy: OccurrenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Occurrence]!
  occurrencesConnection(where: OccurrenceWhereInput, orderBy: OccurrenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OccurrenceConnection!
  place(where: PlaceWhereUniqueInput!): Place
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place]!
  placesConnection(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceConnection!
  node(id: ID!): Node
}

type Subscription {
  character(where: CharacterSubscriptionWhereInput): CharacterSubscriptionPayload
  occurrence(where: OccurrenceSubscriptionWhereInput): OccurrenceSubscriptionPayload
  place(where: PlaceSubscriptionWhereInput): PlaceSubscriptionPayload
}
`
      }
    
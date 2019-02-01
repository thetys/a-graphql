// Code generated by Prisma (prisma@1.25.4). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  character: (where?: CharacterWhereInput) => Promise<boolean>;
  occurrence: (where?: OccurrenceWhereInput) => Promise<boolean>;
  place: (where?: PlaceWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  character: (where: CharacterWhereUniqueInput) => CharacterPromise;
  characters: (args?: {
    where?: CharacterWhereInput;
    orderBy?: CharacterOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Character>;
  charactersConnection: (args?: {
    where?: CharacterWhereInput;
    orderBy?: CharacterOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CharacterConnectionPromise;
  occurrence: (where: OccurrenceWhereUniqueInput) => OccurrencePromise;
  occurrences: (args?: {
    where?: OccurrenceWhereInput;
    orderBy?: OccurrenceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Occurrence>;
  occurrencesConnection: (args?: {
    where?: OccurrenceWhereInput;
    orderBy?: OccurrenceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => OccurrenceConnectionPromise;
  place: (where: PlaceWhereUniqueInput) => PlacePromise;
  places: (args?: {
    where?: PlaceWhereInput;
    orderBy?: PlaceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Place>;
  placesConnection: (args?: {
    where?: PlaceWhereInput;
    orderBy?: PlaceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PlaceConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCharacter: (data: CharacterCreateInput) => CharacterPromise;
  updateCharacter: (args: {
    data: CharacterUpdateInput;
    where: CharacterWhereUniqueInput;
  }) => CharacterPromise;
  updateManyCharacters: (args: {
    data: CharacterUpdateManyMutationInput;
    where?: CharacterWhereInput;
  }) => BatchPayloadPromise;
  upsertCharacter: (args: {
    where: CharacterWhereUniqueInput;
    create: CharacterCreateInput;
    update: CharacterUpdateInput;
  }) => CharacterPromise;
  deleteCharacter: (where: CharacterWhereUniqueInput) => CharacterPromise;
  deleteManyCharacters: (where?: CharacterWhereInput) => BatchPayloadPromise;
  createOccurrence: (data: OccurrenceCreateInput) => OccurrencePromise;
  updateOccurrence: (args: {
    data: OccurrenceUpdateInput;
    where: OccurrenceWhereUniqueInput;
  }) => OccurrencePromise;
  updateManyOccurrences: (args: {
    data: OccurrenceUpdateManyMutationInput;
    where?: OccurrenceWhereInput;
  }) => BatchPayloadPromise;
  upsertOccurrence: (args: {
    where: OccurrenceWhereUniqueInput;
    create: OccurrenceCreateInput;
    update: OccurrenceUpdateInput;
  }) => OccurrencePromise;
  deleteOccurrence: (where: OccurrenceWhereUniqueInput) => OccurrencePromise;
  deleteManyOccurrences: (where?: OccurrenceWhereInput) => BatchPayloadPromise;
  createPlace: (data: PlaceCreateInput) => PlacePromise;
  updatePlace: (args: {
    data: PlaceUpdateInput;
    where: PlaceWhereUniqueInput;
  }) => PlacePromise;
  updateManyPlaces: (args: {
    data: PlaceUpdateManyMutationInput;
    where?: PlaceWhereInput;
  }) => BatchPayloadPromise;
  upsertPlace: (args: {
    where: PlaceWhereUniqueInput;
    create: PlaceCreateInput;
    update: PlaceUpdateInput;
  }) => PlacePromise;
  deletePlace: (where: PlaceWhereUniqueInput) => PlacePromise;
  deleteManyPlaces: (where?: PlaceWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  character: (
    where?: CharacterSubscriptionWhereInput
  ) => CharacterSubscriptionPayloadSubscription;
  occurrence: (
    where?: OccurrenceSubscriptionWhereInput
  ) => OccurrenceSubscriptionPayloadSubscription;
  place: (
    where?: PlaceSubscriptionWhereInput
  ) => PlaceSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CharacterOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type PlaceOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type OccurrenceOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "startDate_ASC"
  | "startDate_DESC"
  | "endDate_ASC"
  | "endDate_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface PlaceUpdateDataInput {
  name?: String;
  description?: String;
}

export interface CharacterUpdateWithWhereUniqueNestedInput {
  where: CharacterWhereUniqueInput;
  data: CharacterUpdateDataInput;
}

export type PlaceWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type CharacterWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface CharacterUpdateManyDataInput {
  name?: String;
  description?: String;
}

export interface CharacterSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CharacterWhereInput;
  AND?: CharacterSubscriptionWhereInput[] | CharacterSubscriptionWhereInput;
  OR?: CharacterSubscriptionWhereInput[] | CharacterSubscriptionWhereInput;
  NOT?: CharacterSubscriptionWhereInput[] | CharacterSubscriptionWhereInput;
}

export interface CharacterUpdateManyWithWhereNestedInput {
  where: CharacterScalarWhereInput;
  data: CharacterUpdateManyDataInput;
}

export interface PlaceUpdateInput {
  name?: String;
  description?: String;
}

export interface CharacterScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  AND?: CharacterScalarWhereInput[] | CharacterScalarWhereInput;
  OR?: CharacterScalarWhereInput[] | CharacterScalarWhereInput;
  NOT?: CharacterScalarWhereInput[] | CharacterScalarWhereInput;
}

export interface PlaceUpdateManyDataInput {
  name?: String;
  description?: String;
}

export type OccurrenceWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PlaceWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  AND?: PlaceWhereInput[] | PlaceWhereInput;
  OR?: PlaceWhereInput[] | PlaceWhereInput;
  NOT?: PlaceWhereInput[] | PlaceWhereInput;
}

export interface CharacterCreateInput {
  name: String;
  description: String;
}

export interface PlaceUpsertWithWhereUniqueNestedInput {
  where: PlaceWhereUniqueInput;
  update: PlaceUpdateDataInput;
  create: PlaceCreateInput;
}

export interface CharacterUpdateInput {
  name?: String;
  description?: String;
}

export interface OccurrenceSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: OccurrenceWhereInput;
  AND?: OccurrenceSubscriptionWhereInput[] | OccurrenceSubscriptionWhereInput;
  OR?: OccurrenceSubscriptionWhereInput[] | OccurrenceSubscriptionWhereInput;
  NOT?: OccurrenceSubscriptionWhereInput[] | OccurrenceSubscriptionWhereInput;
}

export interface CharacterUpdateManyMutationInput {
  name?: String;
  description?: String;
}

export interface PlaceUpdateWithWhereUniqueNestedInput {
  where: PlaceWhereUniqueInput;
  data: PlaceUpdateDataInput;
}

export interface CharacterUpsertWithWhereUniqueNestedInput {
  where: CharacterWhereUniqueInput;
  update: CharacterUpdateDataInput;
  create: CharacterCreateInput;
}

export interface PlaceUpdateManyMutationInput {
  name?: String;
  description?: String;
}

export interface CharacterUpdateDataInput {
  name?: String;
  description?: String;
}

export interface PlaceUpdateManyWithWhereNestedInput {
  where: PlaceScalarWhereInput;
  data: PlaceUpdateManyDataInput;
}

export interface OccurrenceCreateInput {
  name: String;
  description: String;
  startDate: DateTimeInput;
  endDate?: DateTimeInput;
  characters?: CharacterCreateManyInput;
  places?: PlaceCreateManyInput;
}

export interface CharacterWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  AND?: CharacterWhereInput[] | CharacterWhereInput;
  OR?: CharacterWhereInput[] | CharacterWhereInput;
  NOT?: CharacterWhereInput[] | CharacterWhereInput;
}

export interface CharacterCreateManyInput {
  create?: CharacterCreateInput[] | CharacterCreateInput;
  connect?: CharacterWhereUniqueInput[] | CharacterWhereUniqueInput;
}

export interface PlaceSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PlaceWhereInput;
  AND?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
  OR?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
  NOT?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
}

export interface CharacterUpdateManyInput {
  create?: CharacterCreateInput[] | CharacterCreateInput;
  update?:
    | CharacterUpdateWithWhereUniqueNestedInput[]
    | CharacterUpdateWithWhereUniqueNestedInput;
  upsert?:
    | CharacterUpsertWithWhereUniqueNestedInput[]
    | CharacterUpsertWithWhereUniqueNestedInput;
  delete?: CharacterWhereUniqueInput[] | CharacterWhereUniqueInput;
  connect?: CharacterWhereUniqueInput[] | CharacterWhereUniqueInput;
  disconnect?: CharacterWhereUniqueInput[] | CharacterWhereUniqueInput;
  deleteMany?: CharacterScalarWhereInput[] | CharacterScalarWhereInput;
  updateMany?:
    | CharacterUpdateManyWithWhereNestedInput[]
    | CharacterUpdateManyWithWhereNestedInput;
}

export interface OccurrenceUpdateInput {
  name?: String;
  description?: String;
  startDate?: DateTimeInput;
  endDate?: DateTimeInput;
  characters?: CharacterUpdateManyInput;
  places?: PlaceUpdateManyInput;
}

export interface PlaceCreateInput {
  name: String;
  description: String;
}

export interface PlaceCreateManyInput {
  create?: PlaceCreateInput[] | PlaceCreateInput;
  connect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
}

export interface PlaceUpdateManyInput {
  create?: PlaceCreateInput[] | PlaceCreateInput;
  update?:
    | PlaceUpdateWithWhereUniqueNestedInput[]
    | PlaceUpdateWithWhereUniqueNestedInput;
  upsert?:
    | PlaceUpsertWithWhereUniqueNestedInput[]
    | PlaceUpsertWithWhereUniqueNestedInput;
  delete?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
  connect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
  disconnect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
  deleteMany?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
  updateMany?:
    | PlaceUpdateManyWithWhereNestedInput[]
    | PlaceUpdateManyWithWhereNestedInput;
}

export interface OccurrenceWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  startDate?: DateTimeInput;
  startDate_not?: DateTimeInput;
  startDate_in?: DateTimeInput[] | DateTimeInput;
  startDate_not_in?: DateTimeInput[] | DateTimeInput;
  startDate_lt?: DateTimeInput;
  startDate_lte?: DateTimeInput;
  startDate_gt?: DateTimeInput;
  startDate_gte?: DateTimeInput;
  endDate?: DateTimeInput;
  endDate_not?: DateTimeInput;
  endDate_in?: DateTimeInput[] | DateTimeInput;
  endDate_not_in?: DateTimeInput[] | DateTimeInput;
  endDate_lt?: DateTimeInput;
  endDate_lte?: DateTimeInput;
  endDate_gt?: DateTimeInput;
  endDate_gte?: DateTimeInput;
  characters_every?: CharacterWhereInput;
  characters_some?: CharacterWhereInput;
  characters_none?: CharacterWhereInput;
  places_every?: PlaceWhereInput;
  places_some?: PlaceWhereInput;
  places_none?: PlaceWhereInput;
  AND?: OccurrenceWhereInput[] | OccurrenceWhereInput;
  OR?: OccurrenceWhereInput[] | OccurrenceWhereInput;
  NOT?: OccurrenceWhereInput[] | OccurrenceWhereInput;
}

export interface PlaceScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  AND?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
  OR?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
  NOT?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
}

export interface OccurrenceUpdateManyMutationInput {
  name?: String;
  description?: String;
  startDate?: DateTimeInput;
  endDate?: DateTimeInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface PlacePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  description: String;
}

export interface PlacePreviousValuesPromise
  extends Promise<PlacePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  description: () => Promise<String>;
}

export interface PlacePreviousValuesSubscription
  extends Promise<AsyncIterator<PlacePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface CharacterEdge {
  node: Character;
  cursor: String;
}

export interface CharacterEdgePromise
  extends Promise<CharacterEdge>,
    Fragmentable {
  node: <T = CharacterPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CharacterEdgeSubscription
  extends Promise<AsyncIterator<CharacterEdge>>,
    Fragmentable {
  node: <T = CharacterSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface OccurrenceSubscriptionPayload {
  mutation: MutationType;
  node: Occurrence;
  updatedFields: String[];
  previousValues: OccurrencePreviousValues;
}

export interface OccurrenceSubscriptionPayloadPromise
  extends Promise<OccurrenceSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = OccurrencePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = OccurrencePreviousValuesPromise>() => T;
}

export interface OccurrenceSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<OccurrenceSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = OccurrenceSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = OccurrencePreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PlaceEdge {
  node: Place;
  cursor: String;
}

export interface PlaceEdgePromise extends Promise<PlaceEdge>, Fragmentable {
  node: <T = PlacePromise>() => T;
  cursor: () => Promise<String>;
}

export interface PlaceEdgeSubscription
  extends Promise<AsyncIterator<PlaceEdge>>,
    Fragmentable {
  node: <T = PlaceSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateOccurrence {
  count: Int;
}

export interface AggregateOccurrencePromise
  extends Promise<AggregateOccurrence>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateOccurrenceSubscription
  extends Promise<AsyncIterator<AggregateOccurrence>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface CharacterConnection {
  pageInfo: PageInfo;
  edges: CharacterEdge[];
}

export interface CharacterConnectionPromise
  extends Promise<CharacterConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CharacterEdge>>() => T;
  aggregate: <T = AggregateCharacterPromise>() => T;
}

export interface CharacterConnectionSubscription
  extends Promise<AsyncIterator<CharacterConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CharacterEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCharacterSubscription>() => T;
}

export interface OccurrenceConnection {
  pageInfo: PageInfo;
  edges: OccurrenceEdge[];
}

export interface OccurrenceConnectionPromise
  extends Promise<OccurrenceConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<OccurrenceEdge>>() => T;
  aggregate: <T = AggregateOccurrencePromise>() => T;
}

export interface OccurrenceConnectionSubscription
  extends Promise<AsyncIterator<OccurrenceConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<OccurrenceEdgeSubscription>>>() => T;
  aggregate: <T = AggregateOccurrenceSubscription>() => T;
}

export interface PlaceSubscriptionPayload {
  mutation: MutationType;
  node: Place;
  updatedFields: String[];
  previousValues: PlacePreviousValues;
}

export interface PlaceSubscriptionPayloadPromise
  extends Promise<PlaceSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PlacePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PlacePreviousValuesPromise>() => T;
}

export interface PlaceSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PlaceSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PlaceSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PlacePreviousValuesSubscription>() => T;
}

export interface Occurrence {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  description: String;
  startDate: DateTimeOutput;
  endDate?: DateTimeOutput;
}

export interface OccurrencePromise extends Promise<Occurrence>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  startDate: () => Promise<DateTimeOutput>;
  endDate: () => Promise<DateTimeOutput>;
  characters: <T = FragmentableArray<Character>>(args?: {
    where?: CharacterWhereInput;
    orderBy?: CharacterOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  places: <T = FragmentableArray<Place>>(args?: {
    where?: PlaceWhereInput;
    orderBy?: PlaceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface OccurrenceSubscription
  extends Promise<AsyncIterator<Occurrence>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  startDate: () => Promise<AsyncIterator<DateTimeOutput>>;
  endDate: () => Promise<AsyncIterator<DateTimeOutput>>;
  characters: <T = Promise<AsyncIterator<CharacterSubscription>>>(args?: {
    where?: CharacterWhereInput;
    orderBy?: CharacterOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  places: <T = Promise<AsyncIterator<PlaceSubscription>>>(args?: {
    where?: PlaceWhereInput;
    orderBy?: PlaceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface OccurrencePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  description: String;
  startDate: DateTimeOutput;
  endDate?: DateTimeOutput;
}

export interface OccurrencePreviousValuesPromise
  extends Promise<OccurrencePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  startDate: () => Promise<DateTimeOutput>;
  endDate: () => Promise<DateTimeOutput>;
}

export interface OccurrencePreviousValuesSubscription
  extends Promise<AsyncIterator<OccurrencePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  startDate: () => Promise<AsyncIterator<DateTimeOutput>>;
  endDate: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface CharacterPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  description: String;
}

export interface CharacterPreviousValuesPromise
  extends Promise<CharacterPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  description: () => Promise<String>;
}

export interface CharacterPreviousValuesSubscription
  extends Promise<AsyncIterator<CharacterPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface CharacterSubscriptionPayload {
  mutation: MutationType;
  node: Character;
  updatedFields: String[];
  previousValues: CharacterPreviousValues;
}

export interface CharacterSubscriptionPayloadPromise
  extends Promise<CharacterSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CharacterPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CharacterPreviousValuesPromise>() => T;
}

export interface CharacterSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CharacterSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CharacterSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CharacterPreviousValuesSubscription>() => T;
}

export interface Character {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  description: String;
}

export interface CharacterPromise extends Promise<Character>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  description: () => Promise<String>;
}

export interface CharacterSubscription
  extends Promise<AsyncIterator<Character>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCharacter {
  count: Int;
}

export interface AggregateCharacterPromise
  extends Promise<AggregateCharacter>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCharacterSubscription
  extends Promise<AsyncIterator<AggregateCharacter>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Place {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  description: String;
}

export interface PlacePromise extends Promise<Place>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  description: () => Promise<String>;
}

export interface PlaceSubscription
  extends Promise<AsyncIterator<Place>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface OccurrenceEdge {
  node: Occurrence;
  cursor: String;
}

export interface OccurrenceEdgePromise
  extends Promise<OccurrenceEdge>,
    Fragmentable {
  node: <T = OccurrencePromise>() => T;
  cursor: () => Promise<String>;
}

export interface OccurrenceEdgeSubscription
  extends Promise<AsyncIterator<OccurrenceEdge>>,
    Fragmentable {
  node: <T = OccurrenceSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PlaceConnection {
  pageInfo: PageInfo;
  edges: PlaceEdge[];
}

export interface PlaceConnectionPromise
  extends Promise<PlaceConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PlaceEdge>>() => T;
  aggregate: <T = AggregatePlacePromise>() => T;
}

export interface PlaceConnectionSubscription
  extends Promise<AsyncIterator<PlaceConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PlaceEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePlaceSubscription>() => T;
}

export interface AggregatePlace {
  count: Int;
}

export interface AggregatePlacePromise
  extends Promise<AggregatePlace>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePlaceSubscription
  extends Promise<AsyncIterator<AggregatePlace>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
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

/**
 * Type Defs
 */

export const prisma: Prisma;

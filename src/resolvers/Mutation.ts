import {
  CharacterCreateInput,
  CharacterUpdateInput,
  CharacterDeleteInput,
} from '../models/characterInput';
import {
  Prisma,
  CharacterPromise,
  PlacePromise,
  EventPromise,
} from '../generated/prisma-client';
import {
  PlaceCreateInput,
  PlaceUpdateInput,
  PlaceDeleteInput,
} from '../models/placeInput';
import {
  EventCreateInput,
  EventUpdateInput,
  EventDeleteInput,
} from '../models/eventInput';

function createCharacter(
    _parent: object,
    args: CharacterCreateInput,
    context: { prisma: Prisma }
): CharacterPromise {
  return context.prisma.createCharacter({
    description: args.description,
    name: args.name,
  });
}

function updateCharacter(
    _parent: object,
    args: CharacterUpdateInput,
    context: { prisma: Prisma }
): CharacterPromise {
  return context.prisma.updateCharacter({
    data: {
      description: args.description,
      name: args.name,
    },
    where: {
      id: args.id,
    },
  });
}

function deleteCharacter(
    _parent: object,
    args: CharacterDeleteInput,
    context: { prisma: Prisma }
): CharacterPromise {
  return context.prisma.deleteCharacter({
    id: args.id,
  });
}

function createPlace(
    _parent: object,
    args: PlaceCreateInput,
    context: { prisma: Prisma }
): PlacePromise {
  return context.prisma.createPlace({
    description: args.description,
    name: args.name,
  });
}

function updatePlace(
    _parent: object,
    args: PlaceUpdateInput,
    context: { prisma: Prisma }
): PlacePromise {
  return context.prisma.updatePlace({
    data: {
      description: args.description,
      name: args.name,
    },
    where: {
      id: args.id,
    },
  });
}

function deletePlace(
    _parent: object,
    args: PlaceDeleteInput,
    context: { prisma: Prisma }
): PlacePromise {
  return context.prisma.deletePlace({
    id: args.id,
  });
}

function createEvent(
    _parent: object,
    args: EventCreateInput,
    context: { prisma: Prisma }
): EventPromise {
  return context.prisma.createEvent({
    description: args.description,
    name: args.name,
    startDate: args.startDate,
    characters: args.characters
      ? {
        connect: args.characters.map((id) => {
          return {id: id};
        }),
      }
      : args.characters,
    places: args.places
      ? {
        connect: args.places.map((id) => {
          return {id: id};
        }),
      }
      : args.places,
  });
}

function updateEvent(
    _parent: object,
    args: EventUpdateInput,
    context: { prisma: Prisma }
): EventPromise {
  return context.prisma.updateEvent({
    data: {
      description: args.description,
      name: args.name,
      startDate: args.startDate,
    },
    where: {
      id: args.id,
    },
  });
}

function deleteEvent(
    _parent: object,
    args: EventDeleteInput,
    context: { prisma: Prisma }
): EventPromise {
  return context.prisma.deleteEvent({
    id: args.id,
  });
}

export default {
  createCharacter,
  updateCharacter,
  deleteCharacter,
  createPlace,
  updatePlace,
  deletePlace,
  createEvent,
  updateEvent,
  deleteEvent,
};

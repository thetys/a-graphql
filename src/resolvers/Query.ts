import {
  Character,
  CharacterPromise,
  Event,
  EventPromise,
  Place,
  PlacePromise,
  FragmentableArray,
  ID_Input,
  Prisma,
} from '../generated/prisma-client';

function characters(
    _parent: any,
    _args: any,
    context: { prisma: Prisma }
): FragmentableArray<Character> {
  return context.prisma.characters();
}

function character(
    _parent: any,
    args: { id: ID_Input },
    context: { prisma: Prisma }
): CharacterPromise {
  return context.prisma.character({id: args.id});
}

function places(
    _parent: any,
    _args: any,
    context: { prisma: Prisma }
): FragmentableArray<Place> {
  return context.prisma.places();
}

function place(
    _parent: any,
    args: { id: ID_Input },
    context: { prisma: Prisma }
): PlacePromise {
  return context.prisma.place({id: args.id});
}

function events(
    _parent: any,
    _args: any,
    context: { prisma: Prisma }
): FragmentableArray<Event> {
  return context.prisma.events();
}

function event(
    _parent: any,
    args: { id: ID_Input },
    context: { prisma: Prisma }
): EventPromise {
  return context.prisma.event({id: args.id});
}

async function search(
    _parent: any,
    args: { id: ID_Input },
    context: { prisma: Prisma }
): Promise<any> {
  const values = await Promise.all([
    context.prisma.character({ id: args.id }).then((character) => {
      return {
        ...character,
        __typename: 'Character'
      };
    }),
    context.prisma.place({ id: args.id }).then((place) => {
      return {
        ...place,
        __typename: 'Place'
      };
    }),
    context.prisma.event({ id: args.id }).then((event) => {
      return {
        ...event,
        __typename: 'Event'
      };
    }),
  ]);
  return values.find((elem) => elem !== null);
}

export default {
  characters,
  character,
  places,
  place,
  events,
  event,
  search,
};

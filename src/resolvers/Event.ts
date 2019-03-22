import {
  Prisma,
  FragmentableArray,
  Place,
  Character,
  Event,
} from '../generated/prisma-client';

function places(
    parent: Event,
    _args: object,
    context: { prisma: Prisma }
): FragmentableArray<Place> {
  return context.prisma.event({id: parent.id}).places();
}

function characters(
    parent: Event,
    _args: object,
    context: { prisma: Prisma }
): FragmentableArray<Character> {
  return context.prisma.event({id: parent.id}).characters();
}

export default {
  places,
  characters,
};

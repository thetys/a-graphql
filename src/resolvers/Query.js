function characters(parent, args, context) {
  return context.prisma.characters();
}

function places(parent, args, context) {
  return context.prisma.places();
}

function occurrences(parent, args, context) {
  return context.prisma.occurrences();
}

module.exports = {
  characters,
  places,
  occurrences
};

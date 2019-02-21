function characters(parent, args, context) {
  return context.prisma.characters();
}

function places(parent, args, context) {
  return context.prisma.places();
}

function events(parent, args, context) {
  return context.prisma.events();
}

module.exports = {
  characters,
  places,
  events
};

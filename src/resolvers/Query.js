function characters(parent, args, context) {
  return context.prisma.characters();
}

function character(parent, args, context) {
  return context.prisma.character({id: args.id});
}

function places(parent, args, context) {
  return context.prisma.places();
}

function place(parent, args, context) {
  return context.prisma.place({id: args.id});
}

function events(parent, args, context) {
  return context.prisma.events();
}

function event(parent, args, context) {
  return context.prisma.event({id: args.id});
}

module.exports = {
  characters,
  character,
  places,
  place,
  events,
  event
};

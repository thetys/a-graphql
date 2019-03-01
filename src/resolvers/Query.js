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

function search(parent, args, context) {
  return Promise.all([
    context.prisma.character({id: args.id}).then(character => {
      character.__typename = 'Character';
      return character;
    }),
    context.prisma.place({id: args.id}).then(place => {
      place.__typename = 'Place';
      return place;
    }),
    context.prisma.event({id: args.id}).then(event => {
      event.__typename = 'Event';
      return event;
    }),
  ]).then(values => values.find(elem => elem));
}

module.exports = {
  characters,
  character,
  places,
  place,
  events,
  event,
  search,
};

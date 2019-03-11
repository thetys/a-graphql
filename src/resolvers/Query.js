/**
 * Get all the characters
 * @param {object} _parent The rootValue of the server
 * @param {object} _args Arguments passed into the field in the query
 * @param {object} context Context of the mutation
 * @return {FragmentableArray<Character>} Array of characters
 */
function characters(_parent, _args, context) {
  return context.prisma.characters();
}

/**
 * Get a character by its id
 * @param {object} _parent The rootValue of the server
 * @param {object} args Arguments passed into the field in the query
 * @param {object} context Context of the mutation
 * @return {CharacterPromise} A character
 */
function character(_parent, args, context) {
  return context.prisma.character({id: args.id});
}

/**
 * Get all the places
 * @param {object} _parent The rootValue of the server
 * @param {object} _args Arguments passed into the field in the query
 * @param {object} context Context of the mutation
 * @return {FragmentableArray<Place>} Array of places
 */
function places(_parent, _args, context) {
  return context.prisma.places();
}

/**
 * Get a place by its id
 * @param {object} _parent The rootValue of the server
 * @param {object} args Arguments passed into the field in the query
 * @param {object} context Context of the mutation
 * @return {PlacePromise} A place
 */
function place(_parent, args, context) {
  return context.prisma.place({id: args.id});
}

/**
 * Get all the events
 * @param {object} _parent The rootValue of the server
 * @param {object} _args Arguments passed into the field in the query
 * @param {object} context Context of the mutation
 * @return {FragmentableArray<Event>} Array of events
 */
function events(_parent, _args, context) {
  return context.prisma.events();
}

/**
 * Get an event by its id
 * @param {object} _parent The rootValue of the server
 * @param {object} args Arguments passed into the field in the query
 * @param {object} context Context of the mutation
 * @return {EventPromise} An event
 */
function event(_parent, args, context) {
  return context.prisma.event({id: args.id});
}

/**
 * Get a character or a place or an event by its id
 * @param {object} _parent The rootValue of the server
 * @param {object} args Arguments passed into the field in the query
 * @param {object} context Context of the mutation
 * @return {CharacterPromise|PlacePromise|EventPromise} A character or a place
 * or an event
 */
function search(_parent, args, context) {
  return Promise.all([
    context.prisma.character({id: args.id}).then((character) => {
      character.__typename = 'Character';
      return character;
    }),
    context.prisma.place({id: args.id}).then((place) => {
      place.__typename = 'Place';
      return place;
    }),
    context.prisma.event({id: args.id}).then((event) => {
      event.__typename = 'Event';
      return event;
    }),
  ]).then((values) => values.find((elem) => elem));
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

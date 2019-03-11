/**
 * Get the places linked to an event
 * @param {object} parent The event object
 * @param {object} _args Arguments passed into the field in the query
 * @param {object} context Context of the query
 * @return {FragmentableArray<Place>} Array of places
 */
function places(parent, _args, context) {
  return context.prisma.event({id: parent.id}).places();
}

/**
 * Get the characters linked to an event
 * @param {object} parent The event object
 * @param {object} _args Arguments passed into the field in the query
 * @param {object} context Context of the query
 * @return {FragmentableArray<Character>} Array of characters
 */
function characters(parent, _args, context) {
  return context.prisma.event({id: parent.id}).characters();
}

export default {
  places,
  characters,
};

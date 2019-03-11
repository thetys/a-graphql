/**
 * Create a new character
 * @param {object} _parent Good question...
 * @param {object} args Arguments passed into the field in the mutation
 * @param {object} context Context of the mutation
 * @return {CharacterPromise} The new character
 */
function createCharacter(_parent, args, context) {
  return context.prisma.createCharacter({
    description: args.description,
    name: args.name,
  });
}

/**
 * Update a character
 * @param {object} _parent Good question...
 * @param {object} args Arguments passed into the field in the mutation
 * @param {object} context Context of the mutation
 * @return {CharacterPromise} The updated character
 */
function updateCharacter(_parent, args, context) {
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

/**
 * Delete a character
 * @param {object} _parent Good question...
 * @param {object} args Arguments passed into the field in the mutation
 * @param {object} context Context of the mutation
 * @return {CharacterPromise} The deleted character
 */
function deleteCharacter(_parent, args, context) {
  return context.prisma.deleteCharacter({
    id: args.id,
  });
}

/**
 * Create a new place
 * @param {object} _parent Good question...
 * @param {object} args Arguments passed into the field in the mutation
 * @param {object} context Context of the mutation
 * @return {PlacePromise} The new place
 */
function createPlace(_parent, args, context) {
  return context.prisma.createPlace({
    description: args.description,
    name: args.name,
  });
}

/**
 * Update a place
 * @param {object} _parent Good question...
 * @param {object} args Arguments passed into the field in the mutation
 * @param {object} context Context of the mutation
 * @return {PlacePromise} The updated place
 */
function updatePlace(_parent, args, context) {
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

/**
 * Delete a place
 * @param {object} _parent Good question...
 * @param {object} args Arguments passed into the field in the mutation
 * @param {object} context Context of the mutation
 * @return {PlacePromise} The deleted place
 */
function deletePlace(_parent, args, context) {
  return context.prisma.deletePlace({
    id: args.id,
  });
}

/**
 * Create a new event
 * @param {object} _parent Good question...
 * @param {object} args Arguments passed into the field in the mutation
 * @param {object} context Context of the mutation
 * @return {EventPromise} The new event
 */
function createEvent(_parent, args, context) {
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

/**
 * Update an event
 * @param {object} _parent Good question...
 * @param {object} args Arguments passed into the field in the mutation
 * @param {object} context Context of the mutation
 * @return {EventPromise} The updated event
 */
function updateEvent(_parent, args, context) {
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

/**
 * Delete an event
 * @param {object} _parent Good question...
 * @param {object} args Arguments passed into the field in the mutation
 * @param {object} context Context of the mutation
 * @return {EventPromise} The deleted event
 */
function deleteEvent(_parent, args, context) {
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

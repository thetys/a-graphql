function createCharacter(parent, args, context) {
  return context.prisma.createCharacter({
    description: args.description,
    name: args.name,
  });
}

function updateCharacter(parent, args, context) {
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

function deleteCharacter(parent, args, context) {
  return context.prisma.deleteCharacter({
    id: args.id,
  });
}

function createPlace(parent, args, context) {
  return context.prisma.createPlace({
    description: args.description,
    name: args.name,
  });
}

function updatePlace(parent, args, context) {
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

function deletePlace(parent, args, context) {
  return context.prisma.deletePlace({
    id: args.id,
  });
}

function createOccurrence(parent, args, context) {
  return context.prisma.createOccurrence({
    description: args.description,
    name: args.name,
    startDate: args.startDate,
    characters: args.characters ?
        {
          connect: args.characters.map(id => {
            return {id: id};
          }),
        } :
        args.characters
    ,
    places: args.places ?
        {
          connect: args.places.map(id => {
            return {id: id};
          }),
        } :
        args.places
    ,
  });
}

function updateOccurrence(parent, args, context) {
  return context.prisma.updateOccurrence({
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

function deleteOccurrence(parent, args, context) {
  return context.prisma.deleteOccurrence({
    id: args.id,
  });
}

module.exports = {
  createCharacter,
  updateCharacter,
  deleteCharacter,
  createPlace,
  updatePlace,
  deletePlace,
  createOccurrence,
  updateOccurrence,
  deleteOccurrence,
};

function places(parent, args, context) {
  return context.prisma.occurrence({id: parent.id}).places();
}

function characters(parent, args, context) {
  return context.prisma.occurrence({id: parent.id}).characters();
}

module.exports = {
  places,
  characters,
};

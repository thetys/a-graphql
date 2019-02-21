function places(parent, args, context) {
  return context.prisma.event({id: parent.id}).places();
}

function characters(parent, args, context) {
  return context.prisma.event({id: parent.id}).characters();
}

module.exports = {
  places,
  characters,
};

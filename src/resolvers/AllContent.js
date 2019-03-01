function __resolveType(obj) {
  return obj.__typename;
}

module.exports = {
  __resolveType,
};

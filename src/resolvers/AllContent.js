/**
 * Resolve the type of the object returned by the allContent query
 * @param {object} obj Result of the Allcontent query
 * @return {string} The type of obj
 */
function __resolveType(obj) {
  return obj.__typename;
}

export default {
  __resolveType,
};

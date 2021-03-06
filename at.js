import baseAt from './_baseAt.js';

/**
 * Creates an array of values corresponding to `paths` of `object`.
 *
 * @static
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Array} Returns the picked values.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 *
 * at(object, ['a[0].b.c', 'a[1]']);
 * // => [3, 4]
 */
function at(...paths) {
  return baseAt(paths);
}

export default at;

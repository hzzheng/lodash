import baseSlice from './_baseSlice.js';

/**
 * Gets all but the first element of `array`.
 *
 * @static
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * tail([1, 2, 3]);
 * // => [2, 3]
 */
function tail(array) {
  const length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 1, length) : [];
}

export default tail;

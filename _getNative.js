import isNative from './isNative.js';

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  const value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

export default getNative;

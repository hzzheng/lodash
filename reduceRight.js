import arrayReduceRight from './_arrayReduceRight.js';
import baseEachRight from './_baseEachRight.js';
import baseReduce from './_baseReduce.js';

/**
 * This method is like `reduce` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see reduce
 * @example
 *
 * var array = [[0, 1], [2, 3], [4, 5]];
 *
 * reduceRight(array, function(flattened, other) {
 *   return flattened.concat(other);
 * }, []);
 * // => [4, 5, 2, 3, 0, 1]
 */
function reduceRight(collection, iteratee, accumulator) {
  const func = Array.isArray(collection) ? arrayReduceRight : baseReduce;
  const initAccum = arguments.length < 3;
  return func(collection, iteratee, accumulator, initAccum, baseEachRight);
}

export default reduceRight;

/**
 * Limit a number to be within min and max range
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @param {number} val The number to clapm.
 * @param {number} min The lower bound of the range
 * @param {number} max The upper bound of the range
 * @returns {number} Returns the number limited to within min and max.
 * @example
 *
 * clamp(8, 1, 7);
 * // => 7
 */
function clamp(val, min, max) {
    if (val < min) return min;
    if (val > max) return max;
    return val;
}

export { clamp };
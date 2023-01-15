/**
 * Wrap-around a number within the min/max bounds provided, such that if the number is above max it restarts at min, 
 * and if the number is below min it restarts at max
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @param {number} val The number to wrap.
 * @param {number} min The lower bound of the range
 * @param {number} max The upper bound of the range
 * @returns {number} Returns the number as it wraps in the range.
 * @example
 *
 * wrap(8, 1, 7);
 * // => 1
 */
function wrap(val, min, max) {
    let dist = (max - min) + 1;
    if (val < min) {
        let m = Math.abs(min - val - 1) % (dist);
        return (max - m);
    } else if (val > max) {
        let m = Math.abs(val - max - 1) % (dist);
        return min + m;
    } else {
        return val;
    }
}

export { wrap };
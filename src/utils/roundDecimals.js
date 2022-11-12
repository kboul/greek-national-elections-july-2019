/**
 *
 * @param {number} value
 * @returns {number}
 */

export default function roundDecimals(value) {
  return Math.round(value * 100) / 100;
}

/** @module helper */

/**
 * Converts an javascript object to Minecraft DataTag.
 * @param {object} obj
 * @returns {string}
 */
export default function toDataTag(obj) {
  if (typeof obj != 'object') {
    throw new TypeError('obj must be an object');
  }
  return JSON.stringify(obj).replace(/"(\w+)":/g, '$1:');
}

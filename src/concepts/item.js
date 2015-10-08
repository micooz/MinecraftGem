/** @module concepts */

import ItemIDs from '../constants/items';

/**
 * Represents an Item Name.
 *
 * @example
 * const Apple = new Item('apple');
 *
 * @see
 * constants/items.js
 */
export default class Item {

  /**
   * @param {string} name
   * @throw {Error} when name is empty.
   */
  constructor(name) {
    if (typeof name != 'string' || !name) {
      throw new Error('Item name must be set');
    }
    this._name = name;
  }

  /**
   * return item name in the form of Minecraft.
   *
   * @return {string}
   */
  toString() {
    return ItemIDs[this._name];
  }

}

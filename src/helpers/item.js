import ItemIDs from '../constants/items';

/**
 * Item
 */
export default class Item {

  constructor(name) {
    if (typeof name != 'string' || !name) {
      throw new Error('Item name must be set');
    }
    this._name = name;
  }

  toString() {
    return ItemIDs[this._name];
  }

}
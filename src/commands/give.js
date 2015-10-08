/** @module commands */

import Command from './command';
import Helper from '../helpers';
const {Item, Player} = require('../concepts');

/**
 * Gives an item to a player.
 * @example
 * let give = new Give(
 *   new Player('Mike'),
 *   new Item('apple'),
 *   64,
 *   0,
 *   {...}
 * );
 * @see http://minecraft.gamepedia.com/Commands#give
 */
export default class Give extends Command {

  /**
   * @param {Player} player
   * @param {Item} item
   * @param {Number} amount
   * @param {Number} data
   * @param {Object} dataTag
   */
  constructor(player, item, amount = 1, data = 0, dataTag = {}) {
    super();
    this._name = 'give';

    if (!(player instanceof Player)) {
      throw new TypeError('player should be an instance of Player');
    }

    if (!(item instanceof Item)) {
      throw new TypeError('item should be an instance of Item');
    }

    this._options = [
      player.toString(),
      item.toString(),
      amount.toString(),
      data.toString(),
      Helper.toDataTag(dataTag)
    ].join(' ');
  }

}
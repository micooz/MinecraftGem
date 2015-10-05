import Command from './command';
import Player from '../helpers/player';
import Item from '../helpers/item';

/**
 * Gives an item to a player.
 * Syntax
 *   give <player> <item> [amount] [data] [dataTag]
 *
 * let give = new Give(
 *   new Player('Mike'),
 *   new Item('apple'),
 *   64,
 *   0,
 *   {...}
 * );
 */
module.exports = class Give extends Command {

  // TODO: simplify dataTag
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
      JSON.stringify(dataTag).replace(/"(\w+)":/g, '$1:')
    ].join(' ');
  }

};
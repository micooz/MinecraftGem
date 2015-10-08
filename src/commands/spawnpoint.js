/** @module commands */

import Command from './command';
const {Player, Coordinate} = require('../concepts');

/**
 * Sets the spawn point for a player.
 *
 * @example
 * const spawnpoint = new Spawnpoint(
 *   new Player('Mike'),
 *   new Coordinate(10, 20, 30) // optional
 * );
 * @see
 * http://minecraft.gamepedia.com/Commands#spawnpoint
 */
export default class Spawnpoint extends Command {

  /**
   * @param {Player} player
   * @param {Coordinate} coordinate
   */
  constructor(player, coordinate) {
    super();

    this._name = 'spawnpoint';

    coordinate = coordinate || new Coordinate();

    if (!(player instanceof Player)) {
      throw TypeError('player should be an instance of Player');
    }

    if (!(coordinate instanceof Coordinate)) {
      throw TypeError('coordinate should be an instance of Coordinate');
    }

    this._options = [player.toString(), coordinate.toString()].join(' ');
  }

}

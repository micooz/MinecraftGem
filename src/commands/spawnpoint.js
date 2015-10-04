import Command from './command';
import Player from '../helpers/player';
import Coordinate from '../helpers/coordinate';

/**
 * /spawnpoint
 *   Sets the spawn point for a player.
 * Syntax
 *   spawnpoint
 *   spawnpoint <player>
 *   spawnpoint <player> <x> <y> <z>
 *
 * let spawnpoint = new Spawnpoint(
 *   new Player('Mike'),
 *   new Coordinate(10, 20, 30) // optional
 * );
 *
 */
module.exports = class Spawnpoint extends Command {

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

};

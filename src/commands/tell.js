import Command from './command';
import Player from '../helpers/player';

/**
 * /tell
 *   Sends a private message to one or more players.
 * Syntax
 *   tell <player> <message ...>
 *   msg <player> <message ...>
 *   w <player> <message ...>
 *
 * let tell = new Tell(new Player('Mike'), 'hi there');
 */
module.exports = class Tell extends Command {

  constructor(player, msg) {
    super();
    this._name = 'tell';

    if (!(player instanceof Player)) {
      throw new TypeError('player should be an instance of Player');
    }

    if (typeof msg != 'string') {
      throw new TypeError('msg should be a string');
    }

    this._options = [player.toString(), msg].join(' ');
  }

};

/** @module commands */

import Command from './command';
const {Player} = require('../concepts');

/**
 * Sends a private message to one or more players.
 *
 * @example
 * const tell = new Tell(new Player('Mike'), 'hi there');
 */
export default class Tell extends Command {

  /**
   * @param {Player} player
   * @param {string} msg
   * @throw {TypeError} throw error when params type mismatch.
   */
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

}

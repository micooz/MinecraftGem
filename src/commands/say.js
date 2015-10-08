/** @module commands */

import Command from './command';

/**
 * Sends a message in the chat to other players.
 *
 * @example
 * const say = new Say('hi there');
 *
 * @see
 * http://minecraft.gamepedia.com/Commands#say
 */
export default class Say extends Command {

  /**
   * @param {string} msg
   */
  constructor(msg) {
    super();
    this._name = 'say';

    if (typeof msg == 'string') {
      this._options = msg || '';
    } else {
      throw new TypeError('msg should be String');
    }
  }

}

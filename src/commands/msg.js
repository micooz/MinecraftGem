/** @module commands */

import Tell from './tell';

/**
 * Alias of Tell command.
 *
 * @example
 * const msg = new Msg('Mike', 'Hello');
 */
export default class Msg extends Tell {

  /**
   * @param {Player} player
   * @param {string} msg
   */
  constructor(player, msg) {
    super(player, msg);
    this._name = 'msg';
  }

}
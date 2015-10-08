/** @module commands */

import Tell from './tell';

/**
 * Alias of Tell command
 */
export default class W extends Tell {

  /**
   * @param {Player} player
   * @param {string} msg
   */
  constructor(player, msg) {
    super(player, msg);
    this._name = 'w';
  }

}
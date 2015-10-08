/** @module concepts */

import TargetSelector from './target';

/**
 * Represents a player which can be a target selector or a plain string.
 *
 * @example
 * const player = new Player('Mike');
 * const player = new Player(new TargetSelector('p', {
 *   radius: [10, 40]
 * }));
 */
export default class Player {

  /**
   * @param {TargetSelector|string} who
   * @throw {TypeError} when type mismatch.
   */
  constructor(who) {
    if (who instanceof TargetSelector || typeof who == 'string') {
      this._who = who;
    } else {
      throw TypeError('who must be a string or target selector');
    }
  }

  /**
   * return assembled string.
   *
   * @returns {string}
   */
  toString() {
    const who = this._who;
    return (who instanceof TargetSelector) ? who.toString() : who;
  }

}

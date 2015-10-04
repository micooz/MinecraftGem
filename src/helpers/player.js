import TargetSelector from './target';

/**
 * Player
 *   Which can be a target selector or a plain string.
 *
 * let player = new Player('Mike');
 * let player = new Player(new TargetSelector('p', {
 *   radius: [10, 40]
 * }));
 */
export default class Player {

  constructor(who) {
    if (who instanceof TargetSelector || typeof who == 'string') {
      this._who = who;
    } else {
      throw TypeError('who must be a string or target selector');
    }
  }

  toString() {
    const who = this._who;
    return (who instanceof TargetSelector) ? who.toString() : who;
  }

}
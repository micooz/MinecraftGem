import Command from './command';

/**
 * /say
 *   Sends a message in the chat to other players.
 * Syntax
 *   say <message ...>
 *
 * let say = new Say('hi there');
 *
 * http://minecraft.gamepedia.com/Commands#say
 */
module.exports = class Say extends Command {

  constructor(msg) {
    super();
    this._name = 'say';

    if (typeof msg == 'string') {
      this._options = msg || '';
    } else {
      throw new TypeError('msg should be String');
    }
  }

};


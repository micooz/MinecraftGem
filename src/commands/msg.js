import Tell from './tell';

/**
 * Alias of Tell command
 */
module.exports = class Msg extends Tell {

  constructor(player, msg) {
    super(player, msg);
    this._name = 'msg';
  }

};
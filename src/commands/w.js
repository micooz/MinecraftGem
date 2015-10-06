import Tell from './tell';

/**
 * Alias of Tell command
 */
module.exports = class W extends Tell {

  constructor(player, msg) {
    super(player, msg);
    this._name = 'w';
  }

};
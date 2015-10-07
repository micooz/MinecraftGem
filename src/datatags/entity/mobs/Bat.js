import Mob from './mob'

module.exports = class Bat extends Mob {

  constructor() {
    super();
    this.BatFlags = Number; // 1 when hanging upside-down from a block, 0 when flying.
  }

};
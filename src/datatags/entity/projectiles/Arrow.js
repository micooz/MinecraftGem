import Projectiles from './projectiles';

module.exports = class Arrow extends Projectiles {

  constructor() {
    super();
    this.inData = Number;
    this.pickup = Number;
    this.player = Number; // 1 or 0
    this.life = Number;
    this.damage = Number;
    this.inGround = Number; // 1 or 0
  }

};
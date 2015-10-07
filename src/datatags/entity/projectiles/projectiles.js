import Entity from '../entity'

module.exports = class Projectiles extends Entity {

  constructor() {
    super();
    this.xTile = Number;
    this.yTile = Number;
    this.zTile = Number;
    this.inTile = String;
  }

};
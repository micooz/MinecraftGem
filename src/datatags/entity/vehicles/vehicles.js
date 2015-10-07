import Entity from '../entity';

module.exports = class Vehicles extends Entity {

  constructor() {
    super();
    this.CustomDisplayTile = Number; // 1 or 0
    this.DisplayTile = String;
    this.DisplayData = Number;
    this.DisplayOffset = Number;
  }

};

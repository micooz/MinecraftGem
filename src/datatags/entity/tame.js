/**
 * Additional fields for mobs that can be tamed by players
 * @type {Tame}
 */
module.exports = class Tame {

  constructor() {
    this.Owner = String;
    this.OwnerUUID = String;
    this.Sitting = Number; // 1 or 0
  }

};
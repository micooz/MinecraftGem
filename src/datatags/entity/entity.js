/**
 *
 * @type {Entity}
 */
module.exports = class Entity {

  constructor() {
    this.id = String;
    this.Pos = [
      // X, Y, Z
      Number, Number, Number
    ];
    this.Motion = [
      // dX, dY, dZ
      Number, Number, Number
    ];
    this.Rotation = [
      Number, Number
    ];
    this.FallDistance = Number;
    this.Fire = Number;
    this.Air = Number;
    this.OnGround = Number; // 1 or 0
    this.Dimension = Number; // -1 for The Nether, 0 for The Overworld, and 1 for The End.
    this.Invulnerable = Number; // 1 or 0
    this.PortalCooldown = Number;
    this.UUIDMost = Number;
    this.UUIDLeast = Number;
    this.UUID = Number;
    this.CustomName = String;
    this.CustomNameVisible = Number; // 1 or 0
    this.Silent = Number; // 1 or 0
    // this.Riding = {};
    this.Glowing = Number; // 1 or 0
    this.Tags = [];
    this.CommandStats = {
      SuccessCountObjective: String,
      SuccessCountName: String,
      AffectedBlocksObjective: String,
      AffectedBlocksName: String,
      AffectedEntitiesObjective: String,
      AffectedEntitiesName: String,
      AffectedItemsObjective: String,
      AffectedItemsName: String,
      QueryResultObjective: String,
      QueryResultName: String
    };
  }

};
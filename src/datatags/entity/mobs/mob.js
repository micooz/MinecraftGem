import Entity from '../entity';

/**
 * the base class of all mobs
 * @type {Entity}
 */
module.exports = class Mob extends Entity {

  constructor() {
    super();
    this.Health = Number;
    this.AbsorptionAmount = Number;
    this.AttackTime = Number;
    this.HurtTime = Number;
    this.HurtByTimestamp = Number;
    this.DeathTime = Number;
    this.Attributes = [{
      Name: String,
      Base: Number,
      Modifiers: {
        Name: String,
        Amount: Number,
        Operation: Number,
        UUIDMost: Number,
        UUIDLeast: Number
      }
    }];
    this.ActiveEffects = [{
      Id: Number,
      Amplifier: Number,
      Duration: Number,
      Ambient: Number, // 1 or 0
      ShowParticles: Number
    }];
    this.HandItems = [
      {}, // The item being held in the mob's main hand.
      {}  // The item being held in the mob's off hand.
    ];
    this.ArmorItems = [
      {}, // Armor (Feet)
      {}, // Armor (Legs)
      {}, // Armor (Chest)
      {}  // Armor (Head)
    ];
    this.HandDropChances = [
      Number, // carried in the main hand
      Number  // carried in the off hand
    ];
    this.ArmorDropChances = [
      Number, // (Feet)
      Number, // (Legs)
      Number, // (Chest)
      Number  // (Head)
    ];
    this.CanPickUpLoot = Number; // 1 or 0
    this.NoAI = Number; // 1 or 0
    this.PersistenceRequired = Number; // 1 or 0
    this.LeftHanded = Number; // 1 or 0
    this.Team = String;
    this.Leashed = Number; // 1 or 0
    this.Leash = {
      UUIDMost: Number,
      UUIDLeast: Number,
      X: Number,
      Y: Number,
      Z: Number
    };
  }

};
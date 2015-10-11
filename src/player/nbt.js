import Entity from '../datatags/entity/entity';
import Mob from '../datatags/entity/mobs/mob';
import Item from '../datatags/entity/items/item';

class ItemStructure {

  constructor() {
    this.Count = Number;
    this.Slot = Number;
    this.Damage = Number;
    this.id = String;
    // this.tag = {

    // General Tags
    this.Unbreakable = Number;
    this.CanDestroy = [
      Number
    ];

    // Block Tags
    this.CanPlaceOn = [
      Number
    ];
    this.BlockEntityTag = Entity;

    // Enchantments
    this.ench = [
      {id: Number, lvl: Number}
    ];
    this.StoredEnchantments = [ // for enchanted books
      {id: Number, lvl: Number}
    ];

    // Attribute Modifiers
    this.AttributeModifiers = [
      {
        AttributeName: String,
        Name: String,
        Slot: String,
        Operation: Number,
        Amount: Number,
        UUIDMost: Number,
        UUIDLeast: Number
      }
    ];

    // Potion Effects
    this.CustomPotionEffects = [
      {
        Id: Number,
        Amplifier: Number,
        Duration: Number,
        Ambient: Number,
        ShowParticles: Number
      }
    ];
    this.Potion = String;

    // Display Properties
    this.display = {
      color: Number,
      Name: Number,
      Lore: [
        String
      ]
    };
    this.HideFlags = Number;

    // TODO: Tags of Written Books, Player Heads, Fireworks, Armor Stands, Maps

    // };
  }

}

class NBT_1 extends Entity {

  /**
   * @see
   * http://minecraft.gamepedia.com/Player.dat_format#NBT_structure
   */
  constructor() {
    super();
  }

}

class NBT_2 extends Mob {

  /**
   * @see
   * http://minecraft.gamepedia.com/Player.dat_format#NBT_structure
   */
  constructor() {
    super();
    // All tags from Entities except the id, CustomName, and CustomNameVisible tags.
    delete this.id;
    delete this.CustomName;
    delete this.CustomNameVisible;
    // All tags from Mobs except Equipment, DropChances, CanPickUpLoot,
    // PersistenceRequired, Leashed, and Leash.
    delete this.ArmorDropChances;
    delete this.HandDropChances;
    delete this.CanPickUpLoot;
    delete this.PersistenceRequired;
    delete this.Leashed;
    delete this.Leash;
  }

}

export default class NBT extends NBT_2 {

  constructor() {
    super();
    this.DataVersion = Number;
    this.Dimension = Number;
    this.playerGameType = Number;
    this.Score = Number;
    this.SelectedItemSlot = Number;
    this.SelectedItem = Item;
    this.SpawnX = Number;
    this.SpawnY = Number;
    this.SpawnZ = Number;
    this.SpawnForced = Number; // 1 or 0
    this.Sleeping = Number; // 1 or 0
    this.SleepTimer = Number;
    this.foodLevel = Number;
    this.foodExhaustionLevel = Number;
    this.foodSaturationLevel = Number;
    this.foodTickTimer = Number;
    this.XpLevel = Number;
    this.XpP = Number;
    this.XpTotal = Number;
    this.XpSeed = Number;
    this.Inventory = [
      ItemStructure
    ];
    this.EnderItems = [
      ItemStructure
    ];
    this.abilities = {
      walkSpeed: Number,
      flySpeed: Number,
      mayfly: Number,
      flying: Number,
      invulnerable: Number,
      mayBuild: Number,
      instaBuild: Number
    };
    this.RootVehicle = {
      AttachLeast: Number,
      AttachMost: Number,
      Entity: Entity
    };
  }

}

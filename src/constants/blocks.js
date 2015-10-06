/**
 * define all block IDs
 * http://minecraft.gamepedia.com/Data_values#Block_IDs
 */
let blocks = [];

["grass", "planks", "flowing_water", "flowing_lava", "log", "lapis_ore", "lapis_block", "noteblock", "golden_rail", "web", "tallgrass", "deadbush", "piston_head", "piston_extension", "yellow_flower", "red_flower", "gold_block", "iron_block", "brick_block", "mossy_cobblestone", "mob_spawner", "oak_stairs", "diamond_block", "lit_furnace", "standing_sign", "wooden_door", "stone_stairs", "wall_sign", "lit_redstone_ore", "unlit_redstone_torch", "snow_layer", "reeds", "lit_pumpkin", "unpowered_repeater", "powered_repeater", "stonebrick", "brown_mushroom_block", "red_mushroom_block", "melon_block", "vine", "waterlily", "enchanting_table", "lit_redstone_lamp", "emerald_block", "spruce_stairs", "birch_stairs", "jungle_stairs", "carrots", "potatoes", "skull", "light_weighted_pressure_plate", "heavy_weighted_pressure_plate", "unpowered_comparator", "powered_comparator", "daylight_detector", "redstone_block", "quartz_ore", "quartz_block", "stained_hardened_clay", "leaves2", "log2", "acacia_stairs", "dark_oak_stairs", "slime", "hay_block", "coal_block", "double_plant", "standing_banner", "wall_banner", "daylight_detector_inverted", "double_stone_slab2", "stone_slab2", "spruce_fence_gate", "birch_fence_gate", "jungle_fence_gate", "dark_oak_fence_gate", "acacia_fence_gate", "spruce_fence", "birch_fence", "jungle_fence", "dark_oak_fence", "end_bricks", "beetroots"]
  .forEach(function (key) {
    blocks[key] = `minecraft:${key}`;
  });

module.exports = blocks;
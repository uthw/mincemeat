onEvent("recipes", (event) => {
  event.remove({ output: "cyclic:water_candle" });

  let removeItems = [
    "cyclic:charm_longfall",
    "cyclic:uncrafter",
    "cyclic:disenchanter",
    "cyclic:slingshot",
    "cyclic:heart",
    "cyclic:heart_empty",
    "cyclic:mattock",
    "cyclic:flippers",
    "cyclic:apple_sprout_diamond",
    "cyclic:apple_diamond",
    "cyclic:apple_sprout_emerald",
    "cyclic:soulstone",
    "cyclic:crystal_boots",
    "cyclic:crystal_helmet",
    "cyclic:crystal_chestplate",
    "cyclic:crystal_leggings",
    "cyclic:crystal_sword",
    "cyclic:crystal_hoe",
    "cyclic:crystal_shovel",
    "cyclic:crystal_pickaxe",
    "cyclic:crystal_axe",
    "cyclic:charm_home",
    "cyclic:charm_world",
    "cyclic:charm_creeper",
    "cyclic:charm_antipotion",
    "cyclic:charm_fire",
    "cyclic:charm_wither",
    "cyclic:charm_void",
    "cyclic:charm_speed",
    "cyclic:apple_honey",
    "cyclic:charm_starvation",
    "cyclic:charm_fire",
    "cyclic:charm_attack_speed",
    "cyclic:ender_pearl_reuse",
    "cyclic:ender_pearl_mounted",
    "cyclic:ender_bag",
    "cyclic:teleport_wand",
    Item.of("minecraft:potion", '{Potion:"cyclic:resistance"}'),
    Item.of("minecraft:splash_potion", '{Potion:"cyclic:resistance"}'),
    Item.of("minecraft:lingering_potion", '{Potion:"cyclic:resistance"}'),
    "cyclic:lightning_scepter",
    "cyclic:fire_scepter",
    "cyclic:ice_scepter",
    "cyclic:quiver_damage",
    "cyclic:crafter",
  ];
  removeItems.forEach((item) => event.remove({ output: item }));

  event.shaped("cyclic:water_candle", [" A ", "CBC", "CDC"], {
    A: "#supplementaries:candle/wick",
    B: "minecraft:diamond_block",
    C: "blue_skies:aquite_gem",
    D: "#quark:candles",
  });

  event.remove({ output: "cyclic:charm_xp_blocker" });
  event.shaped("cyclic:charm_xp_blocker", [" A ", "ABA", " C "], {
    A: "minecraft:iron_nugget",
    B: "atum:relic_dirty_ring",
    C: "cyclic:experience_food",
  });

  event.shaped("cyclic:soulstone", ["ABA", "BCB", "ABA"], {
    A: "betterendforge:amber_gem",
    B: "minecraft:totem_of_undying",
    C: "mod_lavacow:undyingheart",
  });

  event.shaped("cyclic:charm_starvation", ["ABC", "DEF", "GHI"], {
    A: "create:blaze_cake",
    B: "minecraft:enchanted_golden_apple",
    C: "farmersdelight:bacon_sandwich",
    D: "create:honeyed_apple",
    E: "minecraft:ghast_tear",
    F: "abnormals_delight:dune_platter",
    G: "netherdepthsupgrade:warped_kelp_roll",
    H: "aquaculture:sushi",
    I: "culturaldelights:beef_burrito",
  });

  event.replaceInput("cyclic:apple_honey", "buzzier_bees:honey_apple");

  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    item_1: [
      {
        item: "forbidden_arcanus:ender_pearl_fragment",
      },
    ],
    item_2: [
      {
        item: "forbidden_arcanus:ender_pearl_fragment",
      },
    ],
    item_3: [
      {
        item: "forbidden_arcanus:ender_pearl_fragment",
      },
    ],
    item_4: [
      {
        item: "forbidden_arcanus:ender_pearl_fragment",
      },
    ],
    item_5: [
      {
        item: "forbidden_arcanus:ender_pearl_fragment",
      },
    ],
    item_6: [
      {
        item: "forbidden_arcanus:ender_pearl_fragment",
      },
    ],
    item_7: [
      {
        tag: "forge:gems/mana",
      },
    ],
    item_8: [
      {
        tag: "forge:gems/mana",
      },
    ],
    item_9: [
      {
        item: "forbidden_arcanus:ender_pearl_fragment",
      },
    ],
    item_10: [
      {
        item: "forbidden_arcanus:ender_pearl_fragment",
      },
    ],
    reagent: [
      {
        item: "minecraft:ender_eye",
      },
    ],
    output: {
      item: "cyclic:ender_pearl_reuse",
    },
  });

  event.smithing(
    "cyclic:ender_pearl_mounted",
    "cyclic:ender_pearl_reuse",
    "minecraft:saddle"
  );

  event.shaped("cyclic:teleport_wand", ["  A", " B ", "C  "], {
    A: "grapplemod:launcheritem",
    B: "cyclic:ender_pearl_reuse",
    C: "enigmaticlegacy:ender_rod",
  });

  event.shaped("cyclic:lightning_scepter", ["  A", " B ", "C  "], {
    A: "iceandfire:amythest_gem", // The ID of this item is spelled wrong
    B: "blue_skies:diopside_gem",
    C: "spartanweaponry:pole",
  });

  event.shaped("cyclic:ice_scepter", ["  A", " B ", "C  "], {
    A: "iceandfire:sapphire_gem",
    B: "blue_skies:aquite_gem",
    C: "spartanweaponry:pole",
  });

  event.shaped("cyclic:fire_scepter", ["  A", " B ", "C  "], {
    A: "forestcraft:molten_alloy",
    B: "blue_skies:pyrope_gem",
    C: "spartanweaponry:pole",
  });

  // event.remove({output: 'cyclic:monster_ball'})
});

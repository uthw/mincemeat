onEvent("server.datapack.high_priority", (event) => {
  var equipment = [
    {
      type: "RANGED",
      entries: [
        { item: "minecraft:bow", weight: 50 },
        { item: "atum:short_bow", weight: 30 },
        { item: "botania:livingwood_bow", weight: 20 },
        { item: "botania:crystal_bow", weight: 20 },
        { item: "infernalexp:glowsilk_bow", weight: 20 },
        { item: "minecraft:crossbow", weight: 50 },
      ],
    },
    {
      type: "ARMOR",
      entries: [
        { item: "minecraft:iron_helmet", weight: 200 },
        { item: "minecraft:iron_chestplate", weight: 200 },
        { item: "minecraft:iron_leggings", weight: 200 },
        { item: "minecraft:iron_boots", weight: 200 },

        { item: "minecraft:diamond_helmet", weight: 100 },
        { item: "minecraft:diamond_chestplate", weight: 100 },
        { item: "minecraft:diamond_leggings", weight: 100 },
        { item: "minecraft:diamond_boots", weight: 100 },

        { item: "minecraft:netherite_helmet", weight: 20 },
        { item: "minecraft:netherite_chestplate", weight: 20 },
        { item: "minecraft:netherite_leggings", weight: 20 },
        { item: "minecraft:netherite_boots", weight: 20 },

        { item: "atum:desert_helmet_iron", weight: 200 },
        { item: "atum:desert_chestplate_iron", weight: 200 },
        { item: "atum:desert_leggings_iron", weight: 200 },
        { item: "atum:desert_boots_iron", weight: 200 },

        { item: "atum:desert_helmet_diamond", weight: 100 },
        { item: "atum:desert_chestplate_diamond", weight: 100 },
        { item: "atum:desert_leggings_diamond", weight: 100 },
        { item: "atum:desert_boots_diamond", weight: 100 },

        { item: "betterendforge:terminite_helmet", weight: 20 },
        { item: "betterendforge:terminite_chestplate", weight: 20 },
        { item: "betterendforge:terminite_leggings", weight: 20 },
        { item: "betterendforge:terminite_boots", weight: 20 },

        { item: "iceandfire:armor_silver_metal_helmet", weight: 300 },
        { item: "iceandfire:armor_silver_metal_chestplate", weight: 300 },
        { item: "iceandfire:armor_silver_metal_leggings", weight: 300 },
        { item: "iceandfire:armor_silver_metal_boots", weight: 300 },

        { item: "mekanismtools:bronze_helmet", weight: 200 },
        { item: "mekanismtools:bronze_chestplate", weight: 200 },
        { item: "mekanismtools:bronze_leggings", weight: 200 },
        { item: "mekanismtools:bronze_boots", weight: 200 },

        { item: "mekanismtools:refined_glowstone_helmet", weight: 50 },
        { item: "mekanismtools:refined_glowstone_chestplate", weight: 50 },
        { item: "mekanismtools:refined_glowstone_leggings", weight: 50 },
        { item: "mekanismtools:refined_glowstone_boots", weight: 50 },

        { item: "botania:manasteel_helmet", weight: 150 },
        { item: "botania:manasteel_chestplate", weight: 150 },
        { item: "botania:manasteel_leggings", weight: 150 },
        { item: "botania:manasteel_boots", weight: 150 },

        { item: "thermal:diving_helmet", weight: 40 },
        { item: "thermal:diving_chestplate", weight: 40 },
        { item: "thermal:diving_leggings", weight: 40 },
        { item: "thermal:diving_boots", weight: 40 },

        { item: "undergarden:cloggrum_helmet", weight: 100 },
        { item: "undergarden:cloggrum_chestplate", weight: 100 },
        { item: "undergarden:cloggrum_leggings", weight: 100 },
        { item: "undergarden:cloggrum_boots", weight: 100 },

        { item: "mekanismtools:steel_helmet", weight: 200 },
        { item: "mekanismtools:steel_chestplate", weight: 200 },
        { item: "mekanismtools:steel_leggings", weight: 200 },
        { item: "mekanismtools:steel_boots", weight: 200 },

        { item: "ars_nouveau:novice_hood", weight: 150 },
        { item: "ars_nouveau:novice_robes", weight: 150 },
        { item: "ars_nouveau:novice_leggings", weight: 150 },
        { item: "ars_nouveau:novice_boots", weight: 150 },
      ],
    },
    {
      type: "SHIELD",
      entries: [
        { item: "minecraft:shield", weight: 100 },

        { item: "atum:stoneguard_shield", weight: 20 },
        { item: "atum:brigand_shield", weight: 20 },

        { item: "spartanshields:shield_basic_iron", weight: 20 },
        { item: "spartanshields:shield_basic_diamond", weight: 20 },
        { item: "spartanshields:shield_basic_netherite", weight: 10 },
        { item: "spartanshields:shield_basic_copper", weight: 20 },
        { item: "spartanshields:shield_basic_bronze", weight: 10 },
        { item: "spartanshields:shield_basic_steel", weight: 20 },
        { item: "spartanshields:shield_basic_silver", weight: 20 },
        { item: "spartanshields:shield_basic_lead", weight: 20 },
        { item: "spartanshields:shield_basic_nickel", weight: 20 },
        { item: "spartanshields:shield_basic_invar", weight: 20 },
        { item: "spartanshields:shield_basic_constantan", weight: 20 },
        { item: "spartanshields:shield_basic_platinum", weight: 20 },
        { item: "spartanshields:shield_botania_manasteel", weight: 20 },
        { item: "spartanshields:shield_botania_terrasteel", weight: 10 },

        { item: "undergarden:cloggrum_shield", weight: 6 },

        { item: "immersiveengineering:shield", weight: 8 },
      ],
    },
    {
      type: "SWORD",
      entries: [
        { item: "minecraft:iron_sword", weight: 100 },
        { item: "minecraft:diamond_sword", weight: 50 },
        { item: "minecraft:netherite_sword", weight: 10 },

        { item: "atum:iron_greatsword", weight: 100 },
        { item: "atum:stoneguard_greatsword", weight: 50 },

        { item: "betterendforge:terminite_sword", weight: 50 },

        { item: "iceandfire:silver_sword", weight: 75 },
        { item: "iceandfire:dragonbone_sword", weight: 8 },
        { item: "iceandfire:dread_sword", weight: 4 },

        // { item: "forestcraft:molten_sword", weight: 25 },
        // { item: "forestcraft:jewel_wart_sword", weight: 30 },
        // { item: "forestcraft:gem_sword", weight: 30 },
        // { item: "forestcraft:aquamarine_sword", weight: 30 },
        // { item: "forestcraft:vita_sword", weight: 30 },
        // { item: "forestcraft:blooming_sword", weight: 15 },
        // { item: "forestcraft:sharped_leaf_sword", weight: 15 },
        // { item: "forestcraft:ancient_iron_sword", weight: 20 },

        { item: "forbidden_arcanus:arcane_golden_sword", weight: 15 },
        { item: "forbidden_arcanus:obsidian_sword", weight: 40 },

        { item: "undergarden:cloggrum_sword", weight: 6 },
        { item: "undergarden:froststeel_sword", weight: 18 },

        { item: "mekanismtools:bronze_sword", weight: 50 },
        { item: "mekanismtools:osmium_sword", weight: 8 },
        { item: "mekanismtools:refined_glowstone_sword", weight: 30 },
        { item: "mekanismtools:steel_sword", weight: 30 },

        { item: "botania:manasteel_sword", weight: 30 },

        { item: "spartanweaponry:club_studded" },
        { item: "spartanweaponry:cestus_studded" },
      ],
    },
    {
      type: "AXE",
      entries: [
        { item: "minecraft:iron_axe", weight: 100 },
        { item: "minecraft:diamond_axe", weight: 50 },
        { item: "minecraft:netherite_axe", weight: 10 },

        { item: "betterendforge:terminite_axe", weight: 50 },

        { item: "iceandfire:silver_axe", weight: 75 },

        { item: "iceandfire:dragonbone_axe", weight: 8 },

        // { item: "forestcraft:molten_axe", weight: 25 },
        // { item: "forestcraft:jewel_wart_axe", weight: 30 },
        // { item: "forestcraft:gem_axe", weight: 30 },
        // { item: "forestcraft:aquamarine_axe", weight: 30 },
        // { item: "forestcraft:vita_axe", weight: 30 },
        // { item: "forestcraft:blooming_axe", weight: 15 },
        // { item: "forestcraft:sharped_leaf_axe", weight: 15 },
        // { item: "forestcraft:ancient_iron_axe", weight: 20 },

        { item: "mod_lavacow:moltenaxe", weight: 30 },

        { item: "undergarden:cloggrum_axe", weight: 40 },
        { item: "undergarden:froststeel_axe", weight: 40 },

        { item: "forbidden_arcanus:arcane_golden_axe", weight: 15 },
        { item: "forbidden_arcanus:obsidian_axe", weight: 40 },

        { item: "immersiveengineering:axe_steel", weight: 40 },

        { item: "mekanismtools:bronze_axe", weight: 50 },
        { item: "mekanismtools:osmium_axe", weight: 8 },
        { item: "mekanismtools:refined_glowstone_axe", weight: 30 },

        { item: "botania:manasteel_axe", weight: 30 },
      ],
    },
    {
      type: "PICKAXE",
      entries: [
        { item: "minecraft:iron_pickaxe", weight: 100 },
        { item: "minecraft:diamond_pickaxe", weight: 50 },
        { item: "minecraft:netherite_pickaxe", weight: 10 },

        { item: "betterendforge:terminite_pickaxe", weight: 50 },

        { item: "iceandfire:silver_pickaxe", weight: 75 },

        { item: "iceandfire:dragonbone_pickaxe", weight: 8 },

        // { item: "forestcraft:molten_pickaxe", weight: 25 },
        // { item: "forestcraft:jewel_wart_pickaxe", weight: 30 },
        // { item: "forestcraft:gem_pickaxe", weight: 30 },
        // { item: "forestcraft:aquamarine_pickaxe", weight: 30 },
        // { item: "forestcraft:vita_pickaxe", weight: 30 },
        // { item: "forestcraft:blooming_pickaxe", weight: 15 },
        // { item: "forestcraft:sharped_leaf_pickaxe", weight: 15 },
        // { item: "forestcraft:ancient_iron_pickaxe", weight: 20 },

        { item: "mod_lavacow:moltenpickaxe", weight: 30 },

        { item: "undergarden:cloggrum_pickaxe", weight: 40 },
        { item: "undergarden:froststeel_pickaxe", weight: 40 },

        { item: "forbidden_arcanus:arcane_golden_pickaxe", weight: 15 },
        { item: "forbidden_arcanus:obsidian_pickaxe", weight: 40 },

        { item: "immersiveengineering:pickaxe_steel", weight: 40 },

        { item: "mekanismtools:bronze_pickaxe", weight: 50 },
        { item: "mekanismtools:osmium_pickaxe", weight: 8 },
        { item: "mekanismtools:refined_glowstone_pickaxe", weight: 30 },

        { item: "botania:manasteel_pickaxe", weight: 30 },
      ],
    },
    {
      type: "SHOVEL",
      entries: [
        { item: "minecraft:iron_shovel", weight: 100 },
        { item: "minecraft:diamond_shovel", weight: 50 },
        { item: "minecraft:netherite_shovel", weight: 10 },

        { item: "betterendforge:terminite_shovel", weight: 50 },

        { item: "iceandfire:silver_shovel", weight: 75 },

        { item: "iceandfire:dragonbone_shovel", weight: 8 },

        // { item: "forestcraft:molten_shovel", weight: 25 },
        // { item: "forestcraft:jewel_wart_shovel", weight: 30 },
        // { item: "forestcraft:gem_shovel", weight: 30 },
        // { item: "forestcraft:aquamarine_shovel", weight: 30 },
        // { item: "forestcraft:vita_shovel", weight: 30 },
        // { item: "forestcraft:blooming_shovel", weight: 15 },
        // { item: "forestcraft:sharped_leaf_shovel", weight: 15 },
        // { item: "forestcraft:ancient_iron_shovel", weight: 20 },

        { item: "mod_lavacow:moltenshovel", weight: 30 },

        { item: "undergarden:cloggrum_shovel", weight: 40 },
        { item: "undergarden:froststeel_shovel", weight: 40 },

        { item: "forbidden_arcanus:arcane_golden_shovel", weight: 15 },
        { item: "forbidden_arcanus:obsidian_shovel", weight: 40 },

        { item: "immersiveengineering:shovel_steel", weight: 40 },

        { item: "mekanismtools:bronze_shovel", weight: 50 },
        { item: "mekanismtools:osmium_shovel", weight: 8 },
        { item: "mekanismtools:refined_glowstone_shovel", weight: 30 },

        { item: "botania:manasteel_shovel", weight: 30 },
      ],
    },
  ];

  // so i dont have to add all spartan weapons manually
  let weaponTypes = [
    "dagger",
    "parrying_dagger",
    "longsword",
    "katana",
    "saber",
    "rapier",
    "greatsword",
    "hammer",
    "warhammer",
    "spear",
    "halberd",
    "pike",
    "lance",
    "throwing_knife",
    "tomahawk",
    "javelin",
    "battleaxe",
    "flanged_mace",
    "glaive",
    "quarterstaff",
    "scythe",
  ];

  let weaponMaterials = [
    "wood",
    "stone",
    "iron",
    "diamond",
    "netherite",
    "bronze",
    "steel",
    "silver",
    "invar",
  ];

  weaponTypes.forEach((weaponType) => {
    for (var i = 0; i < weaponMaterials.length; i++) {
      equipment[3].entries.push({
        item: `spartanweaponry:${weaponType}_${weaponMaterials[i]}`,
        weight: 2,
      });
    }
  });

  equipment.forEach((eq) => {
    eq.entries.forEach((entry) => {
      let data = {
        stack: { item: entry.item },
        type: eq.type,
        weight: entry.weight,
      };

      let fileName = entry.item.split(":")[1];
      event.addJson(`apotheosis:affix_loot_entries/${fileName}.json`, data);
    });
  });
});

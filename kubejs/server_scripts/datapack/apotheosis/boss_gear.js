onEvent("server.datapack.high_priority", (event) => {
  let bossLoadouts = [
    {
      name: "iron",
      weight: 1000,
      tags: ["standard"],
      mainhands: [
        { weight: 10, stack: { item: "minecraft:iron_sword" } },
        { weight: 8, stack: { item: "atum:iron_scimitar" } },
        { weight: 8, stack: { item: "atum:iron_greatsword" } },
        { weight: 6, stack: { item: "atum:iron_club" } },
        { weight: 8, stack: { item: "atum:iron_khlopesh" } },
        { weight: 5, stack: { item: "forestcraft:iron_scythe" } },
        { weight: 5, stack: { item: "forestcraft:ancient_iron_sword" } },
        { weight: 1, stack: { item: "spartanweaponry:dagger_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:parrying_dagger_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:longsword_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:katana_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:saber_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:rapier_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:greatsword_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:hammer_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:warhammer_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:spear_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:halberd_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:pike_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:lance_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:throwing_knife_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:tomahawk_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:javelin_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:battleaxe_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:flanged_mace_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:glaive_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:quarterstaff_iron" } },
        { weight: 1, stack: { item: "spartanweaponry:scythe_iron" } },
      ],

      offhands: [{ weight: 1, stack: "spartanshields:shield_basic_iron" }],
      boots: [{ weight: 1, stack: "minecraft:iron_boots" }],
      leggings: [{ weight: 1, stack: "minecraft:iron_leggings" }],
      chestplate: [{ weight: 1, stack: "minecraft:iron_chestplate" }],
      helmet: [{ weight: 1, stack: "minecraft:iron_helmet" }],
    },
    {
      name: "diamond",
      weight: 600,
      tags: ["standard"],
      mainhands: [
        { weight: 10, stack: { item: "minecraft:diamond_sword" } },
        { weight: 6, stack: { item: "undergarden:cloggrum_sword" } },
        { weight: 6, stack: { item: "forestcraft:vita_sword" } },
        { weight: 6, stack: { item: "forbidden_arcanus:obsidian_sword" } },
        { weight: 1, stack: { item: "spartanweaponry:dagger_diamond" } },
        {
          weight: 1,
          stack: { item: "spartanweaponry:parrying_dagger_diamond" },
        },
        { weight: 1, stack: { item: "spartanweaponry:longsword_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:katana_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:saber_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:rapier_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:greatsword_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:hammer_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:warhammer_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:spear_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:halberd_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:pike_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:lance_diamond" } },
        {
          weight: 1,
          stack: { item: "spartanweaponry:throwing_knife_diamond" },
        },
        { weight: 1, stack: { item: "spartanweaponry:tomahawk_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:javelin_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:battleaxe_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:flanged_mace_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:glaive_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:quarterstaff_diamond" } },
        { weight: 1, stack: { item: "spartanweaponry:scythe_diamond" } },
      ],
      offhands: [
        { weight: 3, stack: { item: "spartanshields:shield_basic_diamond" } },
      ],
      offhands: [
        { weight: 2, stack: { item: "undergarden:cloggrum_shield" } },
        { weight: 1, stack: { item: "mekanismtools:osmium_shield" } },
        {
          weight: 1,
          stack: { item: "mekanismtools:refined_glowstone_shield" },
        },
      ],
      boots: [
        { weight: 3, stack: "minecraft:diamond_boots" },
        { weight: 2, stack: "undergarden:cloggrum_boots" },
        { weight: 1, stack: "forbidden_arcanus:obsidian_boots" },
        { weight: 1, stack: "minecraft:netherite_boots" },
        { weight: 1, stack: "forestcraft:aquamarine_boots" },
      ],
      leggings: [
        { weight: 3, stack: "minecraft:diamond_leggings" },
        { weight: 2, stack: "undergarden:cloggrum_leggings" },
        { weight: 1, stack: "forbidden_arcanus:obsidian_leggings" },
        { weight: 1, stack: "minecraft:netherite_leggings" },
        { weight: 1, stack: "forestcraft:aquamarine_leggings" },
      ],
      chestplates: [
        { weight: 3, stack: "minecraft:diamond_chestplate" },
        { weight: 2, stack: "undergarden:cloggrum_chestplate" },
        { weight: 1, stack: "forbidden_arcanus:obsidian_chestplate" },
        { weight: 1, stack: "minecraft:netherite_chestplate" },
        { weight: 1, stack: "forestcraft:aquamarine_chestplate" },
      ],
      helmets: [
        { weight: 3, stack: "minecraft:diamond_helmet" },
        { weight: 2, stack: "undergarden:cloggrum_helmet" },
        { weight: 1, stack: "forbidden_arcanus:obsidian_helmet" },
        { weight: 1, stack: "minecraft:netherite_helmet" },
        { weight: 1, stack: "forestcraft:aquamarine_helmet" },
      ],
    },
    {
      name: "netherite",
      weight: 25,
      tags: ["standard"],
      mainhands: [
        { weight: 10, stack: { item: "minecraft:netherite_sword" } },
        { weight: 6, stack: { item: "minecraft:netherite_axe" } },
        {
          weight: 6,
          stack: { item: "forbidden_arcanus:netherite_blacksmith_gavel" },
        },
        { weight: 6, stack: { item: "forbidden_arcanus:obsidian_sword" } },
        { weight: 1, stack: { item: "spartanweaponry:dagger_netherite" } },
        {
          weight: 1,
          stack: { item: "spartanweaponry:parrying_dagger_netherite" },
        },
        { weight: 1, stack: { item: "spartanweaponry:longsword_netherite" } },
        { weight: 1, stack: { item: "spartanweaponry:katana_netherite" } },
        { weight: 1, stack: { item: "spartanweaponry:saber_netherite" } },
        { weight: 1, stack: { item: "spartanweaponry:rapier_netherite" } },
        { weight: 1, stack: { item: "spartanweaponry:greatsword_netherite" } },
        { weight: 1, stack: { item: "spartanweaponry:hammer_netherite" } },
        { weight: 1, stack: { item: "spartanweaponry:warhammer_netherite" } },
        { weight: 1, stack: { item: "spartanweaponry:spear_netherite" } },
        { weight: 1, stack: { item: "spartanweaponry:halberd_netherite" } },
        { weight: 1, stack: { item: "spartanweaponry:pike_netherite" } },
        { weight: 1, stack: { item: "spartanweaponry:lance_netherite" } },
        {
          weight: 1,
          stack: { item: "spartanweaponry:throwing_knife_netherite" },
        },
        { weight: 1, stack: { item: "spartanweaponry:tomahawk_netherite" } },
        { weight: 1, stack: { item: "spartanweaponry:javelin_netherite" } },
        { weight: 1, stack: { item: "spartanweaponry:battleaxe_netherite" } },
        {
          weight: 1,
          stack: { item: "spartanweaponry:flanged_mace_netherite" },
        },
        { weight: 1, stack: { item: "spartanweaponry:glaive_netherite" } },
        {
          weight: 1,
          stack: { item: "spartanweaponry:quarterstaff_netherite" },
        },
        { weight: 1, stack: { item: "spartanweaponry:scythe_netherite" } },
      ],
      offhands: [
        { weight: 1, stack: { item: "spartanshields:shield_basic_netherite" } },
      ],
      boots: [{ weight: 3, stack: { item: "minecraft:netherite_boots" } }],
      leggings: [
        { weight: 3, stack: { item: "minecraft:netherite_leggings" } },
      ],
      chestplates: [
        { weight: 3, stack: { item: "minecraft:netherite_chestplate" } },
      ],
      helmets: [{ weight: 3, stack: { item: "minecraft:netherite_helmet" } }],
    },

    // custom sets
    {
      name: "obsidian",
      weight: 300,
      tags: ["standard"],
      mainhands: [
        {
          weight: 5,
          stack: { item: "forbidden_arcanus:obsidian_blacksmith_gavel" },
        },
        { weight: 5, stack: { item: "forbidden_arcanus:obsidian_sword" } },
        { weight: 1, stack: { item: "forestcraft:soul_eater" } },
      ],
      offhands: [
        {
          weight: 1,
          stack: { item: "spartanshields:shield_basic_obsidian" },
        },
        {
          weight: 1,
          stack: { item: "forbidden_arcanus:obsidian_skull_shield" },
        },
      ],
      boots: [
        { weight: 1, stack: { item: "forbidden_arcanus:obsidian_boots" } },
      ],
      leggings: [
        { weight: 1, stack: { item: "forbidden_arcanus:obsidian_leggings" } },
      ],
      chestplates: [
        { weight: 1, stack: { item: "forbidden_arcanus:obsidian_chestplate" } },
      ],
      helmets: [
        { weight: 1, stack: { item: "forbidden_arcanus:obsidian_helmet" } },
      ],
    },

    // fun to make :)
    {
      name: "apprentice",
      weight: 400,
      tags: ["standard"],
      mainhands: [
        {
          weight: 3,
          stack: {
            item: Item.of(
              "ars_nouveau:enchanters_sword",
              '{flavor:"",color:"255,25,180",spell_0:"[touch, ignite, flare, flare, amplify]",current_slot:0,max_slot:1,Damage:0}'
            ),
          },
        },
        {
          weight: 3,
          stack: {
            item: Item.of(
              "ars_nouveau:enchanters_sword",
              '{flavor:"",color:"255,25,180",spell_0:"[touch, launch, wind_shear, wind_shear, amplify]",current_slot:0,max_slot:1,Damage:0}'
            ),
          },
        },
        {
          weight: 1,
          stack: {
            item: Item.of(
              "ars_nouveau:enchanters_sword",
              '{flavor:"",color:"255,25,180",spell_0:"[touch, lightning, amplify, amplify]",current_slot:0,max_slot:1,Damage:0}'
            ),
          },
        },
      ],
      offhands: [
        { weight: 1, stack: { item: "ars_nouveau:enchanters_shield" } },
      ],
      boots: [{ weight: 1, stack: { item: "ars_nouveau:apprentice_boots" } }],
      leggings: [
        { weight: 1, stack: { item: "ars_nouveau:apprentice_leggings" } },
      ],
      chestplates: [
        { weight: 1, stack: { item: "ars_nouveau:apprentice_chestplate" } },
      ],
      helmets: [
        { weight: 1, stack: { item: "ars_nouveau:apprentice_helmet" } },
      ],
    },
    {
      name: "archmage",
      weight: 50,
      tags: ["standard"],
      mainhands: [
        {
          weight: 3,
          stack: {
            item: Item.of(
              "ars_nouveau:enchanters_sword",
              '{flavor:"",color:"255,25,180",spell_0:"[touch, fangs, amplify, amplify, amplify, amplify]",current_slot:0,max_slot:1,Damage:0}'
            ),
          },
        },
        {
          weight: 3,
          stack: {
            item: Item.of(
              "ars_nouveau:enchanters_sword",
              '{flavor:"",color:"255,25,180",spell_0:"[touch, freeze, cold_snap, cold_snap, cold_snap, amplify, amplify, amplify, amplify]",current_slot:0,max_slot:1,Damage:0}'
            ),
          },
        },
      ],
      offhands: [
        { weight: 1, stack: { item: "ars_nouveau:enchanters_shield" } },
      ],
      boots: [{ weight: 1, stack: { item: "ars_nouveau:archmage_boots" } }],
      leggings: [
        { weight: 1, stack: { item: "ars_nouveau:archmage_leggings" } },
      ],
      chestplates: [
        { weight: 1, stack: { item: "ars_nouveau:archmage_chestplate" } },
      ],
      helmets: [{ weight: 1, stack: { item: "ars_nouveau:archmage_helmet" } }],
    },
    {
      name: "osmium",
      weight: 250,
      tags: ["standard"],
      mainhands: [
        { weight: 3, stack: { item: "mekanismtools:osmium_sword" } },
        { weight: 2, stack: { item: "mekanismtools:osmium_axe" } },
        { weight: 1, stack: { item: "mekanismtools:osmium_paxel" } },
      ],
      offhands: [{ weight: 1, stack: { item: "mekanismtools:osmium_shield" } }],
      boots: [{ weight: 1, stack: { item: "mekanismtools:osmium_boots" } }],
      leggings: [
        { weight: 1, stack: { item: "mekanismtools:osmium_leggings" } },
      ],
      chestplates: [
        { weight: 1, stack: { item: "mekanismtools:osmium_chestplate" } },
      ],
      helmets: [{ weight: 1, stack: { item: "mekanismtools:osmium_helmet" } }],
    },
    {
      name: "lapis_lazuli",
      weight: 325,
      tags: ["standard"],
      mainhands: [
        { weight: 3, stack: { item: "mekanismtools:lapis_lazuli_sword" } },
        { weight: 2, stack: { item: "mekanismtools:lapis_lazuli_axe" } },
        { weight: 1, stack: { item: "mekanismtools:lapis_lazuli_paxel" } },
      ],
      offhands: [
        { weight: 1, stack: { item: "mekanismtools:lapis_lazuli_shield" } },
      ],
      boots: [
        { weight: 1, stack: { item: "mekanismtools:lapis_lazuli_boots" } },
      ],
      leggings: [
        { weight: 1, stack: { item: "mekanismtools:lapis_lazuli_leggings" } },
      ],
      chestplates: [
        { weight: 1, stack: { item: "mekanismtools:lapis_lazuli_chestplate" } },
      ],
      helmets: [
        { weight: 1, stack: { item: "mekanismtools:lapis_lazuli_helmet" } },
      ],
    },
    {
      name: "bronze",
      weight: 400,
      tags: ["standard"],
      mainhands: [
        { weight: 5, stack: { item: "mekanismtools:bronze_sword" } },
        { weight: 5, stack: { item: "mekanismtools:bronze_axe" } },
        { weight: 2, stack: { item: "mekanismtools:bronze_paxel" } },
        { weight: 1, stack: { item: "spartanweaponry:dagger_bronze" } },
        {
          weight: 1,
          stack: { item: "spartanweaponry:parrying_dagger_bronze" },
        },
        { weight: 1, stack: { item: "spartanweaponry:longsword_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:katana_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:saber_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:rapier_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:greatsword_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:hammer_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:warhammer_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:spear_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:halberd_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:pike_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:lance_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:throwing_knife_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:tomahawk_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:javelin_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:battleaxe_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:flanged_mace_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:glaive_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:quarterstaff_bronze" } },
        { weight: 1, stack: { item: "spartanweaponry:scythe_bronze" } },
      ],
      offhands: [
        { weight: 1, stack: { item: "mekanismtools:bronze_shield" } },
        { weight: 1, stack: { item: "spartanshields:shield_basic_bronze" } },
      ],
      boots: [{ weight: 1, stack: { item: "mekanismtools:bronze_boots" } }],
      leggings: [
        { weight: 1, stack: { item: "mekanismtools:bronze_leggings" } },
      ],
      chestplates: [
        { weight: 1, stack: { item: "mekanismtools:bronze_chestplate" } },
      ],
      helmets: [{ weight: 1, stack: { item: "mekanismtools:bronze_helmet" } }],
    },
    {
      name: "terminite",
      weight: 100,
      tags: ["standard"],
      mainhands: [
        { weight: 2, stack: { item: "betterendforge:terminite_axe" } },
        { weight: 1, stack: { item: "betterendforge:terminite_sword" } },
      ],
      offhands: [{ weight: 1, stack: { item: "minecraft:shield" } }],
      boots: [{ weight: 1, stack: { item: "betterendforge:terminite_boots" } }],
      leggings: [
        { weight: 1, stack: { item: "betterendforge:terminite_leggings" } },
      ],
      chestplates: [
        { weight: 1, stack: { item: "betterendforge:terminite_chestplate" } },
      ],
      helmets: [
        { weight: 1, stack: { item: "betterendforge:terminite_helmet" } },
      ],
    },
    {
      name: "manasteel",
      weight: 400,
      tags: ["standard"],
      mainhands: [
        { weight: 2, stack: { item: "botania:manasteel_sword" } },
        { weight: 1, stack: { item: "botania:manasteel_axe" } },
      ],
      offhands: [
        {
          weight: 1,
          stack: { item: "spartanshields:shield_botania_manasteel" },
        },
      ],
      boots: [{ weight: 1, stack: { item: "botania:manasteel_boots" } }],
      leggings: [{ weight: 1, stack: { item: "botania:manasteel_leggings" } }],
      chestplates: [
        { weight: 1, stack: { item: "botania:manasteel_chestplate" } },
      ],
      helmets: [{ weight: 1, stack: { item: "botania:manasteel_helmet" } }],
    },
    {
      name: "steel_1",
      weight: 500,
      tags: ["standard"],
      mainhands: [
        { weight: 5, stack: { item: "immersiveengineering:sword_steel" } },
        { weight: 5, stack: { item: "immersiveengineering:axe_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:dagger_steel" } },
        {
          weight: 1,
          stack: { item: "spartanweaponry:parrying_dagger_steel" },
        },
        { weight: 1, stack: { item: "spartanweaponry:longsword_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:katana_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:saber_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:rapier_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:greatsword_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:hammer_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:warhammer_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:spear_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:halberd_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:pike_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:lance_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:throwing_knife_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:tomahawk_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:javelin_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:battleaxe_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:flanged_mace_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:glaive_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:quarterstaff_steel" } },
        { weight: 1, stack: { item: "spartanweaponry:scythe_steel" } },
      ],
      offhands: [
        { weight: 1, stack: { item: "immersiveengineering:shield" } },
        { weight: 1, stack: { item: "spartanshields:shield_basic_steel" } },
      ],
      boots: [
        { weight: 1, stack: { item: "immersiveengineering:armor_steel_feet" } },
      ],
      leggings: [
        { weight: 1, stack: { item: "immersiveengineering:armor_steel_legs" } },
      ],
      chestplates: [
        {
          weight: 1,
          stack: { item: "immersiveengineering:armor_steel_chest" },
        },
      ],
      helmets: [
        { weight: 1, stack: { item: "immersiveengineering:armor_steel_head" } },
      ],
    },
    {
      name: "steel_2",
      weight: 400,
      tags: ["standard"],
      mainhands: [
        { weight: 3, stack: { item: "mekanismtools:steel_sword" } },
        { weight: 2, stack: { item: "mekanismtools:steel_axe" } },
        { weight: 1, stack: { item: "mekanismtools:steel_paxel" } },
      ],
      offhands: [
        { weight: 1, stack: { item: "immersiveengineering:shield" } },
        { weight: 1, stack: { item: "mekanismtools:steel_shield" } },
      ],
      boots: [{ weight: 1, stack: { item: "mekanismtools:steel_boots" } }],
      leggings: [
        { weight: 1, stack: { item: "mekanismtools:steel_leggings" } },
      ],
      chestplates: [
        { weight: 1, stack: { item: "mekanismtools:steel_chestplate" } },
      ],
      helmets: [{ weight: 1, stack: { item: "mekanismtools:steel_helmet" } }],
    },
  ];

  bossLoadouts.forEach((loadout) => {
    event.addJson(`apotheosis:boss_gear/${loadout.name}.json`, loadout);
  });
});

// priority: 1000

onEvent("recipes", (event) => {
  let toRemove = [
    "ars_nouveau:archmage_spell_book",
    "ars_nouveau:apprentice_spell_book",
    "ars_nouveau:ritual_flight",
    "ars_nouveau:mana_fiber",
    "ars_nouveau:ring_of_lesser_discount",
  ];
  toRemove.forEach((item) => event.remove({ output: item }));

  event.shapeless("ars_nouveau:archmage_spell_book", [
    "ars_nouveau:apprentice_spell_book",
    "#forge:ingots/terrasteel",
    "ars_nouveau:wilden_tribute",
    "2x iceandfire:ectoplasm",
    "2x #forge:ingots/arcane_gold",
    "meetyourfight:fortunes_favor",
    "minecraft:totem_of_undying",
  ]);

  event.shapeless("ars_nouveau:apprentice_spell_book", [
    "ars_nouveau:novice_spell_book",
    "3x blue_skies:charoite",
    "2x #forge:ingots/silver",
    "2x paraglider:spirit_orb",
    "#forge:scales/sea_serpent",
  ]);

  event.shapeless("ars_nouveau:ritual_flight", [
    "ars_nouveau:purple_archwood_log",
    "3x ars_nouveau:wilden_wing",
    "2x undergarden:glowing_kelp",
    "forbidden_arcanus:arcane_crystal",
  ]);

  event.shapeless("ars_nouveau:mana_fiber", [
    "ars_nouveau:mana_bloom",
    "forbidden_arcanus:arcane_crystal",
  ]);

  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    item_1: [
      {
        item: "minecraft:diamond",
      },
    ],
    item_2: [
      {
        item: "minecraft:diamond",
      },
    ],
    item_3: [
      {
        item: "minecraft:diamond",
      },
    ],
    item_4: [
      {
        item: "minecraft:diamond",
      },
    ],
    item_5: [
      {
        item: "minecraft:diamond",
      },
    ],
    item_6: [
      {
        item: "minecraft:diamond",
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
    reagent: [
      {
        item: "ars_nouveau:ring_of_potential",
      },
    ],
    output: {
      item: "ars_nouveau:ring_of_lesser_discount",
    },
  });

  let replacements = [
    [{ mod: "arsarsenal" }, "minecraft:netherite_ingot", "atum:nebu_ingot"],
    [
      { output: "ars_nouveau:blaze_fiber" },
      "minecraft:blaze_powder",
      "atum:nebu_drop",
    ],
    [
      { output: "ars_nouveau:end_fiber" },
      "minecraft:popped_chorus_fruit",
      "undergarden:forgotten_nugget",
    ],
    [
      { output: "ars_nouveau:ring_of_greater_discount" },
      "minecraft:diamond",
      "atum:nebu_ingot",
    ],
    [
      { mod: "ars_nouveau" },
      "minecraft:lapis_block",
      "forbidden_arcanus:arcane_crystal_block",
    ],
    [
      { mod: "ars_nouveau" },
      "minecraft:lapis_lazuli",
      "forbidden_arcanus:arcane_crystal",
    ],
    [
      { mod: "ars_nouveau", output: "ars_nouveau:runic_chalk" },
      "minecraft:bone_meal",
      "atum:limestone_gravel",
    ],
    [{ mod: "ars_nouveau" }, "minecraft:book", "tombstone:dust_of_vanishing"],
    [{ mod: "ars_nouveau" }, "minecraft:hopper", "prettypipes:pipe"],
    [
      { output: "ars_nouveau:belt_of_levitation" },
      "#forge:feathers",
      "aquamirae:oxygelium",
    ],
    [
      { output: "ars_nouveau:ritual_fertility" },
      "minecraft:blaze_powder",
      "create:tree_fertilizer",
    ],
  ];

  replacements.forEach((item) => event.replaceInput(item[0], item[1], item[2]));
});

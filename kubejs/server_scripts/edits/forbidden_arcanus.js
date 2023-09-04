onEvent("recipes", (event) => {
  event.replaceOutput(
    "forbidden_arcanus:arcane_gold_ingot",
    "#forge:ingots/arcane_gold"
  );
  event.replaceInput(
    "forbidden_arcanus:arcane_gold_ingot",
    "#forge:ingots/arcane_gold"
  );

  // replace ender pearl fragments with ender pearl grains -- reverted since end's delight has been removed
  // event.replaceInput(
  //   "forbidden_arcanus:ender_pearl_fragment",
  //   "ends_delight:ender_pearl_grain"
  // );
  event.remove({ output: "forbidden_arcanus:ender_pearl_fragment" });
  // event.shapeless("ends_delight:ender_pearl_grain", [
  //   "forbidden_arcanus:ender_pearl_fragment",
  // ]);

  let toRemove = [
    "forbidden_arcanus:mundabitur_dust",
    "forbidden_arcanus:quantum_catcher",
    "forbidden_arcanus:spectral_eye_amulet",
    "forbidden_arcanus:eternal_stella",

    "forbidden_arcanus:tyr_helmet",
    "forbidden_arcanus:tyr_chestplate",
    "forbidden_arcanus:tyr_leggings",
    "forbidden_arcanus:tyr_boots",
  ];
  toRemove.forEach((item) => event.remove({ output: item }));

  // mundabitur dust
  event.shapeless("forbidden_arcanus:mundabitur_dust", [
    "forbidden_arcanus:arcane_crystal_dust",
    "minecraft:redstone",
    "minecraft:blaze_powder",
    "astralsorcery:stardust",
    "blue_skies:moonstone_shard",
    "minecraft:gunpowder",
  ]);

  event.custom({
    type: "betterendforge:infusion",
    input: {
      item: "eidolon:basic_amulet",
    },
    output: "forbidden_arcanus:spectral_eye_amulet",
    time: 100,
    catalysts: [
      {
        item: "alexsmobs:void_worm_eye",
        index: 0,
      },
      {
        item: "forestcraft:spectralum",
        index: 2,
      },
      {
        item: "forestcraft:spectralum",
        index: 4,
      },
      {
        item: "forestcraft:spectralum",
        index: 6,
      },
      {
        item: "eidolon:pewter_blend",
        index: 1,
      },
      {
        item: "minecraft:ender_eye",
        index: 3,
      },
      {
        item: "eidolon:pewter_blend",
        index: 5,
      },
      {
        item: "minecraft:ender_eye",
        index: 7,
      },
    ],
  });

  // must use infusion instead of the rituals due to the latter not being recognized as a recipe type.
  event.custom({
    type: "betterendforge:infusion",
    input: {
      item: "forbidden_arcanus:stellarite_piece",
    },
    output: "forbidden_arcanus:eternal_stella",
    time: 100,
    catalysts: [
      {
        item: "enigmaticlegacy:mending_mixture",
        index: 0,
      },
      {
        item: "forbidden_arcanus:xpetrified_orb",
        index: 2,
      },
      {
        item: "forbidden_arcanus:xpetrified_orb",
        index: 4,
      },
      {
        item: "forbidden_arcanus:xpetrified_orb",
        index: 6,
      },
      {
        item: "iceandfire:ectoplasm",
        index: 1,
      },
      {
        item: "iceandfire:ectoplasm",
        index: 3,
      },
      {
        item: "iceandfire:ectoplasm",
        index: 5,
      },
      {
        item: "iceandfire:ectoplasm",
        index: 7,
      },
    ],
  });

  // tyr armor
  event.custom({
    type: "betterendforge:infusion",
    input: {
      item: "forbidden_arcanus:draco_arcanus_helmet",
    },
    output: "forbidden_arcanus:tyr_helmet",
    time: 100,
    catalysts: [
      {
        item: "forbidden_arcanus:golden_dragon_scale",
        index: 0,
      },
      {
        item: "forbidden_arcanus:silver_dragon_scale",
        index: 2,
      },
      {
        item: "forbidden_arcanus:silver_dragon_scale",
        index: 4,
      },
      {
        item: "forbidden_arcanus:silver_dragon_scale",
        index: 6,
      },
      {
        tag: "forge:scales/dragon",
        index: 1,
      },
      {
        tag: "forge:scales/dragon",
        index: 3,
      },
      {
        tag: "forge:scales/dragon",
        index: 5,
      },
      {
        tag: "forge:scales/dragon",
        index: 7,
      },
    ],
  });

  event.custom({
    type: "betterendforge:infusion",
    input: {
      item: "forbidden_arcanus:draco_arcanus_chestplate",
    },
    output: "forbidden_arcanus:tyr_chestplate",
    time: 100,
    catalysts: [
      {
        item: "forbidden_arcanus:golden_dragon_scale",
        index: 0,
      },
      {
        item: "forbidden_arcanus:aquatic_dragon_scale",
        index: 2,
      },
      {
        item: "forbidden_arcanus:aquatic_dragon_scale",
        index: 4,
      },
      {
        item: "forbidden_arcanus:aquatic_dragon_scale",
        index: 6,
      },
      {
        tag: "forge:scales/dragon",
        index: 1,
      },
      {
        tag: "forge:scales/dragon",
        index: 3,
      },
      {
        tag: "forge:scales/dragon",
        index: 5,
      },
      {
        tag: "forge:scales/dragon",
        index: 7,
      },
    ],
  });

  event.custom({
    type: "betterendforge:infusion",
    input: {
      item: "forbidden_arcanus:draco_arcanus_leggings",
    },
    output: "forbidden_arcanus:tyr_leggings",
    time: 100,
    catalysts: [
      {
        item: "forbidden_arcanus:golden_dragon_scale",
        index: 0,
      },
      {
        item: "forbidden_arcanus:silver_dragon_scale",
        index: 2,
      },
      {
        item: "forbidden_arcanus:silver_dragon_scale",
        index: 4,
      },
      {
        item: "forbidden_arcanus:silver_dragon_scale",
        index: 6,
      },
      {
        tag: "forge:scales/dragon",
        index: 1,
      },
      {
        tag: "forge:scales/dragon",
        index: 3,
      },
      {
        tag: "forge:scales/dragon",
        index: 5,
      },
      {
        tag: "forge:scales/dragon",
        index: 7,
      },
    ],
  });

  event.custom({
    type: "betterendforge:infusion",
    input: {
      item: "forbidden_arcanus:draco_arcanus_boots",
    },
    output: "forbidden_arcanus:tyr_boots",
    time: 100,
    catalysts: [
      {
        item: "forbidden_arcanus:golden_dragon_scale",
        index: 0,
      },
      {
        item: "forbidden_arcanus:aquatic_dragon_scale",
        index: 2,
      },
      {
        item: "forbidden_arcanus:aquatic_dragon_scale",
        index: 4,
      },
      {
        item: "forbidden_arcanus:aquatic_dragon_scale",
        index: 6,
      },
      {
        tag: "forge:scales/dragon",
        index: 1,
      },
      {
        tag: "forge:scales/dragon",
        index: 3,
      },
      {
        tag: "forge:scales/dragon",
        index: 5,
      },
      {
        tag: "forge:scales/dragon",
        index: 7,
      },
    ],
  });

  //   event.remove({ output: "forbidden_arcanus:arcane_crystal_dust" });
});

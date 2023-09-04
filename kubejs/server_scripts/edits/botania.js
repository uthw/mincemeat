onEvent("recipes", (event) => {
  let toRemove = [
    "botania:terrasteel_ingot",
    "botania:mana_ring",
    "botania:reach_ring",
    "botania:bellethorne",
    "botania:thorn_chakram",
    "botania:flight_tiara",
    "botania:hyacidus",
    "botania:medumone",
  ];
  toRemove.forEach((item) => event.remove({ output: item }));

  event.replaceInput(
    { mod: "botania" },
    "minecraft:blaze_powder",
    "forbidden_arcanus:arcane_crystal_dust"
  );
  event.replaceInput(
    { mod: "botania" },
    "minecraft:ender_eye",
    "iceandfire:ectoplasm"
  );

  event.replaceInput(
    { mod: "botania" },
    "minecraft:brewing_stand",
    "eidolon:wooden_brewing_stand"
  );

  event.replaceInput(
    { mod: "botania" },
    "minecraft:prismarine_crystals",
    "#blue_skies:gems/aquite"
  );

  event.replaceInput(
    { mod: "botania" },
    "minecraft:quartz",
    "#forge:gems/fluorite"
  );

  // revert gaia pylon recipe to how it is without mythic botany (since you need so much mana for alfsteel)
  event.replaceInput("mythicbotany:alfsteel_pylon", "botania:natura_pylon");

  // event.replaceInput(
  //   { mod: "botania" },
  //   "minecraft:brewing_stand",
  //   "xreliquary:apothecary_mortar"
  // );

  event.custom({
    type: "botania:terra_plate",
    mana: 500000,
    ingredients: [
      {
        item: "botania:manasteel_ingot",
      },
      {
        item: "botania:mana_pearl",
      },
      {
        item: "botania:mana_diamond",
      },
      {
        tag: "forge:ingots/pewter",
      },
      {
        tag: "blue_skies:gems/diopside",
      },
    ],
    result: {
      item: "botania:terrasteel_ingot",
    },
  });

  event.shaped("botania:mana_ring", ["AB ", "BCB", "  B"], {
    A: "botania:mana_tablet",
    B: "#forge:ingots/manasteel",
    C: "enigmaticlegacy:iron_ring",
  });

  event.shaped("botania:reach_ring", ["AB ", "BCB", "  B"], {
    A: "botania:rune_pride",
    B: "#forge:ingots/elementium",
    C: "enigmaticlegacy:iron_ring",
  });

  // TODO add arcane crystal use
  //   event.remove({})
});

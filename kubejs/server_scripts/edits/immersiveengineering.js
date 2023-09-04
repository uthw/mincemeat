// also includes engineer's decor and tools

onEvent("recipes", (event) => {
  let removeItems = [
    "engineerstools:crushing_hammer",
    "immersiverods:stick_gold",
  ];
  removeItems.forEach((item) => event.remove({ output: item }));

  event.replaceInput(
    { output: "immersiveengineering:cokebrick" },
    "#forge:sandstone",
    "create:gabbro"
  );

  event.replaceInput(
    { output: "immersiveengineering:conveyor_basic" },
    "#forge:ingots/iron",
    "#forge:ingots/aluminum"
  );

  event.replaceInput(
    { output: "immersiveengineering:conveyor_dropping" },
    "minecraft:iron_trapdoor",
    "create:chute"
  );

  event.replaceInput(
    { output: "immersiveengineering:windmill" },
    "#forge:ingots/iron",
    "#forge:ingots/steel"
  );

  event.replaceInput(
    { output: "immersiveengineering:capacitor_mv" },
    "#forge:ingots/iron",
    "#blue_skies:ingots/horizonite"
  );

  event.replaceInput(
    { output: "immersiveengineering:capacitor_hv" },
    "#forge:storage_blocks/lead",
    "#forge:storage_blocks/brass"
  );

  let replacements = [
    [
      { output: "engineersdecor:small_solar_panel" },
      "minecraft:quartz",
      "#forge:glass",
    ],
    [
      { output: "engineersdecor:small_solar_panel" },
      "#forge:storage_blocks/lead",
      "#forge:storage_blocks/aluminum",
    ],
  ];
  replacements.forEach((item) => event.replaceInput(item[0], item[1], item[2]));

  event.remove({
    output: "#forge:dusts/tin",
    input: "immersiveengineering:hammer",
  });

  event.remove({
    output: "#forge:dusts/osmium",
    input: "immersiveengineering:hammer",
  });

  let wireMaterials = ["copper", "electrum", "aluminum", "steel", "lead"];

  wireMaterials.forEach((material) => {
    event.remove({
      output: `immersiveengineering:wire_${material}`,
      input: "immersiveengineering:wirecutter",
    });

    // Add a Create Crafts&additions rolling recipe for each of these wires.
    event.custom({
      type: "createaddition:rolling",
      input: {
        tag: `forge:plates/${material}`,
      },
      result: {
        item: `immersiveengineering:wire_${material}`,
        count: 2,
      },
    });
  });
});

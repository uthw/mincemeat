onEvent("recipes", (event) => {
  // event.remove({output: 'eidolon:candle'})
  // event.remove({ output: "eidolon:soul_enchanter" });

  let toRemove = [
    "eidolon:worktable",

    "eidolon:pewter_ingot",
    "eidolon:pewter_blend",

    ,
  ];
  toRemove.forEach((item) => event.remove({ output: item }));

  // event.replaceOutput("eidolon:arcane_gold_ingot", "#forge:ingots/arcane_gold");
  event.replaceInput("eidolon:arcane_gold_ingot", "#forge:ingots/arcane_gold");

  event.shaped(
    "eidolon:worktable",
    [
      // default wasnt working for some reason, may as well edit
      "AAA",
      "BCB",
      "DED",
    ],
    {
      A: "minecraft:red_carpet",
      B: "eidolon:pewter_ingot",
      C: "minecraft:crafting_table",
      D: "eidolon:polished_wood_pillar",
      E: "eidolon:polished_planks",
    }
  );

  event.shaped("3x eidolon:wooden_altar", ["AAA", "BBB", "B B"], {
    A: "#minecraft:wooden_slabs",
    B: "#minecraft:planks",
  });

  //
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        tag: "forge:ingots/iron",
      },
      {
        tag: "forge:ingots/lead",
      },
    ],
    results: [
      {
        item: "eidolon:pewter_blend",
        count: 2,
      },
    ],
  });

  // maybe, i should just add kuebjs thermal
  // event.recipes.thermal.smelter();
  event.recipes.thermal
    .smelter("2x eidolon:pewter_ingot", [
      "#forge:ingots/iron",
      "#forge:ingots/lead",
    ])
    .energy(4000);
  event.recipes.thermal
    .smelter("2x eidolon:pewter_ingot", [
      "#forge:dusts/iron",
      "#forge:dusts/lead",
    ])
    .energy(4000);
});

onEvent("item.tags", (event) => {
  event.add("buzzier_bees:candle_base", "eidolon:tallow");
  event.add("supplementaries:candle/base", "eidolon:tallow");
  event.add("forge:tallow", "eidolon:tallow");
});

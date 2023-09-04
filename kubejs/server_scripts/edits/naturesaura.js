// priority: 55

onEvent("recipes", (event) => {
  let toRemove = ["naturesaura:ancient_sapling", "naturesaura:offering_table"];
  toRemove.forEach((item) => event.remove({ output: item }));

  event.replaceInput(
    { mod: "naturesaura", type: "naturesaura_tree_ritual" },
    "minecraft:gold_ingot",
    "#forge:gems/arcane_crystal"
  );
  event.replaceInput(
    { mod: "naturesaura", type: "crafting_shaped" },
    "minecraft:gold_ingot",
    "#forge:gems/arcane_crystal"
  );
  event.replaceInput(
    { output: "naturesaura:eye" },
    "minecraft:spider_eye",
    "alexsmobs:guster_eye"
  );
  event.replaceInput(
    { output: "naturesaura:aura_cache" },
    "minecraft:bucket",
    "botania:mana_pool"
  );
  event.replaceInput(
    { output: "naturesaura:oak_generator" },
    "minecraft:bone_meal",
    "create:tree_fertilizer"
  );
  event.replaceInput(
    { mod: "naturesaura" },
    "minecraft:brewing_stand",
    "eidolon:wooden_brewing_stand"
  );
  event.replaceInput(
    { mod: "naturesaura" },
    "minecraft:ghast_tear",
    "#forge:ectoplasms"
  );
  event.replaceInput(
    { mod: "naturesaura" },
    "minecraft:mossy_cobblestone",
    "cavesandcliffs:moss_block"
  );
  event.replaceInput(
    { mod: "naturesaura" },
    "minecraft:ender_pearl",
    "paraglider:spirit_orb"
  );

  event.custom({
    type: "naturesaura:tree_ritual",
    ingredients: [
      {
        tag: "botania:petals",
      },
      {
        tag: "botania:mystical_flowers",
      },
      {
        tag: "minecraft:seeds",
      },
      {
        tag: "minecraft:seeds",
      },
      {
        tag: "forge:gems/arcane_crystal",
      },
      {
        item: "naturesaura:gold_leaf",
      },
    ],
    sapling: {
      item: "minecraft:oak_sapling",
    },
    output: {
      item: "naturesaura:ancient_sapling",
      count: 2,
    },
    time: 200,
  });
});

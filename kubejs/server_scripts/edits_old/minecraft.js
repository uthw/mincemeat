onEvent("recipes", (event) => {
  // event.remove({output: 'minecraft:ender_eye'})
  // event.shaped('minecraft:ender_eye', [
  //     'AB ',
  //     'C  ',
  //     '   '
  // ], {
  //     A: 'minecraft:ender_pearl',
  //     B: 'minecraft:blaze_powder',
  //     C: 'atum:nebu_drop'
  // })

  event.remove({ output: "minecraft:cobweb" });
  event.shaped("4x minecraft:cobweb", ["A A", " A ", "A A"], {
    A: "#forge:string",
  });

  event.shaped("minecraft:chest", ["AAA", "A A", "AAA"], {
    A: "#minecraft:planks",
  });

  event.remove({ output: "minecraft:bread" });
  event.shaped("minecraft:bread", ["AAA", "   ", "   "], {
    A: "farmersdelight:wheat_dough",
  });

  event.remove({ output: "minecraft:enchanted_golden_apple" });
  event.shaped("minecraft:enchanted_golden_apple", ["AAA", "ABA", "AAA"], {
    A: "#forge:storage_blocks/arcane_gold",
    B: "#forge:fruits/apple",
  });

  event.remove({ type: "create:milling", input: "minecraft:granite" });
  event.recipes.create.milling(
    Item.of("minecraft:quartz").withChance(1.2),
    "minecraft:granite"
  );
  event.recipes.immersiveengineeringCrusher(
    Item.of("minecraft:quartz").withChance(1.2),
    "minecraft:granite"
  );
});

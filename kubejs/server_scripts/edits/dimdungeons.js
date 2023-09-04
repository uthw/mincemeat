onEvent("recipes", (event) => {
  event.remove({ output: "dimdungeons:block_portal_keyhole" });
  event.shaped("dimdungeons:block_portal_keyhole", ["BP ", "C  ", "   "], {
    B: "dimdungeons:block_gilded_portal",
    P: "blue_skies:pyrope_gem",
    C: "#forge:chests/trapped",
  });

  event.remove({ output: "dimdungeons:item_portal_key" });
  event.shapeless("dimdungeons:item_portal_key", [
    "supplementaries:key",
    "minecraft:name_tag",
  ]);
  event.shaped("dimdungeons:block_key_charger", [" A ", "BCB", "DDD"], {
    A: "enigmaticlegacy:thicc_scroll",
    B: "minecraft:gold_ingot",
    C: "charm:ender_pearl_block",
    D: "minecraft:stone_bricks",
  });

  // event.remove({output:'dimdungeons:block_gilded_portal'})
  // event.shaped('dimdungeons:block_gilded_portal', [
  //     'CAC',
  //     'ABA',
  //     'CAC'
  // ], {
  //     A: 'eidolon:arcane_gold_ingot',
  //     B: 'minecraft:chiseled_stone_bricks',
  //     C: 'minecraft:gold_ingot'
  // })
});

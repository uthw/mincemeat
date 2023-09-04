onEvent("recipes", (event) => {
  // event.remove({output: Item.of('xpbook:xp_tome', '{xp:0}')})
  event.shaped("thermal:xp_crystal", ["BA ", "C  ", "   "], {
    A: "apotheosis:mythic_shard",
    B: "minecraft:book",
    C: "atum:nebu_ingot",
  });
});

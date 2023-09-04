onEvent("block.loot_tables", (event) => {
  event.addBlock("kubejs:lunar_source_gem_ore", (table) => {
    // idk how to make silktouch work

    table.addPool((pool) => {
      pool.rolls = 1;
      pool.survivesExplosion();
      pool.addItem("ars_nouveau:mana_gem").randomChance(1.2);
    });
  });
});

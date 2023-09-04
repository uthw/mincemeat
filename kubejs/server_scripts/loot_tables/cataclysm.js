onEvent("entity.loot_tables", (event) => {
  // make ignitium ingot drop more
  event.addEntity("cataclysm:ignis", (table) => {
    table.addPool((pool) => {
      pool.rolls = 8;
      pool.addItem("cataclysm:ignitium_ingot", 1);
    });
    table.addPool((pool) => {
      pool.addItem("cataclysm:music_disc_ignis").randomChance(0.1);
    });
  });
});

onEvent("entity.loot_tables", (event) => {
  event.addEntity("iceandfire:ghost", (table) => {
    table.addPool((pool) => {
      pool.rolls = 1;
      pool.addItem("iceandfire:ectoplasm", 3).randomChance(0.5);
    });
  });
});

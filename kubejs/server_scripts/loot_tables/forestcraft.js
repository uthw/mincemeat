onEvent("entity.loot_tables", (event) => {
  event.addEntity("forestcraft:desecrated_soul", (table) => {
    table.addPool((pool) => {
      pool.rolls = 1;
      pool.addItem("iceandfire:ectoplasm", 1).randomChance(0.5);
    });
  });

  event.addEntity("forestcraft:soul_blaze", (table) => {
    table.addPool((pool) => {
      pool.rolls = 3;
      pool.addItem("iceandfire:ectoplasm", 1).randomChance(0.5);
    });
  });
});

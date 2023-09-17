// priority: 0

onEvent("item.tags", (event) => {
  event.add("forge:ectoplasms", "iceandfire:ectoplasm");
  // event.add('forge:ectoplasms', 'forestcraft:soul_essence')
  event.add("forge:ectoplasms", "mod_lavacow:ectoplasm");

  event.add("forge:workbench", "minecraft:crafting_table");
  event.add("charm:crafting_tables", "#forge:workbench");
  event.add("refinedstorage:crafting_tables", "#forge:workbench");

  event.add("forge:dusts/ender_pearl", "betterendforge:ender_dust");

  // food
  event.add("forge:pasta", "simplefarming:pasta");
});
// priority: 2

onEvent("item.tags", (event) => {});

// onEvent("recipes", event => {})

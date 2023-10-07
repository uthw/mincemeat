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
    // event.add("forge:pasta", "simplefarming:pasta");

    event.add("spartanweaponry:arrows", "iceandfire:dragonbone_arrow");
    event.add("spartanweaponry:arrows", "iceandfire:stymphalian_arrow");
    event.add("spartanweaponry:arrows", "iceandfire:amphithere_arrow");
    event.add("spartanweaponry:arrows", "iceandfire:sea_serpent_arrow");
    event.add("spartanweaponry:arrows", "ars_nouveau:pierce_arrow");
    event.add("spartanweaponry:arrows", "ars_nouveau:split_arrow");
    event.add("spartanweaponry:arrows", "ars_nouveau:amplify_arrow");
});
// priority: 2

onEvent("item.tags", (event) => {});

// onEvent("recipes", event => {})

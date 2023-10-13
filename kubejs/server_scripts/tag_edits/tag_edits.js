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

    event.add(
        "tombstone:enchanted_grave_key_ingredients",
        "forbidden_arcanus:dark_rune"
    );
    event.add(
        "tombstone:enchanted_grave_key_ingredients",
        "blue_skies:soul_fragment"
    );
    event.add("tombstone:enchanted_grave_key_ingredients", "#forge:ectoplasms");
    event.add(
        "tombstone:enchanted_grave_key_ingredients",
        "eidolon:death_essence"
    );

    event.add("supplementaries:cookies", "abnormals_delight:cherry_cookie");
    event.add("supplementaries:cookies", "abnormals_delight:maple_cookie");
    event.add("supplementaries:cookies", "abnormals_delight:mulberry_cookie");
});
// priority: 2

onEvent("item.tags", (event) => {});

// onEvent("recipes", event => {})

onEvent("recipes", (event) => {
    let recipes = [
        [
            "iceandfire:dragon_flute",
            ["  A", "ABA", "CA "],
            {
                A: "iceandfire:dragonbone",
                B: "supplementaries:flute",
                C: "minecraft:gold_ingot",
            },
        ],
        [
            "iceandfire:tide_trident",
            ["ABC", "DED", " F "],
            {
                A: "upgrade_aquatic:thrasher_tooth",
                B: "iceandfire:sea_serpent_fang",
                C: "alexsmobs:bone_serpent_tooth",
                D: "#forge:scales/sea_serpent",
                E: "aquamirae:abyssal_amethyst",
                F: "iceandfire:dragonbone",
            },
        ],
        [
            "iceandfire:ghost_ingot",
            ["AAA", "ABA", "AAA"],
            {
                A: "iceandfire:ectoplasm",
                B: "enigmaticlegacy:etherium_ingot",
            },
        ],
        [
            "iceandfire:dragon_horn",
            ["AB ", "AAC", " A "],
            {
                A: "iceandfire:dragonbone",
                B: "#forge:ingots/arcane_gold",
                C: "alexsmobs:gazelle_horn",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

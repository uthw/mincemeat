onEvent("recipes", (event) => {
    let recipes = [
        [
            [
                "dimdungeons:block_portal_keyhole",
                ["BP ", "C  ", "   "],
                {
                    B: "dimdungeons:block_gilded_portal",
                    P: "blue_skies:pyrope_gem",
                    C: "#forge:chests/trapped",
                },
            ],
            [
                "dimdungeons:block_key_charger",
                [" A ", "BCB", "DDD"],
                {
                    A: "enigmaticlegacy:thicc_scroll",
                    B: "minecraft:gold_ingot",
                    C: "charm:ender_pearl_block",
                    D: "minecraft:stone_bricks",
                },
            ],
        ],
    ];

    event.shapeless("dimdungeons:item_portal_key", [
        "supplementaries:key",
        "minecraft:name_tag",
    ]);

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

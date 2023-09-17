onEvent("recipes", (event) => {
    let recipes = [
        [
            [
                "eidolon:worktable",
                [
                    // default wasnt working for some reason, may as well edit
                    "AAA",
                    "BCB",
                    "DED",
                ],
                {
                    A: "minecraft:red_carpet",
                    B: "eidolon:pewter_ingot",
                    C: "minecraft:crafting_table",
                    D: "eidolon:polished_wood_pillar",
                    E: "eidolon:polished_planks",
                },
            ],
            [
                "3x eidolon:wooden_altar",
                ["AAA", "BBB", "B B"],
                {
                    A: "#minecraft:wooden_slabs",
                    B: "#minecraft:planks",
                },
            ],
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

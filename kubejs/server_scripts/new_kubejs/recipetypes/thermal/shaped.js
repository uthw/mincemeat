onEvent("recipes", (event) => {
    let recipes = [
        [
            "thermal:xp_crystal",
            ["BA ", "C  ", "   "],
            {
                A: "apotheosis:mythic_shard",
                B: "minecraft:book",
                C: "atum:nebu_ingot",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

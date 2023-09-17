onEvent("recipes", (event) => {
    let recipes = [
        [
            "4x enigmaticlegacy:astral_dust",
            [
                "minecraft:blaze_powder",
                "betterendforge:crystal_shards",
                "#forge:dusts/ender_pearl",
            ],
        ],
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe[0], recipe[1]);
    });
});

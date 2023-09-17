onEvent("recipes", (event) => {
    let recipes = [
        [
            "create:andesite_alloy",
            ["AB ", "BA ", "   "],
            {
                A: "minecraft:andesite",
                B: "environmental:mud_ball",
            },
        ],
        [
            "create:belt_connector",
            ["5x immersiveengineering:hemp_fabric", "#minecraft:coals"],
        ],
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe[0], recipe[1]);
    });
});

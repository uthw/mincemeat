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
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

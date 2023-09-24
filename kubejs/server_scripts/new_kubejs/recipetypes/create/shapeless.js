onEvent("recipes", (event) => {
    let recipes = [
        [
            "create:belt_connector",
            ["5x immersiveengineering:hemp_fabric", "#minecraft:coals"],
        ],
        [
            "create:depot",
            ["supplementaries:pedestal", "create:andesite_casing"],
        ],
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe[0], recipe[1]);
    });
});

onEvent("recipes", (event) => {
    let recipes = [
        [
            "integrateddynamics:drying_basin",
            [" A ", "BCB", " A "],
            {
                A: "immersiveengineering:hemp_fiber",
                B: "#forge:ingots/aluminum",
                C: "create:basin",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

onEvent("recipes", (event) => {
    let recipes = [
        {
            ingredients: [{ item: "modularrouters:blank_upgrade" }],
            energy: 250000,
            result: "modularrouters:energy_upgrade",
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "powah:energizing",
            ingredients: recipe.ingredients,
            energy: recipe.energy,
            result: { item: recipe.result },
        });
    });
});

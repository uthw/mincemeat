onEvent("recipes", (event) => {
    let recipes = [
        {
            ingredients: [{ item: "modularrouters:blank_upgrade" }],
            energy: 250000,
            result: "modularrouters:energy_upgrade",
        },
        {
            ingredients: [
                { tag: "tconstruct:tables" },
                { tag: "forge:ingots/electrum" },
                { tag: "forge:ingots/electrum" },
                { item: "modularrouters:blank_module" },
            ],
            energy: 150000,
            result: "powersuits:tinkertable",
        },
        {
            ingredients: [
                { item: "integrateddynamics:crystalized_menril_chunk" },
                { item: "integrateddynamics:crystalized_menril_block" },
                { item: "integrateddynamics:capacitor_mv" },
                { item: "integrateddynamics:crystalized_menril_block" },
                { item: "integrateddynamics:crystalized_menril_chunk" },
            ],
            energy: 100000,
            result: "integrateddynamics:energy_battery",
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

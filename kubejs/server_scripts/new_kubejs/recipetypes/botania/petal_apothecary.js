onEvent("recipes", (event) => {
    let recipes = [
        {
            output: "atum:nebu_ingot",
            inputs: [
                { tag: "atum:relic_non_dirty" },
                { tag: "atum:relic_non_dirty" },
                { tag: "atum:relic_non_dirty" },
                { tag: "atum:relic_non_dirty" },
                { tag: "atum:relic_non_dirty" },
                { tag: "atum:relic_non_dirty" },
            ],
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "botania:petal_apothecary",
            output: { item: recipe.output },
            ingredients: recipe.inputs,
        });
    });
});

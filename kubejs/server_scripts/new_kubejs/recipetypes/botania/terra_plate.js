onEvent("recipes", (event) => {
    let recipes = [
        {
            inputs: [
                {
                    item: "botania:manasteel_ingot",
                },
                {
                    item: "botania:mana_pearl",
                },
                {
                    item: "botania:mana_diamond",
                },
                {
                    tag: "forge:ingots/pewter",
                },
                {
                    tag: "forge:ingots/sky",
                },
            ],
            output: "botania:terrasteel_ingot",
            mana: 400000,
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "botania:terra_plate",
            mana: recipe.mana,
            ingredients: recipe.inputs,
            output: recipe.output,
        });
    });
});

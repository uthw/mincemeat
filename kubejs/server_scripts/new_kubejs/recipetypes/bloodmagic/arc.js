onEvent("recipes", (event) => {
    let recipes = [
        // {
        //     input: "",
        //     output: "",
        //     addedOutput: [], // optional
        //     tool: "",
        //     consumeIngredient: true,
        //     // outputFluid: // need to add this at some point
        // },
    ];

    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .arc(recipe.output, recipe.input, recipe.tool, recipe.addedOutput)
            .consumeIngredient(recipe.consumeIngredient);
    });
});

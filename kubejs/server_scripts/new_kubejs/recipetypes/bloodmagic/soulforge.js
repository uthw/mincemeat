onEvent("recipes", (event) => {
    let recipes = [
        // {
        //     output: "",
        //     input: [],
        //     minDrain: 0,
        //     drain: 0,
        // },
    ];

    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .soulforge(recipe.output, recipe.input)
            .minimumDrain(recipe.minDrain)
            .drain(recipe.drain);
    });
});

onEvent("recipes", (event) => {
    let recipes = [
        {
            output: "enigmaticlegacy:oblivion_stone",
            input: "forbidden_arcanus:dark_matter",
            consumption: 40,
            drain: 20,
            syphon: 2000,
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .altar(recipe.output, recipe.input)
            .consumptionRate(recipe.consumption)
            .drainRate(recipe.drain)
            .altarSyphon(recipe.syphon);
    });
});

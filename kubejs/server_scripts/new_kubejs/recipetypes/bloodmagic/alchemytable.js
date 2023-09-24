onEvent("recipes", (event) => {
    let recipes = [
        // syphon, ticks, upgradelevel (all ints)
        {
            output: "eidolon:unholy_symbol",
            inputs: [
                "forbidden_arcanus:dark_matter",
                Item.of(
                    "naturesaura:aura_bottle",
                    '{stored_type:"naturesaura:nether"}'
                ),
            ],
            tier: 2,
            time: 10,
            syphon: 10,
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .alchemytable(recipe.output, recipe.inputs)
            .syphon(recipe.syphon)
            .ticks(recipe.time)
            .upgradeLevel(recipe.tier);
    });
});

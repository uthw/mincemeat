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
        {
            output: "occultism:divination_rod",
            inputs: [
                "occultism:spirit_attuned_gem",
                "#forge:ingots/obsidian",
                "spartanweaponry:pole",
            ],
            tier: 1,
            time: 40,
            syphon: 100,
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

onEvent("recipes", (event) => {
    let recipes = [
        [
            "botania:mana_ring",
            ["AB ", "BCB", "  B"],
            {
                A: "botania:mana_tablet",
                B: "#forge:ingots/manasteel",
                C: "enigmaticlegacy:iron_ring",
            },
        ],
        [
            "botania:reach_ring",
            ["AB ", "BCB", "  B"],
            {
                A: "botania:rune_pride",
                B: "#forge:ingots/elementium",
                C: "enigmaticlegacy:iron_ring",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

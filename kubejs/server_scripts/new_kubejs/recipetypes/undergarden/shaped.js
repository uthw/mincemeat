onEvent("recipes", (event) => {
    let recipes = [
        [
            "undergarden:catalyst",
            ["ABA", "BCB", "ABA"],
            {
                A: "atum:nebu_drop",
                B: "#forge:gems/mana",
                C: "minecraft:diamond",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

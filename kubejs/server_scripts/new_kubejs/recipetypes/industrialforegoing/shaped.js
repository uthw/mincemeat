onEvent("recipes", (event) => {
    let recipes = [
        [
            "industrialforegoing:machine_frame_pity",
            ["ABA", "BCB", "ABA"],
            {
                A: "#forge:logs",
                B: "#blue_skies:ingots/horizonite",
                C: "#forge:gears/invar",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

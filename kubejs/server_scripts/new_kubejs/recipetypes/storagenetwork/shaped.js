onEvent("recipes", (event) => {
    let recipes = [
        [
            "storagenetwork:master",
            ["ABA", "BCB", "ABA"],
            {
                A: "#storagedrawers:drawers",
                B: "environmental:ice_chain",
                C: "#forge:gems/arcane_crystal",
            },
        ],
        [
            "storagenetwork:inventory",
            ["ABA", "BCB", "ABA"],
            {
                A: "#forge:nuggets/brass",
                B: "environmental:ice_chain",
                C: "blue_skies:diopside_gem",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

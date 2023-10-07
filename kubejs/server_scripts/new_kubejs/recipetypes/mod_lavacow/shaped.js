onEvent("recipes", (event) => {
    let recipes = [
        [
            "mod_lavacow:cursed_kings_crown",
            [" A ", "BCB", "BDB"],
            {
                A: "#forge:ingots/nebu",
                B: "#forge:gems/sapphire",
                C: "eidolon:enchanted_ash",
                D: "mod_lavacow:hatred_shard",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

onEvent("recipes", (event) => {
    let recipes = [
        [
            "darkutils:charm_portal",
            ["AAA", "BCB", " D "],
            {
                A: "#forge:string",
                B: "forbidden_arcanus:darkstone",
                C: "atum:scarab",
                D: "#forge:obsidian",
            },
        ],
        [
            "4x darkutils:blank_plate",
            ["AA ", "   ", "   "],
            {
                A: "forbidden_arcanus:darkstone",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

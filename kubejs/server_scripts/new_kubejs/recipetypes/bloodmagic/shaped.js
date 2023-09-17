onEvent("recipes", (event) => {
    let recipes = [
        [
            "bloodmagic:soulforge",
            ["A A", "BCB", "BDB"],
            {
                A: "forbidden_arcanus:arcane_crystal",
                B: "#supplementaries:deepslate",
                C: "bloodmagic:blankslate",
                D: "eidolon:lesser_soul_gem",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

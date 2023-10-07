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
        [
            "bloodmagic:altar",
            ["A A", "BCB", "DDD"],
            {
                A: "#forge:gems/cinnabar",
                B: "#supplementaries:deepslate",
                C: "naturesaura:token_rage",
                D: "#forge:ingots/pewter",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

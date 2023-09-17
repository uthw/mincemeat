onEvent("recipes", (event) => {
    let recipes = [
        [
            [
                "capsule:capsulemarker",
                ["ABA", "ACA", "ADA"],
                {
                    A: "minecraft:cobblestone",
                    B: "#forge:glass_panes/colorless",
                    C: "cavesandcliffs:spyglass",
                    D: "minecraft:repeater",
                },
            ],
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

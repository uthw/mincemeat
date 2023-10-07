onEvent("recipes", (event) => {
    let recipes = [
        [
            "4x enderstorage:ender_chest",
            ["ABA", "CDC", "AEA"],
            {
                A: "eidolon:gold_inlay",
                B: "#thermal:rockwool",
                C: "#forge:ingots/obsidian",
                D: "ironchest:diamond_chest",
                E: "#forge:obsidian",
            },
        ],
        [
            "4x enderstorage:ender_tank",
            ["ABA", "CDC", "AEA"],
            {
                A: "eidolon:gold_inlay",
                B: "#thermal:rockwool",
                C: "#forge:ingots/obsidian",
                D: "mekanism:basic_fluid_tank",
                E: "#forge:obsidian",
            },
        ],
        [
            "enderstorage:ender_pouch",
            ["ABA", "BCB", "ADA"],
            {
                A: "eidolon:gold_inlay",
                B: "immersiveengineering:hemp_fabric",
                C: "#forge:gems/mana",
                D: "#thermal:rockwool",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

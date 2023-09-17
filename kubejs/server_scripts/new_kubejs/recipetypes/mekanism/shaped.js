onEvent("recipes", (event) => {
    let recipes = [
        [
            "mekanism:metallurgic_infuser",
            ["ABA", "CDC", "AEA"],
            {
                A: "#forge:ingots/steel",
                B: "minecraft:furnace",
                C: "minecraft:redstone",
                D: "#forge:ingots/osmium",
                E: "thermal:machine_furnace",
            },
        ],
        [
            "mekanism:energy_tablet",
            ["ABA", "CDC", "ABA"],
            {
                A: "minecraft:redstone",
                B: "#forge:ingots/zinc",
                C: "mekanism:alloy_infused",
                D: "thermal:rf_potato",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

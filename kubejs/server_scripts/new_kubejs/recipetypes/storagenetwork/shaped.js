onEvent("recipes", (event) => {
    let recipes = [
        [
            "storagenetwork:master",
            ["ABA", "BCB", "ABA"],
            {
                A: "#storagedrawers:drawers",
                B: "#supplementaries:deepslate",
                C: "minecraft:diamond",
            },
        ],
        [
            "storagenetwork:inventory",
            ["ABA", "BCB", "ABA"],
            {
                A: "#forge:nuggets/brass",
                B: "#supplementaries:deepslate",
                C: "minecraft:diamond",
            },
        ],
        [
            "storagenetwork:inventory_remote",
            ["A  ", "BCB", "DED"],
            {
                A: "immersiveengineering:connector_lv",
                B: "create:andesite_alloy",
                C: "#forge:gears/copper",
                D: "#forge:ingots/aluminum",
                E: "storagenetwork:master"
            }
        ],
        [
            "storagenetwork:crafting_remote",
            ["A  ", "BCB", "DED"],
            {
                A: "immersiveengineering:connector_mv",
                B: "#forge:silicon",
                C: "#charm:crafting_tables",
                D: "#forge:ingots/aluminum",
                E: "storagenetwork:master"
            }
        ]
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

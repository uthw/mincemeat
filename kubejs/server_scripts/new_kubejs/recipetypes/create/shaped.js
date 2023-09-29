onEvent("recipes", (event) => {
    let recipes = [
        [
            "create:andesite_alloy",
            ["AB ", "BA ", "   "],
            {
                A: "minecraft:andesite",
                B: "environmental:mud_brick",
            },
        ],
        [
            "create:millstone",
            [" A ", "BCB", "DBD"],
            {
                A: "#forge:gears/tin",
                B: "create:andesite_alloy",
                C: "create:cogwheel",
                D: "#mysticalagriculture:material/marble",
            },
        ],
        [
            "create:deployer",
            ["ABA", "CDC", " E "],
            {
                A: "create:electron_tube",
                B: "immersiveengineering:logic_circuit",
                C: "create:cogwheel",
                D: "create:andesite_casing",
                E: "create:brass_hand",
            },
        ],
        // [
        //     "3x create:mechanical_crafter",
        //     ["ABA", "CDC", "AEA"],
        //     {
        //         A: "#forge:ingots/bronze",
        //         B: "create:electron_tube",
        //         C: "#forge:gears/copper",
        //         D: "create:copper_casing",
        //         E: "#forge:workbench",
        //     },
        // ],
        [
            "create:brass_hand",
            [" A ", "ABA", " A "],
            {
                A: "create:brass_ingot",
                B: "eidolon:stone_hand",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

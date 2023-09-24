// priority: 1000
onEvent("recipes", (event) => {
    event.remove({
        output: "#forge:dusts",
        input: "immersiveengineering:hammer",
    });

    let recipes = [
        [
            "immersiveengineering:workbench",
            ["A B", "DCC", "E E"],
            {
                A: "#create:toolboxes",
                B: "create:empty_schematic",
                C: "engineersdecor:halfslab_treated_wood",
                D: "#storagedrawers:drawers",
                E: "immersiveengineering:treated_fence",
            },
        ],
        [
            "immersiveengineering:turntable",
            [" A ", "BCB", "DED"],
            {
                A: "create:turntable",
                B: "immersiveengineering:component_iron",
                C: "immersiveengineering:coil_lv",
                D: "create:andesite_alloy",
                E: "#forge:gears/silver",
            },
        ],
        [
            "immersiveengineering:sorter",
            ["ABA", "CDC", "AEA"],
            {
                A: "#forge:treated_wood",
                B: "prettypipes:pipe",
                C: "#forge:plates/copper",
                D: "immersiveengineering:component_iron",
                E: "#forge:silicon",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

onEvent("recipes", (event) => {
    let recipes = [
        {
            output: "immersiveengineering:sample_drill",
            inputs: ["ABA", "ABA", "CDC", "DED", "CDC"],
            keys: {
                A: "immersiveengineering:steel_scaffolding_standard",
                B: "#forge:rods/steel",
                C: "#forge:ingots/copper",
                D: "#forge:ingots/lead",
                E: "immersiveengineering:wirecoil_copper",
            },
        },
        {
            output: "immersiveengineering:windmill",
            inputs: ["A  A  A", " A A A ", " AABAA ", " A A A ", "A  A  A"],
            keys: {
                A: "immersiveengineering:windmill_blade",
                B: "immersiveengineering:component_iron",
            },
        },
        {
            output: "engineersdecor:factory_placer",
            inputs: ["AAA", "ABC", "AAA"],
            keys: {
                A: "engineersdecor:old_industrial_wood_planks",
                B: "create:brass_hand",
                C: "#forge:rods/iron",
            },
        },
        {
            output: "engineersdecor:small_block_breaker",
            inputs: ["ABA", "BCD", "ABA"],
            keys: {
                A: "#forge:plates/steel",
                B: "create:andesite_alloy",
                C: "immersiveengineering:drillhead_iron",
                D: "securitycraft:portable_radar",
            },
        },
        {
            output: "immersivepetroleum:gas_generator",
            inputs: ["AAA", "ABA", "CDC", "E E"],
            keys: {
                A: "#forge:plates/iron",
                B: "immersiveengineering:generator",
                C: "thermal:rf_coil",
                D: "immersiveengineering:capacitor_lv",
                E: "#forge:rods/iron",
            },
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(
            recipe.output,
            recipe.inputs,
            recipe.keys
        );
    });
});

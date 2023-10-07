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
        {
            output: "numina:component_servo",
            inputs: [" A ", " B ", "CDC", "B "],
            keys: {
                A: "numina:component_solenoid",
                B: "immersiveengineering:component_iron",
                C: "#forge:plates/steel",
                D: "create:shaft",
            },
        },
        {
            output: "numina:component_ion_thruster",
            inputs: [" AB", "CDE", "FAB"],
            keys: {
                A: "numina:component_field_emitter",
                B: "numina:component_solenoid",
                C: "immersiveengineering:component_steel",
                D: "create:shaft",
                E: "mekanismgenerators:turbine_blade",
                F: "#forge:wires/copper",
            },
        },
        {
            output: "numina:component_field_emitter",
            inputs: [" E ", "ABA", "CDC", " B "],
            keys: {
                A: "refinedstorage:quartz_enriched_iron",
                B: "numina:component_solenoid",
                C: "thermal:flux_magnet",
                D: "create:stressometer",
                E: "immersiveengineering:connector_lv",
            },
        },
        {
            output: "numina:component_laser_emitter",
            inputs: ["ABC", "BDB", "EBF"],
            keys: {
                A: "#botania:petals/red",
                B: "create:andesite_alloy",
                C: "#botania:petals/green",
                D: "immersivepetroleum:projector",
                E: "#botania:petals/blue",
                F: "#botania:petals/yellow",
            },
        },
        {
            output: "numina:component_control_circuit",
            inputs: ["AB", "C "],
            keys: {
                A: "#forge:wires/copper",
                B: "immersiveengineering:logic_circuit",
                C: "#forge:ingots/electrum",
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

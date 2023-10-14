onEvent("recipes", (event) => {
    let recipes = [
        {
            inputs: [
                Item.of("3x modularrouters:blank_module"),
                "thermal:charge_bench",
            ],
            output: Item.of("3x modularrouters:energy_output_module"),
        },
        {
            inputs: [
                Item.of("3x modularrouters:blank_module"),
                "immersivepetroleum:gas_generator",
            ],
            output: Item.of("3x modularrouters:energy_distributor_module"),
        },
        {
            inputs: ["minecraft:iron_ingot", "minecraft:quartz"],
            output: "2x refinedstorage:quartz_enriched_iron",
        },
        {
            inputs: [
                "immersiveengineering:component_iron",
                "grapplemod:baseupgradeitem",
            ],
            output: "grapplemod:motorupgradeitem",
        },
        {
            inputs: [
                "immersiveengineering:component_iron",
                "#paraglider:paragliders",
            ],
            output: "numina:component_parachute",
        },
        {
            inputs: [
                "#forge:ingots/aluminum",
                "architects_palette:algal_blend",
            ],
            output: "8x powah:dielectric_paste",
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineeringAlloy(
            recipe.output,
            recipe.inputs[0],
            recipe.inputs[1]
        );
    });
});

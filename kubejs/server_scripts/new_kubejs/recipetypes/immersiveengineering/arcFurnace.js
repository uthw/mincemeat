onEvent("recipes", (event) => {
    let recipes = [
        {
            inputs: Item.of("3x modularrouters:blank_module"),
            extras: "thermal:charge_bench",
            output: Item.of("3x modularrouters:energy_output_module"),
        },
        {
            inputs: Item.of("3x modularrouters:blank_module"),
            extras: "immersivepetroleum:gas_generator",
            output: Item.of("3x modularrouters:energy_distributor_module"),
        },
        {
            inputs: "minecraft:iron_ingot",
            extras: "minecraft:quartz",
            output: Item.of("2x modularrouters:energy_distributor_module"),
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineeringArcFurnace(
            recipe.output,
            recipe.inputs,
            recipe.extras
        );
    });
});

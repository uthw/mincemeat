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
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineeringAlloy(
            recipe.output,
            recipe.inputs[0],
            recipe.inputs[1]
        );
    });
});

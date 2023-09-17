onEvent("recipes", (event) => {
    wireMaterials.forEach((material) => {
        let wireMaterials = ["copper", "electrum", "aluminum", "steel", "lead"];
        event.remove({
            output: `immersiveengineering:wire_${material}`,
            input: "immersiveengineering:wirecutter",
        });

        // Add a Create Crafts&additions rolling recipe for each of these wires.
        event.custom({
            type: "createaddition:rolling",
            input: {
                tag: `forge:plates/${material}`,
            },
            result: {
                item: `immersiveengineering:wire_${material}`,
                count: 2,
            },
        });
    });
});

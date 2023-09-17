onEvent("recipes", (event) => {
    let changes = [
        [
            "aquaculture:iron_fishing_rod",
            "minecraft:fishing_rod",
            "minecraft:iron_ingot",
        ],
        [
            "aquaculture:gold_fishing_rod",
            "minecraft:fishing_rod",
            "minecraft:gold_ingot",
        ],
        [
            "aquaculture:diamond_fishing_rod",
            "aquaculture:iron_fishing_rod",
            "minecraft:diamond",
        ],
        [
            "aquaculture:neptunium_fishing_rod",
            "aquaculture:diamond_fishing_rod",
            "aquaculture:neptunium_ingot",
        ],
    ];

    changes.forEach((change) => {
        event.smithing(change[0], change[1], change[2]);
    });
});

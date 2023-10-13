// priority: 30

onEvent("server.datapack.high_priority", (event) => {
    let chestLoot = {
        type: "minecraft:chest",
        pools: [
            {
                rolls: {
                    min: 2,
                    max: 2,
                },
                name: "dimdungeons:pool_1",
                entries: [
                    {
                        type: "item",
                        name: "minecraft:iron_ingot",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 10,
                                    max: 16,
                                },
                            },
                        ],
                    },
                    {
                        type: "item",
                        name: "minecraft:gold_ingot",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 10,
                                    max: 16,
                                },
                            },
                        ],
                    },
                    {
                        type: "item",
                        name: "iceandfire:silver_ingot",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 10,
                                    max: 16,
                                },
                            },
                        ],
                    },
                    {
                        type: "item",
                        name: "eidolon:lead_ingot",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 10,
                                    max: 16,
                                },
                            },
                        ],
                    },
                    {
                        type: "item",
                        name: "blue_skies:falsite_ingot",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 4,
                                    max: 8,
                                },
                            },
                        ],
                    },
                    {
                        type: "item",
                        name: "blue_skies:ventium_ingot",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 4,
                                    max: 8,
                                },
                            },
                        ],
                    },
                    {
                        type: "item",
                        name: "blue_skies:horizonite_ingot",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 10,
                                    max: 16,
                                },
                            },
                        ],
                    },
                    {
                        type: "item",
                        name: "eidolon:pewter_ingot",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 8,
                                    max: 14,
                                },
                            },
                        ],
                    },
                    {
                        type: "item",
                        name: "iceandfire:copper_ingot",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 12,
                                    max: 18,
                                },
                            },
                        ],
                    },
                    {
                        type: "item",
                        name: "eidolon:arcane_gold_ingot",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 6,
                                    max: 10,
                                },
                            },
                        ],
                    },
                    {
                        type: "item",
                        name: "thermal:tin_ingot",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 8,
                                    max: 16,
                                },
                            },
                        ],
                    },
                    {
                        type: "item",
                        name: "immersiveengineering:aluminum_ingot",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 8,
                                    max: 16,
                                },
                            },
                        ],
                    },
                    {
                        type: "item",
                        name: "undergarden:cloggrum_ingot",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 6,
                                    max: 10,
                                },
                            },
                        ],
                    },
                    {
                        type: "item",
                        name: "undergarden:froststeel_ingot",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 6,
                                    max: 10,
                                },
                            },
                        ],
                    },
                    {
                        type: "loot_table",
                        name: "dimdungeons:chests/chestbooks_1",
                        weight: 20,
                    },
                ],
            },
        ],
    };

    event.addJson(`dimdungeons:loot_tables/chests/chestloot_1.json`, chestLoot);
});

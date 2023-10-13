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
                name: "dimdungeons:pool_3",
                entries: [
                    {
                        type: "item",
                        name: "minecraft:totem_of_undying",
                        weight: 3,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 1,
                                    max: 1,
                                },
                            },
                        ],
                    },
                    // {
                    //     type: 'item',
                    //     name: 'forestcraft:prismatic_diamond',
                    //     weight: 2,
                    //     functions: [
                    //         {
                    //             function: 'set_count',
                    //             count: {
                    //                 min: 1,
                    //                 max: 1
                    //             }
                    //         }
                    //     ]
                    // },

                    {
                        type: "item",
                        name: "enigmaticlegacy:forbidden_axe",
                        weight: 2,
                        functions: [
                            {
                                function: "enchant_with_levels",
                                treasure: true,
                                levels: {
                                    min: 44,
                                    max: 44,
                                },
                            },
                        ],
                    },
                    {
                        type: "item",
                        name: "meetyourfight:slicers_dice",
                        weight: 2,
                        functions: [
                            {
                                function: "set_count",
                                count: {
                                    min: 1,
                                    max: 1,
                                },
                            },
                        ],
                    },
                    {
                        type: "loot_table",
                        name: "dimdungeons:chests/chestloot_3",
                        weight: 18,
                    },
                    {
                        type: "loot_table",
                        name: "dimdungeons:chests/chestbooks_4",
                        weight: 9,
                    },
                ],
            },
        ],
    };

    event.addJson(`dimdungeons:loot_tables/chests/chestloot_4.json`, chestLoot);
});

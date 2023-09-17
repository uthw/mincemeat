// priority: 30

onEvent('server.datapack.high_priority', event => {
    let chestLoot = {
        type: 'minecraft:chest',
        pools: [
            {
                rolls: {
                    min: 2,
                    max: 2
                },
                name: 'dimdungeons:pool_3',
                entries: [
                    {
                        type: 'item',
                        name: 'minecraft:diamond',
                        weight: 3,
                        functions: [
                            {
                                function: 'set_count',
                                count: {
                                    min: 6,
                                    max: 9
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'scalinghealth:medkit',
                        weight: 3,
                        functions: [
                            {
                                function: 'set_count',
                                count: {
                                    min: 2,
                                    max: 4
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'minecraft:golden_apple',
                        weight: 3,
                        functions: [
                            {
                                function: 'set_count',
                                count: {
                                    min: 1,
                                    max: 2
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'scalinghealth:life_crystal',
                        weight: 3,
                        functions: [
                            {
                                function: 'set_count',
                                count: {
                                    min: 2,
                                    max: 3
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'paraglider:spirit_orb',
                        weight: 3,
                        functions: [
                            {
                                function: 'set_count',
                                count: {
                                    min: 2,
                                    max: 4
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'minecraft:ender_pearl',
                        weight: 3,
                        functions: [
                            {
                                function: 'set_count',
                                count: {
                                    min: 3,
                                    max: 3
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'atum:nebu_torch',
                        weight: 1,
                        functions: [
                            {
                                function: 'set_count',
                                count: {
                                    min: 4,
                                    max: 4
                                }
                            }
                        ]
                    },
                    // {
                    //     type: 'item',
                    //     name: 'forestcraft:vita',
                    //     weight: 1,
                    //     functions: [
                    //         {
                    //             function: 'set_count',
                    //             count: {
                    //                 min: 3,
                    //                 max: 5
                    //             }
                    //         }
                    //     ]
                    // },
                    {
                        type: 'item',
                        name: 'apotheosis:rare_shard',
                        weight: 3,
                        functions: [
                            {
                                function: 'set_count',
                                count: {
                                    min: 1,
                                    max: 1
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'apotheosis:epic_shard',
                        weight: 1,
                        functions: [
                            {
                                function: 'set_count',
                                count: {
                                    min: 1,
                                    max: 1
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'apotheosis:epic_shard',
                        weight: 1,
                        functions: [
                            {
                                function: 'set_count',
                                count: {
                                    min: 1,
                                    max: 1
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'minecraft:diamond_helmet',
                        weight: 2,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 52,
                                    max: 52
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'minecraft:chestplate',
                        weight: 2,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 52,
                                    max: 52
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'minecraft:leggings',
                        weight: 2,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 52,
                                    max: 52
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'minecraft:diamond_boots',
                        weight: 2,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 52,
                                    max: 52
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'minecraft:diamond_sword',
                        weight: 2,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 52,
                                    max: 52
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'minecraft:diamond_pickaxe',
                        weight: 2,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 52,
                                    max: 52
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'minecraft:diamond_axe',
                        weight: 2,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 52,
                                    max: 52
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'minecraft:diamond_shovel',
                        weight: 2,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 52,
                                    max: 52
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'minecraft:trident',
                        weight: 3,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 46,
                                    max: 46
                                }
                            }
                        ]
                    },
                    {
                        type: 'loot_table',
                        name: 'dimdungeons:chests/chestbooks_2',
                        weight: 4
                    },
                    {
                        type: 'loot_table',
                        name: 'dimdungeons:chests/chestbooks_3',
                        weight: 10
                    },
                    {
                        type: 'loot_table',
                        name: 'dimdungeons:chests/chestbooks_4',
                        weight: 4
                    },
                    {
                        type: 'loot_table',
                        name: 'dimdungeons:chests/chestloot_2',
                        weight: 12
                    },
                ]
            }
        ]
    };

    event.addJson(`dimdungeons:loot_tables/chests/chestloot_3.json`, chestLoot);
})
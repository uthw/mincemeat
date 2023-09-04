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
                name: 'dimdungeons:pool_2',
                entries: [
                    {
                        type: 'item',
                        name: 'minecraft:diamond',
                        weight: 3,
                        functions: [
                            {
                                function: 'set_count',
                                count: {
                                    min: 4,
                                    max: 9
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'minecraft:netherite_scrap',
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
                        name: 'scalinghealth:heart_crystal',
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
                        name: 'blue_skies:pyrope_gem',
                        weight: 3,
                        functions: [
                            {
                                function: 'set_count',
                                count: {
                                    min: 4,
                                    max: 6
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'blue_skies:aquite_gem',
                        weight: 3,
                        functions: [
                            {
                                function: 'set_count',
                                count: {
                                    min: 4,
                                    max: 6
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'apotheosis:uncommon_shard',
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
                        name: 'iceandfire:silver_sword',
                        weight: 3,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 40,
                                    max: 40
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'iceandfire:silver_pickaxe',
                        weight: 3,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 45,
                                    max: 45
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'iceandfire:silver_axe',
                        weight: 3,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 40,
                                    max: 40
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'iceandfire:silver_shovel',
                        weight: 3,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 40,
                                    max: 40
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'iceandfire:silver_hoe',
                        weight: 3,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 50,
                                    max: 50
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'iceandfire:armor_silver_metal_helmet',
                        weight: 3,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 40,
                                    max: 40
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'iceandfire:armor_silver_metal_chestplate',
                        weight: 3,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 40,
                                    max: 40
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'iceandfire:armor_silver_metal_leggings',
                        weight: 3,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 40,
                                    max: 40
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'iceandfire:armor_silver_metal_boots',
                        weight: 3,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 40,
                                    max: 40
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'spartanweaponry:heavy_crossbow_silver',
                        weight: 3,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 40,
                                    max: 40
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'spartanweaponry:longbow_silver',
                        weight: 3,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: true,
                                levels: {
                                    min: 40,
                                    max: 40
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        name: 'dimdungeons:item_portal_key',
                        weight: 7,
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
                        name: 'dimdungeons:item_secret_bell',
                        weight: 2,
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
                        name: 'dimdungeons:block_portal_crown',
                        weight: 5,
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
                        type: 'loot_table',
                        name: 'dimdungeons:chests/chestbooks_2',
                        weight: 10
                    }
                ]
            }
        ]
    };

    event.addJson(`dimdungeons:loot_tables/chests/chestloot_2.json`, chestLoot);
})
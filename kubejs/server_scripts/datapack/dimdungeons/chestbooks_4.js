// priority: 3

onEvent('server.datapack.high_priority', event => {
    let chestLoot = {
        type: 'minecraft:chest',
        pools: [
            {
            rolls: {
                min: 1.0,
                max: 3.0
                },
            name: 'dimdungeons:chestbooks_1',
            entries: [
                    {
                    type: 'item',
                    name: 'minecraft:book',
                    weight: 2,
                    functions: [
                            {
                                function: 'enchant_with_levels',
                                treasure: 'true',
                                levels: {
                                    min: 65,
                                    max: 65
                                }
                            }
                        ]
                    }
                ]
            }
        ]    
    }

    event.addJson(`dimdungeons:loot_tables/chests/chestbooks_2.json`, chestLoot)
})
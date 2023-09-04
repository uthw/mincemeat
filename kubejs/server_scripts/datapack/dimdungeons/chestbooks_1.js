// priority: 3

onEvent('server.datapack.high_priority', event => {
    let chestLoot = {
        type: 'minecraft:chest',
        pools: [
            {
            rolls: {
                min: 6.0,
                max: 9.0
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
                                treasure: 'false',
                                levels: {
                                    min: 10,
                                    max: 25
                                }
                            }
                        ]
                    }
                ]
            }
        ]    
    }

    event.addJson(`dimdungeons:loot_tables/chests/chestbooks_1.json`, chestLoot)
})
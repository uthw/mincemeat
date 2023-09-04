// priority: 30

onEvent('server.datapack.high_priority', event => {
    let chestLoot = {
        type: 'minecraft:chest',
        pools: [
            {
                rolls: {
                    min: 8,
                    max: 12
                },
                name: 'dimdungeons:pool_3',
                entries: [
                    {
                        type: 'loot_table',
                        name: 'dimdungeons:chests/chestbooks_4',
                        weight: 9
                    },
                    {
                        type: 'loot_table',
                        name: 'minecraft:chests/shipwreck_treasure',
                        weight: 9
                    },
                ]
            }
        ]
    };

    event.addJson(`dimdungeons:loot_tables/chests/chestloot_crazy.json`, chestLoot);
})
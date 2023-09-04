onEvent('recipes', event => {
    event.remove({output: '#forge:fishing_rods', mod: 'aquaculture'})

    event.smithing('aquaculture:iron_fishing_rod', 'minecraft:fishing_rod', 'minecraft:iron_ingot')
    event.smithing('aquaculture:gold_fishing_rod', 'minecraft:fishing_rod', 'minecraft:gold_ingot')
    event.smithing('aquaculture:diamond_fishing_rod', 'aquaculture:iron_fishing_rod', 'minecraft:diamond')
    event.smithing('aquaculture:neptunium_fishing_rod', 'aquaculture:diamond_fishing_rod', 'aquaculture:neptunium_ingot')
})
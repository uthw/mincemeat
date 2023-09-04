onEvent('item.modification', event => {
    event.modify('minecraft:ender_pearl', item => {item.maxStackSize = 64})
    event.modify('minecraft:enchanted_book', item => {item.maxStackSize = 64})
    event.modify('minecraft:potion', item => {item.maxStackSize = 16})
    event.modify('minecraft:splash_potion', item => {item.maxStackSize = 16})
    event.modify('minecraft:lingering_potion', item => {item.maxStackSize = 16})
    event.modify('#minecraft:boats', item => {item.maxStackSize = 16})
    event.modify('#minecraft:beds', item => {item.maxStackSize = 16})
    event.modify('#minecraft:music_discs', item => {item.maxStackSize = 16})
    // event.modify('#forge:buckets', item => {item.maxStackSize = 16})

    // event.modify('minecraft:fishing_rod', item => {item.maxDamage = 384})

    // spartan silver fix
    event.modify('#spartanweaponry:silver_weapons', item => {item.maxDamage = 460})
    event.modify('spartanweaponry:shield_basic_silver', item => {item.maxDamage = 800})
    event.modify('spartanweaponry:shield_tower_silver', item => {item.maxDamage = 800})
})


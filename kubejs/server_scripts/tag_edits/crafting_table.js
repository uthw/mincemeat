// priority: 2

onEvent('item.tags', event => {
    event.add('forge:workbench', 'minecraft:crafting_table')
    event.add('charm:crafting_tables', '#forge:workbench')
    event.add('refinedstorage:crafting_tables', '#forge:workbench')

})

// onEvent("recipes", event => {})
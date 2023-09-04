onEvent('recipes', event => {
    event.remove({output: 'atum:scarab'})
    event.shaped('atum:scarab', [
        ' A ',
        'BCB',
        ' B '
    ], {
        A: 'minecraft:diamond',
        B: 'minecraft:gold_ingot',
        C: 'blue_skies:aquite_gem'
    })

    event.remove({output:'atum:nebu_drop', type:'minecraft:smelting', type:'minecraft:blasting'})
    event.smelting('atum:nebu_ingot', 'atum:nebu_ore')
    event.blasting('atum:nebu_ingot', 'atum:nebu_ore')
})
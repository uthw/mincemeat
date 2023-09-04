// onEvent('recipes', event => {
//     event.shaped('rats:rat_cage', [
//         ''
//     ])

//     event.shaped('rats:rat_breeding_lantern', [
//         ' A ',
//         'BCB',
//         ' D '
//     ], {
//         A: '#forge:string',
//         B: '#forge:dyes/red',
//         C: 'minecraft:lantern',
//         D: 'scalinghealth:heart_crystal'
//     }) // make it so this is pre nether

//     event.shapeless('rats:rat_sack', [
//         'quark:seed_pouch', '#forge:cheese'
//     ])

//     event.shaped('rats:rat_upgrade_flight', [
//         'ABA',
//         'CDC',
//         'ABA'
//     ], {
//         A: 'forestcraft:sky_fragment',
//         B: '#forge:cheese',
//         C: 'rats:feathery_wing',
//         D: 'rats:rat_upgrade_basic'
//     })

//     event.shaped('rats:rat_upgrade_poison', [
//         'AAA',
//         'BCB',
//         'DDD'
//     ], {
//         A: 'iceandfire:witherbone',
//         B: 'ars_nouveau:mana_gem',
//         C: 'rats:rat_upgrade_basic',
//         D: 'minecraft:poisonous_potato'
//     })

//     event.shaped('rats:rat_flute', [
//         '  A',
//         'ABA',
//         'CA '
//     ], {
//         A: '#forge:cheese',
//         B: 'supplementaries:flute',
//         C: 'minecraft:gold_ingot'
//     })

//     let removeItems = ['rats:rat_cage', 'rats:rat_breeding_lantern', 'rats:rat_sack', 'rats:rat_upgrade_flight', 'rats:rat_upgrade_poison', 'rats:rat_flute']
//     removeItems.forEach(item => event.remove({output: item}))
// })
// find these in towers of the wild instead
onEvent('recipes', event => {
    event.remove({output: 'paraglider:paraglider'})

    event.shaped('paraglider:heart_container', [
        'ABA',
        'BAB',
        'ABA'
    ], { A: 'scalinghealth:heart_crystal', B: 'paraglider:spirit_orb' })
})
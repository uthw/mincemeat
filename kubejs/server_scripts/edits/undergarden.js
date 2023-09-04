onEvent("recipes", event => {
    event.remove({output:"undergarden:catalyst"})
    event.shaped("undergarden:catalyst", [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: "atum:nebu_drop",
        B: "blue_skies:pearl",
        C: "minecraft:diamond"
    })
})
onEvent('recipes', event => {
    let upgrade = 'sophisticatedbackpacks:stack_upgrade_tier_';
    let craftingRecipe = [' A ', 'ABA', ' A ']
    for (let i = 1; i < 5; i++) {
        event.remove({output: upgrade + i.toString()});
    }

    let base = 'sophisticatedbackpacks:upgrade_base';
    const upgradeBlocks = ['#forge:storage_blocks/copper', '#forge:storage_blocks/silver', '#forge:storage_blocks/gold', 'minecraft:diamond_block'];
    // backpack stack size upgrade edits for convenience
    for (let i = 0; i < 4; i++) {
        let upgradeStage = `${upgrade}${i}`
        let currentValue = i == 0 ? base : upgradeStage;
        if (!(i == 0)) {
            event.shaped(upgradeStage, craftingRecipe, {A: upgradeBlocks[i], B: currentValue});
        }

    }

})
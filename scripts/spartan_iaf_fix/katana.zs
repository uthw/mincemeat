// import crafttweaker.api.item.IItemStack;
// import crafttweaker.api.item.MCIngredientConditioned;
// import crafttweaker.api.util.text.MCTextComponent;

// for allItems in game.items {
//     if ('dragonsteel' in (allItems.registryName as string) && 'longsword' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 17, ADDITION, [<equipmentslottype:mainhand>]);

//         // applies to parrying dagger too
//         if ('dragonsteel' in (allItems.registryName as string) && 'dagger' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 11, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'katana' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 12, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'saber' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 12, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'rapier' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 7, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'greatsword' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 16, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'hammer' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 21, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'warhammer' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 20, ADDITION, [<equipmentslottype:mainhand>]);
//         }
//         else if ('dragonsteel' in (allItems.registryName as string) && 'hammer' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 21, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'spear' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 13, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'halberd' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 18, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'pike' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 13, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'lance' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 13, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'throwing_knife' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 9, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'tomahawk' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 13, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'javelin' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 9, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'boomerang' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 12, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'battleaxe' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 20, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'flanged_mace' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 15, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'glaive' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 16, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'quarterstaff' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 15, ADDITION, [<equipmentslottype:mainhand>]);
//         }

//         if ('dragonsteel' in (allItems.registryName as string) && 'scythe' in (allItems.registryName as string)) {
//         allItems.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'buff', 15, ADDITION, [<equipmentslottype:mainhand>]);
//         }
//     }
// }
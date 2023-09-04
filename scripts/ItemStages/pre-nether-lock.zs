import mods.itemstages.ItemStages;
import crafttweaker.api.item.IItemStack;

var restrictedTag = <tag:items:forge:three_restricted>;
var restrictedItems = [
    <item:minecraft:blaze_powder>,
    <item:minecraft:blaze_rod>,
    <item:minecraft:wither_skeleton_skull>,

    <item:forestcraft:soul_essence>,
    <item:forestcraft:molten_ingot>,
    <item:forestcraft:netherite_lighter>,

    <item:ars_nouveau:archmage_spell_book>,

    <item:iceandfire:ghost_sword>,

    <item:astralsorcery:mantle>
    ] as IItemStack[];

for item in restrictedItems {
    restrictedTag.add(item);
}

var restrictedWords = [
    'armor_white',
    'armor_electric',
    'armor_copper',
    'armor_black',
    'armor_red',
    'armor_bronze',
    'armor_green',
    'armor_blue',
    'armor_gray',
    'armor_amethyst'
] as string[];

for allItems in game.items {
    for word in restrictedWords {
        if (word in (allItems.registryName as string))
        {
            restrictedTag.add(allItems);
        }
    }
}

for allItems in game.items {
    if (
    'armor_silver_' in (allItems.registryName as string) && !('armor_silver_metal_' in (allItems.registryName as string)) || 
    'tide_' in (allItems.registryName as string) && !('_dweller' in (allItems.registryName as string))) {
        restrictedTag.add(allItems);
    }
}

// restrict the entire tag at once
ItemStages.restrict(restrictedTag, 'three');


// /effect give @s minecraft:night_vision 9999 0 true
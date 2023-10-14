import mods.itemstages.ItemStages;
import crafttweaker.api.item.IItemStack;

var restrictedTag = <tag:items:forge:two_restricted>;
var restrictedItems = [
    // <item:forestcraft:vita>,
    // <item:forestcraft:blooming_log>,
    // <item:forestcraft:giant_stinger>,
    
    <item:iceandfire:witherbone>,
    <item:iceandfire:hippogryph_sword>,
    <item:iceandfire:stymphalian_feather_bundle>,

    <item:alexsmobs:shield_of_the_deep>,

    <item:astralsorcery:starmetal_ingot>,
    <item:astralsorcery:stardust>,
    
    <item:minecraft:enchanting_table>,
    <item:minecraft:totem_of_undying>
    ] as IItemStack[];

for item in restrictedItems {
    restrictedTag.add(item);
}

ItemStages.restrict(<tag:items:curios:spellstone>, 'two');

var restrictedWords = [
    // 'diamond',
    'netherite',
    // 'anvil',
    'neptunium',
    'celestial',
] as string[];

for allItems in game.items {
    for word in restrictedWords {
        if (word in (allItems.registryName as string))
        {
            restrictedTag.add(allItems);
        }
    }

    if (allItems.contains(<item:minecraft:diamond>)) {
        restrictedTag.add(allItems);
    }
}

ItemStages.restrict(restrictedTag, 'two');

// ItemStages.createModRestriction('forestcraft', 'atum');
import mods.itemstages.ItemStages;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.tag.MCTag;

// use tags instead of directly restricting items. I made the mistake of just looping through an array with itemstages.restrict and it dropped performance by around 30%
var restrictedTag = <tag:items:forge:four_restricted>;

var restrictedItems = [
    <item:minecraft:ender_eye>,
    
    <item:enigmaticlegacy:etherium_ore>,
    <item:enigmaticlegacy:astral_dust>,

    // <item:forestcraft:equinox_totem>
    ] as IItemStack[];

for item in restrictedItems {
    restrictedTag.add(item);
}

var restrictedWords = [
    'dragonsteel',
    'etherium'
] as string[];

for allItems in game.items {
    for word in restrictedWords {
        if (word in (allItems.registryName as string))
        {
            restrictedTag.add(allItems);
        }
    }
}

// restrict
ItemStages.restrict(restrictedTag, 'four');
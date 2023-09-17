import mods.itemstages.ItemStages;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.tag.MCTag;

// new array with the things so we can loop through it
var restrictedArray = [
    // <item:theabyss:unstable_obsidian>,

    <item:wstweaks:lava_blade>,
    <item:wstweaks:blaze_blade>,

    // <item:forestcraft:demon_food>,
    <item:alexsmobs:mysterious_worm>
    ] as IItemStack[];

var restrictedItems = new stdlib.List<IItemStack>();
for item in restrictedArray {
    restrictedItems.add(item);
}

for item in restrictedItems {
    <tag:items:forge:five_restricted>.add(item);
}

ItemStages.restrict(<tag:items:forge:five_restricted>, 'five');

// for allItems in game.items {
//     if () {
//         ItemStages.restrict(allItems, 'abyss');
//     }
// }

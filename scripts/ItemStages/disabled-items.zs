import mods.itemstages.ItemStages;
import crafttweaker.api.item.IItemStack;

var restrictedItems = [
    <item:artifacts:everlasting_beef>,

    <item:wstweaks:blaze_blade>,

    // <item:tombstone:soul_receptacle>

    // <item:mahoutsukai:scroll_damage_replication>
    ] as IItemStack[];

for item in restrictedItems {
    ItemStages.restrict(item, 'disabled');
}

var restrictedWords = [
    'enderite'
] as string[];

for allItems in game.items {
    for word in restrictedWords {
        if (word in (allItems.registryName as string))
        {
            ItemStages.restrict(allItems, 'disabled');
        }
    }
}
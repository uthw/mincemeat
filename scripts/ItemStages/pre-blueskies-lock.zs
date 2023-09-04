import mods.itemstages.ItemStages;
import crafttweaker.api.item.IItemStack;

// Right now only 3 items are restricted to blueskies but might as well do this to be safe
var restrictedTag = <tag:items:forge:one_restricted>;
var restrictedItems = [
    <item:forestcraft:aquamarine>,

    <item:ars_nouveau:apprentice_spell_book>,

    <item:minecraft:enchanted_book>
] as IItemStack[];

for item in restrictedItems {
    restrictedTag.add(item);
}

var restrictedWords = [
    'arcane_gold'
] as string[];

for allItems in game.items {
    for word in restrictedWords {
        if (word in (allItems.registryName as string))
        {
            restrictedTag.add(allItems);
        }
    }
}

var restrictedMods = ['aquamirae', 'blue_skies'] as string[];

ItemStages.createModRestriction(restrictedMods, 'one');
ItemStages.createModRestriction('astralsorcery', s => <item:astralsorcery:tome>.matches(s), 'one');
ItemStages.restrict(restrictedTag,'one');
// ItemStages.createModRestriction("minecraft", s => <item:minecraft:stick>.matches(s), "one");
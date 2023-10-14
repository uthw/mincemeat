import crafttweaker.api.villagers.VillagerTrades;

villagerTrades.removeEnchantedBookForEmeraldsTrade(<profession:minecraft:librarian>, 1);
villagerTrades.removeEnchantedBookForEmeraldsTrade(<profession:minecraft:librarian>, 2);
villagerTrades.removeEnchantedBookForEmeraldsTrade(<profession:minecraft:librarian>, 3);
villagerTrades.removeEnchantedBookForEmeraldsTrade(<profession:minecraft:librarian>, 4);

villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:librarian>, 5, <item:minecraft:name_tag>);
villagerTrades.addTrade(<profession:minecraft:librarian>, 5, <item:minecraft:emerald> * 20, <item:minecraft:book> * 1, <item:minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: "minecraft:mending" as string}]}), 3, 10, 0.25);

// Things below this comment are from RAD2!
villagerTrades.addTrade(<profession:minecraft:librarian>, 2, <item:minecraft:emerald> * 1, <item:supplementaries:brass_lantern>, 12, 5, 0.05);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:librarian>, 2, <item:minecraft:lantern>);

villagerTrades.addTrade(<profession:minecraft:librarian>, 4, <item:minecraft:emerald> * 12, <item:minecraft:book> * 1, <item:apotheosis:scrap_tome>, 4, 8, 0.05);
// villagerTrades.addTrade(<profession:minecraft:librarian>, 5, <item:minecraft:emerald> * 26, <item:minecraft:book> * 1, <item:tombstone:book_of_disenchantment>, 3, 10, 0.05);

// 

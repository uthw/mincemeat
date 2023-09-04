import crafttweaker.api.item.IItemStack;

// <item:iceandfire:armor_silver_metal_helmet>.maxDamage = 198;
// <item:iceandfire:armor_silver_metal_chestplate>.maxDamage = 288;
// <item:iceandfire:armor_silver_metal_leggings>.maxDamage = 270;
// <item:iceandfire:armor_silver_metal_boots>.maxDamage = 234;

for item in game.items {
    if (item.maxDamage >= 1) {
        item.maxDamage = item.maxDamage * 2;
    }
}

<item:immersiveengineering:hammer>.maxDamage = 3;
import crafttweaker.api.item.MCIngredientConditioned;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.util.text.MCTextComponent;

var fifteenPercent = [
    "rapier", "katana", "cutlass", "scimitar", "machete", "anubis_wrath", "saber", "scythe", "tide_dweller", "pickaxe"
];

var twentyFivePercent = [
    "claymore", "great_sword", "greatsword", "the_incinerator", "sharp_bone_jaw", "glaive", "pike", "spear", "lance", "tefnuts_call", "halberd"
];

var thirtyFivePercent = [
    "mace", "axe", "paxel", "eater_of_the_souls", "trident"
] as string[];

var fiftyPercent = [
    "great_hammer", "greathammer", "war_hammer", "warhammer", "gebs_might", "shus_exile", "infernal_forge"
] as string[];

var seventyFivePercent = [
    "blacksmith_gavel", "montus_strike", "troll_weapon"
] as string[];

var critFive = [
    "katana", "saber", "dagger", "rapier"
];

for item in game.items {
    

    for weapon in twentyFivePercent {
        if (weapon in (item.registryName as string))
        {
            item.anyDamage().addGlobalAttributeModifier(<attribute:parrying:armor_pen>, "42f502a6-5bd5-4c7b-9043-3cf5d484b049", "armor_pen", 0.25, MULTIPLY_BASE, [<equipmentslottype:mainhand>]);
        }
    }

    for weapon in thirtyFivePercent {
        if (weapon in (item.registryName as string))
        {
            item.anyDamage().addGlobalAttributeModifier(<attribute:parrying:armor_pen>, "42f502a6-5bd5-4c7b-9043-3cf5d484b049", "armor_pen", 0.35, MULTIPLY_BASE, [<equipmentslottype:mainhand>]);
        }
    }

    // 15% goes here so pickaxe has it
    for weapon in fifteenPercent {
        if (weapon in (item.registryName as string))
        {
            item.anyDamage().addGlobalAttributeModifier(<attribute:parrying:armor_pen>, "42f502a6-5bd5-4c7b-9043-3cf5d484b049", "armor_pen", 0.15, MULTIPLY_BASE, [<equipmentslottype:mainhand>]);
        }
    }

    for weapon in fiftyPercent {
        if (weapon in (item.registryName as string))
        {
            item.anyDamage().addGlobalAttributeModifier(<attribute:parrying:armor_pen>, "42f502a6-5bd5-4c7b-9043-3cf5d484b049", "armor_pen", 0.5, MULTIPLY_BASE, [<equipmentslottype:mainhand>]);
        }
    }

    for weapon in seventyFivePercent {
        if (weapon in (item.registryName as string))
        {
            item.anyDamage().addGlobalAttributeModifier(<attribute:parrying:armor_pen>, "42f502a6-5bd5-4c7b-9043-3cf5d484b049", "armor_pen", 0.75, MULTIPLY_BASE, [<equipmentslottype:mainhand>]);
        }
    }

    for weapon in critFive {
        if (weapon in (item.registryName as string))
        {
            item.anyDamage().addGlobalAttributeModifier(<attribute:obscure_api:critical_hit>, "ab3f55d3-645c-4f38-a497-9c13a33db5cf", "crit", 0.05, MULTIPLY_BASE, [<equipmentslottype:mainhand>]);
        }
    }
}
<item:aquamirae:fin_cutter>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Nerf", 3, ADDITION, [<equipmentslottype:mainhand>]);
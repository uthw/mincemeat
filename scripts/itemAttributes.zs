

import crafttweaker.api.item.MCIngredientConditioned;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.util.text.MCTextComponent;
import crafttweaker.api.entity.Attribute;
import crafttweaker.api.entity.AttributeOperation;
import crafttweaker.api.util.MCEquipmentSlotType;

// import crafttweaker.api.util.ITooltipFunction;

// max hp doesnt have a global uuid since not generic
var maxHp = "8fb6607d-770d-4b72-b5f6-0b72cc00d3af";

var attackDamage = "cb3f55d3-645c-4f38-a497-9c13a33db5cf";
var attackSpeed = "fa233e1c-4180-4865-b01b-bcce9785aca3";

var helmet = '2ad3f246-fee1-4e67-b886-69fd380bb150';
var chestplate = '9f3d476d-c118-4544-8365-64846904b48e';
var leggings = 'd8499b04-0e66-4726-ab29-64469d734e0d';
var boots = '845db27c-c624-495f-8c9f-6020a9a58b6b';

var head = [<equipmentslottype:head>];
var chest = [<equipmentslottype:chest>];
var legs = [<equipmentslottype:legs>];
var feet = [<equipmentslottype:feet>];
var mainHand = [<equipmentslottype:mainhand>];

// item list
var items = [
    <item:iceandfire:armor_silver_metal_helmet>,
    <item:iceandfire:armor_silver_metal_chestplate>,
    <item:iceandfire:armor_silver_metal_leggings>,
    <item:iceandfire:armor_silver_metal_boots>,

    <item:aquamirae:fin_cutter>,

    <item:alexsmobs:moose_headgear>,

    <item:enigmaticlegacy:etherium_helmet>,
    <item:enigmaticlegacy:etherium_helmet>,
    <item:enigmaticlegacy:etherium_chestplate>,
    <item:enigmaticlegacy:etherium_chestplate>,
    <item:enigmaticlegacy:etherium_leggings>,
    <item:enigmaticlegacy:etherium_leggings>,
    <item:enigmaticlegacy:etherium_boots>,
    <item:enigmaticlegacy:etherium_boots>,

    <item:cataclysm:ignitium_chestplate>,
    <item:cataclysm:ignitium_chestplate>,
    <item:cataclysm:ignitium_elytra_chestplate>,
    <item:cataclysm:ignitium_elytra_chestplate>,

    <item:wstweaks:lava_blade>,
    <item:cataclysm:the_incinerator>,

    <item:sanguinearsenal:sanguine_praetor_boots>,
    <item:sanguinearsenal:sanguine_praetor_boots>,
    <item:sanguinearsenal:sanguine_praetor_leggings>,
    <item:sanguinearsenal:sanguine_praetor_leggings>,
    <item:sanguinearsenal:sanguine_praetor_tunic>,
    <item:sanguinearsenal:sanguine_praetor_tunic>,
    <item:sanguinearsenal:sanguine_praetor_hood>,
    <item:sanguinearsenal:sanguine_praetor_hood>,

    <item:mythicbotany:alfsteel_sword>,
    <item:mythicbotany:alfsteel_sword>,
    <item:botania:ender_dagger>,

    
] as IItemStack[];

var attributes = [
    <attribute:minecraft:generic.max_health>,
    <attribute:minecraft:generic.max_health>,
    <attribute:minecraft:generic.max_health>,
    <attribute:minecraft:generic.max_health>,

    <attribute:minecraft:generic.attack_damage>,

    <attribute:minecraft:generic.armor>,

    <attribute:minecraft:generic.armor>,
    <attribute:minecraft:generic.armor_toughness>,
    <attribute:minecraft:generic.armor>,
    <attribute:minecraft:generic.armor_toughness>,
    <attribute:minecraft:generic.armor>,
    <attribute:minecraft:generic.armor_toughness>,
    <attribute:minecraft:generic.armor>,
    <attribute:minecraft:generic.armor_toughness>,
    
    <attribute:minecraft:generic.armor>,
    <attribute:minecraft:generic.armor_toughness>,
    <attribute:minecraft:generic.armor>,
    <attribute:minecraft:generic.armor_toughness>,

    <attribute:minecraft:generic.attack_damage>,
    <attribute:minecraft:generic.attack_damage>,

    <attribute:minecraft:generic.armor>,
    <attribute:minecraft:generic.armor_toughness>,
    <attribute:minecraft:generic.armor>,
    <attribute:minecraft:generic.armor_toughness>,
    <attribute:minecraft:generic.armor>,
    <attribute:minecraft:generic.armor_toughness>,
    <attribute:minecraft:generic.armor>,
    <attribute:minecraft:generic.armor_toughness>,

    // alf sword
    <attribute:minecraft:generic.attack_speed>,
    <attribute:minecraft:generic.attack_damage>,
    <attribute:minecraft:generic.attack_damage>,
    
] as Attribute[];

var uuids = [
    // hp
    maxHp,
    maxHp,
    maxHp,
    maxHp,

    // attack damage for fincutter and armor for headdress
    attackDamage,
    helmet,

    // helmet (ETHERIUM)
    helmet,
    helmet,

    // chestplate
    chestplate,
    chestplate,

    // leggings
    leggings,
    leggings,

    // boots
    boots,
    boots,

    // ignitium
    chestplate,
    chestplate,
    chestplate,
    chestplate,

    // lavablades
    attackDamage,
    attackDamage,

    // sanguine armor
    boots,
    boots,
    leggings,
    leggings,
    chestplate,
    chestplate,
    helmet,
    helmet,

    attackSpeed,
    attackDamage,
    attackDamage
] as string[];

var values = [
    2,
    2,
    2,
    2,

    //fin cutter
    3,

    //moose
    4,

    //etherium
    5,
    5,
    10,
    5,
    8,
    5,
    5,
    5,

    //ignitium chestplate
    9,
    5,
    9,
    5,

    4,
    17,

    // sanguine praetor
    3,
    2,
    6,
    2,
    7,
    2,
    3,
    2,

    -2.7, // this gives 1.3 attack speed (why did mojank do it like this)
    3,
    4,
] as double[];

var operations = [
    ADDITION,
    ADDITION,
    ADDITION,
    ADDITION,

    // fincutter and moose
    ADDITION,

    ADDITION,

    // etherium
    ADDITION,
    ADDITION,
    ADDITION,
    ADDITION,
    ADDITION,
    ADDITION,
    ADDITION,
    ADDITION,

    // ignitium
    ADDITION,
    ADDITION,
    ADDITION,
    ADDITION,

    // lava swords
    ADDITION,
    ADDITION,

    // praetor gear
    ADDITION,
    ADDITION,
    ADDITION,
    ADDITION,
    ADDITION,
    ADDITION,
    ADDITION,
    ADDITION,

    ADDITION,
    ADDITION,
    ADDITION
] as AttributeOperation[];

var slotTypes = [
    head,
    chest,
    legs,
    feet,

    mainHand,

    head,

    head,
    head,
    chest,
    chest,
    legs,
    legs,
    feet,
    feet,

    chest,
    chest,
    chest,
    chest,

    mainHand,
    mainHand,

    feet,
    feet,
    legs,
    legs,
    chest,
    chest,
    head,
    head,

    mainHand,
    mainHand,
    mainHand
] as MCEquipmentSlotType[][];

// because no for loop in zen script
var i = 0;
while (i < 29) {
    println(i);

    items[i].anyDamage().addGlobalAttributeModifier(attributes[i], uuids[i], "addedbyscript" + i, values[i], operations[i], slotTypes[i]);

    i++;
}


<item:twilightforest:block_and_chain>.maxDamage = 512;

// //soul weapons
// // <item:atum:anubis_wrath>.anyDamage().addGlobalAttributeModifier(<attribute:dungeons_libraries:soul_gathering>, "ab1b3a5a-0a50-401e-af73-701136dbbc2b", "soul_bonus", 1, ADDITION, [<equipmentslottype:mainhand>]);
// // <item:eidolon:reaper_scythe>.anyDamage().addGlobalAttributeModifier(<attribute:dungeons_libraries:soul_gathering>, "ab1b3a5a-0a50-401e-af73-701136dbbc2b", "soul_bonus", 1, ADDITION, [<equipmentslottype:mainhand>]);

// // silver armor more hp
// <item:iceandfire:armor_silver_metal_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.max_health>, "8fb6607d-770d-4b72-b5f6-0b72cc00d3af", "silverhp", 2, ADDITION, [<equipmentslottype:head>]);
// <item:iceandfire:armor_silver_metal_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.max_health>, "50740ab9-c8a8-4975-8d84-0349d0fa5d63", "silverhp", 2, ADDITION, [<equipmentslottype:chest>]);
// <item:iceandfire:armor_silver_metal_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.max_health>, "574a27af-de02-4931-9de1-83684f6c8c66", "silverhp", 2, ADDITION, [<equipmentslottype:legs>]);
// <item:iceandfire:armor_silver_metal_boots>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.max_health>, "f68e8546-aa12-493c-b3a1-5d6db01e9c4c", "silverhp", 2, ADDITION, [<equipmentslottype:feet>]);

// var newArray = 

// // Fin Cutter Nerf
// <item:aquamirae:fin_cutter>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Nerf", 3, ADDITION, [<equipmentslottype:mainhand>]);

// // moose headdress Nerf
// <item:alexsmobs:moose_headgear>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, "2ad3f246-fee1-4e67-b886-69fd380bb150", "nerf", 4, ADDITION, [<equipmentslottype:head>]);

// // Buff to etherium since it's now an upgrade to aeternium
// <item:enigmaticlegacy:etherium_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, '2ad3f246-fee1-4e67-b886-69fd380bb150', 'buff', 5, ADDITION, [<equipmentslottype:head>]);
// <item:enigmaticlegacy:etherium_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>, '2ad3f246-fee1-4e67-b886-69fd380bb150', 'buff', 5, ADDITION, [<equipmentslottype:head>]);

// <item:enigmaticlegacy:etherium_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, '9f3d476d-c118-4544-8365-64846904b48e', 'buff', 10, ADDITION, [<equipmentslottype:chest>]);
// <item:enigmaticlegacy:etherium_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>, '9f3d476d-c118-4544-8365-64846904b48e', 'buff', 5, ADDITION, [<equipmentslottype:chest>]);

// <item:enigmaticlegacy:etherium_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, 'd8499b04-0e66-4726-ab29-64469d734e0d', 'buff', 8, ADDITION, [<equipmentslottype:legs>]);
// <item:enigmaticlegacy:etherium_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>, 'd8499b04-0e66-4726-ab29-64469d734e0d', 'buff', 5, ADDITION, [<equipmentslottype:legs>]);

// <item:enigmaticlegacy:etherium_boots>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, '845db27c-c624-495f-8c9f-6020a9a58b6b', 'buff', 5, ADDITION, [<equipmentslottype:feet>]);
// <item:enigmaticlegacy:etherium_boots>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>, '845db27c-c624-495f-8c9f-6020a9a58b6b', 'buff', 5, ADDITION, [<equipmentslottype:feet>]);

// // // Slightly nerf the Ignitium Chestplate
// <item:cataclysm:ignitium_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, '9f3d476d-c118-4544-8365-64846904b48e', 'buff', 9, ADDITION, [<equipmentslottype:chest>]);
// <item:cataclysm:ignitium_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>, '9f3d476d-c118-4544-8365-64846904b48e', 'buff', 5, ADDITION, [<equipmentslottype:chest>]);

// <item:cataclysm:ignitium_elytra_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, '9f3d476d-c118-4544-8365-64846904b48e', 'buff', 9, ADDITION, [<equipmentslottype:chest>]);
// <item:cataclysm:ignitium_elytra_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>, '9f3d476d-c118-4544-8365-64846904b48e', 'buff', 5, ADDITION, [<equipmentslottype:chest>]);

// // buff the incinerator (big bertha?) and nerf the immolation blade
// <item:wstweaks:lava_blade>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 'nerf', 6, ADDITION, [<equipmentslottype:mainhand>]);

// <item:cataclysm:the_incinerator>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, 'cb3f55d3-645c-4f38-a497-9c13a33db5cf', 6, ADDITION, [<equipmentslottype:mainhand>]);

// // buff the praetor armor
// <item:sanguinearsenal:sanguine_praetor_boots>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, '845db27c-c624-495f-8c9f-6020a9a58b6b', 'buff', 3, ADDITION, [<equipmentslottype:feet>]);
// <item:sanguinearsenal:sanguine_praetor_boots>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>, '845db27c-c624-495f-8c9f-6020a9a58b6b', 'buff', 2, ADDITION, [<equipmentslottype:feet>]);

// <item:sanguinearsenal:sanguine_praetor_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, 'd8499b04-0e66-4726-ab29-64469d734e0d', 'buff', 6, ADDITION, [<equipmentslottype:legs>]);
// <item:sanguinearsenal:sanguine_praetor_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>, 'd8499b04-0e66-4726-ab29-64469d734e0d', 'buff', 2, ADDITION, [<equipmentslottype:legs>]);

// <item:sanguinearsenal:sanguine_praetor_tunic>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, '9f3d476d-c118-4544-8365-64846904b48e', 'buff', 7, ADDITION, [<equipmentslottype:chest>]);
// <item:sanguinearsenal:sanguine_praetor_tunic>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>, '9f3d476d-c118-4544-8365-64846904b48e', 'buff', 2, ADDITION, [<equipmentslottype:chest>]);

// <item:sanguinearsenal:sanguine_praetor_hood>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, '2ad3f246-fee1-4e67-b886-69fd380bb150', 'buff', 3, ADDITION, [<equipmentslottype:head>]);
// <item:sanguinearsenal:sanguine_praetor_hood>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>, '2ad3f246-fee1-4e67-b886-69fd380bb150', 'buff', 2, ADDITION, [<equipmentslottype:head>]);
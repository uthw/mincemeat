onEvent("recipes", (event) => {
    let recipes = [
        [
            "cyclic:water_candle",
            [" A ", "CBC", "CDC"],
            {
                A: "#supplementaries:candle/wick",
                B: "minecraft:diamond_block",
                C: "blue_skies:aquite_gem",
                D: "#quark:candles",
            },
        ],
        [
            "cyclic:charm_xp_blocker",
            [" A ", "ABA", " C "],
            {
                A: "minecraft:iron_nugget",
                B: "atum:relic_dirty_ring",
                C: "cyclic:experience_food",
            },
        ],
        [
            "cyclic:soulstone",
            ["ABA", "BCB", "ABA"],
            {
                A: "betterendforge:amber_gem",
                B: "minecraft:totem_of_undying",
                C: "mod_lavacow:undyingheart",
            },
        ],
        [
            "cyclic:charm_starvation",
            ["ABC", "DEF", "GHI"],
            {
                A: "create:blaze_cake",
                B: "minecraft:enchanted_golden_apple",
                C: "farmersdelight:bacon_sandwich",
                D: "create:honeyed_apple",
                E: "minecraft:ghast_tear",
                F: "abnormals_delight:dune_platter",
                G: "byg:nightshade_berry_pie",
                H: "aquaculture:sushi",
                I: "simplefarming:turnip_beetroot_gratin",
            },
        ],
        [
            "cyclic:teleport_wand",
            ["  A", " B ", "C  "],
            {
                A: "grapplemod:launcheritem",
                B: "cyclic:ender_pearl_reuse",
                C: "enigmaticlegacy:ender_rod",
            },
        ],
        [
            "cyclic:lightning_scepter",
            ["  A", " B ", "C  "],
            {
                A: "#forge:gems/amethyst",
                B: "blue_skies:diopside_gem",
                C: "spartanweaponry:pole",
            },
        ],
        [
            "cyclic:ice_scepter",
            ["  A", " B ", "C  "],
            {
                A: "iceandfire:sapphire_gem",
                B: "blue_skies:aquite_gem",
                C: "spartanweaponry:pole",
            },
        ],
        [
            "cyclic:fire_scepter",
            ["  A", " B ", "C  "],
            {
                A: "mod_lavacow:moltenbeef",
                B: "blue_skies:pyrope_gem",
                C: "spartanweaponry:pole",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

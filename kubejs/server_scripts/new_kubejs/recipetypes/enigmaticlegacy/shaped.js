onEvent("recipes", (event) => {
    let recipes = [
        [
            "enigmaticlegacy:heaven_scroll",
            [" A ", "BCD", " E "],
            {
                A: "forbidden_arcanus:orb_of_temporary_flight",
                B: "cyclic:chorus_flight",
                C: "enigmaticlegacy:thicc_scroll",
                D: "meetyourfight:phantoplasm",
                E: "enigmaticlegacy:angel_blessing",
            },
        ],
        [
            "enigmaticlegacy:monster_charm",
            [" A ", "BCD", "   "],
            {
                A: "cyclic:charm_xp_speed",
                B: "thermal:xp_crystal",
                C: "#forge:heads",
                D: Item.of("minecraft:enchanted_book").enchant(
                    "minecraft:looting",
                    3
                ),
            },
        ],
        [
            "6x enigmaticlegacy:ender_rod",
            ["  A", "BCB", "A  "],
            {
                A: "#forge:rods/blaze",
                B: "enigmaticlegacy:astral_dust",
                C: "minecraft:ender_pearl",
            },
        ],
        [
            "enigmaticlegacy:cursed_stone",
            ["ABA", "CDC", "EFE"],
            {
                A: "minecraft:lava_bucket",
                B: "enigmaticlegacy:twisted_core",
                C: "enigmaticlegacy:evil_essence",
                D: "cfm:rock_path",
                E: "astralsorcery:rock_crystal",
                F: "iceandfire:fire_dragon_heart",
            },
        ],
        [
            "enigmaticlegacy:magnet_ring",
            [" A ", "BCD", " E "],
            {
                A: "#forge:ingots/nickel",
                B: "#forge:ingots/tin",
                C: "enigmaticlegacy:iron_ring",
                D: "#forge:ingots/zinc",
                E: "#forge:ingots/silver",
            },
        ],
        [
            "enigmaticlegacy:super_magnet_ring",
            [" A ", "BCD", " E "],
            {
                A: "minecraft:ender_eye",
                B: "betterendforge:thallasium_ingot",
                C: "enigmaticlegacy:magnet_ring",
                D: "betterendforge:terminite_ingot",
                E: "endergetic:booflo_hide",
            },
        ],
        [
            "enigmaticlegacy:infinimeal",
            ["ABC", "DEF", "GHI"],
            {
                A: "neapolitan:adzuki_beans",
                B: "blue_skies:winter_leaf_seeds",
                C: "blue_skies:fiery_bean_seeds",
                D: "atum:emmer_seeds",
                E: "enigmaticlegacy:earth_heart",
                F: "undergarden:gloomgourd_seeds",
                G: "infernalexp:glownuggets",
                H: "ars_nouveau:mana_bloom_crop",
                I: "minecraft:nether_wart",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

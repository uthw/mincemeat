onEvent("recipes", (event) => {
    let recipes = [
        [
            "ars_nouveau:archmage_spell_book",
            [
                "ars_nouveau:apprentice_spell_book",
                "#forge:ingots/terrasteel",
                "ars_nouveau:wilden_tribute",
                "2x enigmaticlegacy:etherium_ingot",
                "2x betterendforge:crystal_shards",
                "meetyourfight:fortunes_favor",
                "minecraft:totem_of_undying",
            ],
        ],
        [
            "ars_nouveau:apprentice_spell_book",
            [
                "ars_nouveau:novice_spell_book",
                "blue_skies:charoite",
                "enigmaticlegacy:earth_heart",
                "forbidden_arcanus:xpetrified_orb",
                "2x mod_lavacow:ectoplasm_ingot",
                "2x ars_nouveau:mana_fiber",
                "#forge:scales/sea_serpent",
            ],
        ],
        [
            "ars_nouveau:ritual_flight",
            [
                "ars_nouveau:purple_archwood_log",
                "3x ars_nouveau:wilden_wing",
                "2x undergarden:glowing_kelp",
                "forbidden_arcanus:arcane_crystal",
            ],
        ],
        [
            "ars_nouveau:mana_fiber",
            ["ars_nouveau:mana_bloom", "forbidden_arcanus:arcane_crystal"],
        ],
        [
            "ars_nouveau:mana_fiber",
            ["ars_nouveau:mana_bloom", "forbidden_arcanus:arcane_crystal"],
        ],
        [
            "ars_nouveau:novice_spell_book",
            ["minecraft:book", "4x eidolon:wicked_weave"],
        ],
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe[0], recipe[1]);
    });
});

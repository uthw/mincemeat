onEvent("recipes", (event) => {
    let recipes = [
        [
            "ars_nouveau:archmage_spell_book",
            [
                "ars_nouveau:apprentice_spell_book",
                "#forge:ingots/terrasteel",
                "ars_nouveau:wilden_tribute",
                "2x iceandfire:ectoplasm",
                "2x #forge:ingots/arcane_gold",
                "meetyourfight:fortunes_favor",
                "minecraft:totem_of_undying",
            ],
        ],
        [
            "ars_nouveau:apprentice_spell_book",
            [
                "ars_nouveau:novice_spell_book",
                "3x blue_skies:charoite",
                "2x #forge:ingots/silver",
                "2x paraglider:spirit_orb",
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
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe[0], recipe[1]);
    });
});

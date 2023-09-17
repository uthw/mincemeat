onEvent("recipes", (event) => {
    let infusionRecipes = [
        [
            // input
            // output
            // time
            // indexes as array, order is 0 2 4 6 1 3 5 7
            [
                "minecraft:iron_sword",
                "aquamirae:terrible_sword",
                240,
                [
                    "aquamirae:ship_graveyard_echo",
                    "aquaculture:neptunium_ingot",
                    "aquaculture:neptunium_ingot",
                    "aquaculture:neptunium_ingot",
                    "aquamirae:anglers_fang",
                    "aquamirae:anglers_fang",
                    "aquamirae:anglers_fang",
                    "aquamirae:anglers_fang",
                ],
            ],
            // TEMPORARILY DISABLED, TODO
            // [
            //     "wstweaks:lava_blade",
            //     "cataclysm:the_incinerator",
            //     240,
            //     [
            //         "ars_nouveau:blaze_fiber",
            //         "iceandfire:fire_dragon_blood",
            //         "ars_nouveau:blaze_fiber",
            //         "iceandfire:fire_dragon_blood",
            //         "cataclysm:ignitium_ingot",
            //         "cataclysm:ignitium_ingot",
            //         "cataclysm:ignitium_ingot",
            //         "cataclysm:ignitium_ingot",
            //     ],
            // ],
            [
                "eidolon:basic_amulet",
                "forbidden_arcanus:spectral_eye_amulet",
                100,
                [
                    "alexsmobs:void_worm_eye",
                    "iceandfire:ectoplasm",
                    "iceandfire:ectoplasm",
                    "iceandfire:ectoplasm",
                    "eidolon:pewter_blend",
                    "minecraft:ender_eye",
                    "eidolon:pewter_blend",
                    "minecraft:ender_eye",
                ],
            ],
            [
                "forbidden_arcanus:stellarite_piece",
                "forbidden_arcanus:eternal_stella",
                100,
                [
                    "enigmaticlegacy:mending_mixture",
                    "forbidden_arcanus:xpetrified_orb",
                    "forbidden_arcanus:xpetrified_orb",
                    "forbidden_arcanus:xpetrified_orb",
                    "botania:elementium_ingot",
                    "botania:elementium_ingot",
                    "botania:elementium_ingot",
                    "botania:elementium_ingot",
                ],
            ],
            [
                "forbidden_arcanus:draco_arcanus_helmet",
                "forbidden_arcanus:tyr_helmet",
                100,
                [
                    "forbidden_arcanus:golden_dragon_scale",
                    "forbidden_arcanus:silver_dragon_scale",
                    "forbidden_arcanus:silver_dragon_scale",
                    "forbidden_arcanus:silver_dragon_scale",
                    "forge:scales/dragon",
                    "forge:scales/dragon",
                    "forge:scales/dragon",
                    "forge:scales/dragon",
                ],
            ],
            [
                "forbidden_arcanus:draco_arcanus_chestplate",
                "forbidden_arcanus:tyr_chestplate",
                100,
                [
                    "forbidden_arcanus:golden_dragon_scale",
                    "forbidden_arcanus:aquatic_dragon_scale",
                    "forbidden_arcanus:aquatic_dragon_scale",
                    "forbidden_arcanus:aquatic_dragon_scale",
                    "forge:scales/dragon",
                    "forge:scales/dragon",
                    "forge:scales/dragon",
                    "forge:scales/dragon",
                ],
            ],
            [
                "forbidden_arcanus:draco_arcanus_leggings",
                "forbidden_arcanus:tyr_leggings",
                100,
                [
                    "forbidden_arcanus:golden_dragon_scale",
                    "forbidden_arcanus:silver_dragon_scale",
                    "forbidden_arcanus:silver_dragon_scale",
                    "forbidden_arcanus:silver_dragon_scale",
                    "forge:scales/dragon",
                    "forge:scales/dragon",
                    "forge:scales/dragon",
                    "forge:scales/dragon",
                ],
            ],
            [
                "forbidden_arcanus:draco_arcanus_boots",
                "forbidden_arcanus:tyr_boots",
                100,
                [
                    "forbidden_arcanus:golden_dragon_scale",
                    "forbidden_arcanus:aquatic_dragon_scale",
                    "forbidden_arcanus:aquatic_dragon_scale",
                    "forbidden_arcanus:aquatic_dragon_scale",
                    "forge:scales/dragon",
                    "forge:scales/dragon",
                    "forge:scales/dragon",
                    "forge:scales/dragon",
                ],
            ],
        ],
    ];
    infusionRecipes.forEach((recipe) => {
        let catalystArray = [];
        const indexKey = [0, 2, 4, 6, 1, 3, 5, 7];
        for (let i = 0; i < 8; i++) {
            if (typeof (recipe[3][i] !== "string")) {
                console.info(
                    "Not a string. i: " + i + ", recipe output: " + recipe[1]
                );
                continue;
            }

            if (recipe[3][i].includes("/")) {
                // a slash means it's a tag
                catalystArray.push({
                    tag: recipe[3][i],
                    index: indexKey[i],
                });
            } else {
                catalystArray.push({
                    item: recipe[3][i],
                    index: indexKey[i],
                });
            }
        }

        event.custom({
            type: "betterendforge:infusion",
            input: { item: recipe[0] },
            output: recipe[1],
            time: recipe[2],
            catalysts: [
                {
                    item: recipe[3][0],
                    index: 0,
                },
                {
                    item: recipe[3][1],
                    index: 2,
                },
                {
                    item: recipe[3][2],
                    index: 4,
                },
                {
                    item: recipe[3][3],
                    index: 6,
                },
                {
                    item: recipe[3][3],
                    index: 8,
                },
                {
                    item: recipe[3][5],
                    index: 1,
                },
                {
                    item: recipe[3][6],
                    index: 3,
                },
                {
                    item: recipe[3][7],
                    index: 5,
                },
                {
                    item: recipe[3][8],
                    index: 7,
                },
            ],
        });
    });
});

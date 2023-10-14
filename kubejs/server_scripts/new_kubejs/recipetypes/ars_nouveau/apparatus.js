// no # in tag items

onEvent("recipes", (event) => {
    let recipes = [
        {
            // inputs, reagent, output, source cost
            inputs: [
                // this is the best way i can think of for this
                { item: "minecraft:diamond" },
                { item: "minecraft:diamond" },
                { item: "minecraft:diamond" },
                { item: "ars_nouveau:mana_berry" },
                { item: "ars_nouveau:mana_berry" },
                { item: "blue_skies:pink_brewberry" },
                { item: "blue_skies:pink_brewberry" },
                { item: "blue_skies:pink_brewberry" },
            ],
            reagent: "ars_nouveau:ring_of_potential",
            output: "ars_nouveau:ring_of_lesser_discount",
            // sourceCost: 500,
        },
        {
            inputs: [
                { item: "forbidden_arcanus:ender_pearl_fragment" },
                { item: "forbidden_arcanus:ender_pearl_fragment" },
                { tag: "forge:ingots/enderium" },
                { tag: "forge:ingots/enderium" },
                { item: "mysticalagriculture:prudentium_essence" },
                { item: "mysticalagriculture:prudentium_essence" },
                { tag: "forge:dusts/mundabitur" },
                { tag: "forge:dusts/mundabitur" },
            ],
            reagent: "minecraft:ender_pearl",
            output: "cyclic:ender_pearl_reuse",
        },
        {
            inputs: [
                { item: "naturesaura:gold_leaf" },
                { tag: "forge:gems/mana" },
            ],
            reagent: "minecraft:stripped_oak_log",
            output: "naturesaura:wood_stand",
        },
        {
            inputs: [
                { tag: "botania:petals/yellow" },
                { tag: "botania:petals/yellow" },
                { tag: "botania:petals/yellow" },
                { tag: "botania:petals/yellow" },

                // { }
            ],
            reagent: "minecraft:grass",
            output: "naturesaura:gold_fiber",
        },
        {
            inputs: [
                { item: "naturesaura:infused_iron" },
                { item: "naturesaura:infused_iron" },
                { item: "naturesaura:infused_iron" },
                { tag: "forge:gems/mana" },
                { tag: "forge:gems/arcane_crystal" },
                { item: "naturesaura:gold_powder" },
            ],
            reagent: "supplementaries:pedestal",
            output: "naturesaura:offering_table",
        },
        {
            inputs: [
                { item: "eidolon:pewter_ingot" },
                { item: "cavesandcliffs:deepslate" },
                { item: "cavesandcliffs:deepslate" },
                { item: "cavesandcliffs:deepslate" },
                { item: "cavesandcliffs:deepslate" },
                { item: "astralsorcery:aquamarine" },
            ],
            output: "bloodmagic:blankrune",
            reagent: "bloodmagic:blankslate",
        },
        {
            inputs: [
                { item: "eidolon:polished_wood_pillar" },
                { item: "cavesandcliffs:deepslate" },
                { item: "cavesandcliffs:deepslate" },
                { item: "cavesandcliffs:deepslate" },
                { tag: "forge:ingots/arcane_gold" },
                { item: "ars_nouveau:potion_flask" },
            ],
            output: "bloodmagic:alchemytable",
            reagent: "bloodmagic:blankslate",
        },
        {
            inputs: [
                { item: "forbidden_arcanus:rune" },
                { item: "alexsmobs:cockroach_wing" },
            ],
            output: "enigmaticlegacy:recall_potion",
            reagent: Item.of(
                "naturesaura:aura_bottle",
                '{stored_type:"naturesaura:overworld"}'
            ),
        },
        {
            inputs: [
                { tag: "forge:gems/sapphire" },
                { item: "eidolon:gold_inlay" },
                { tag: "forge:ingots/arcane_gold" },
                { tag: "forge:ingots/arcane_gold" },
                { item: "aquamirae:pirate_pouch" },
            ],
            output: "enigmaticlegacy:mining_charm",
            reagent: "ars_nouveau:dull_trinket",
        },
        {
            inputs: [
                { item: "minecraft:heart_of_the_sea" },
                { item: "minecraft:sponge" },
                { item: "minecraft:sponge" },
                { item: "upgrade_aquatic:guardian_spine" },
            ],
            reagent: "alexsmobs:soul_heart",
            output: "enigmaticlegacy:mega_sponge",
        },
        {
            inputs: [
                { item: "paraglider:spirit_orb" },
                { item: "paraglider:spirit_orb" },
                { item: "forbidden_arcanus:arcane_crystal_dust" },
                { item: "forbidden_arcanus:arcane_crystal_dust" },
            ],
            reagent: "forbidden_arcanus:rune",
            output: "scalinghealth:enchanted_heart",
        },
        {
            inputs: [
                { item: "paraglider:spirit_orb" },
                { item: "paraglider:spirit_orb" },
                { tag: "forge:ectoplasms" },
                { tag: "forge:ectoplasms" },
            ],
            reagent: "forbidden_arcanus:dark_rune",
            output: "scalinghealth:cursed_heart",
        },
    ];

    recipes.forEach((recipe) => {
        var recipeBuilder = { type: "ars_nouveau:enchanting_apparatus" };

        // sorry
        if (recipe.inputs[0]) {
            recipeBuilder.item_1 = [recipe.inputs[0]];
        }
        if (recipe.inputs[1]) {
            recipeBuilder.item_2 = [recipe.inputs[1]];
        }
        if (recipe.inputs[2]) {
            recipeBuilder.item_3 = [recipe.inputs[2]];
        }
        if (recipe.inputs[3]) {
            recipeBuilder.item_4 = [recipe.inputs[3]];
        }
        if (recipe.inputs[4]) {
            recipeBuilder.item_5 = [recipe.inputs[4]];
        }
        if (recipe.inputs[5]) {
            recipeBuilder.item_6 = [recipe.inputs[5]];
        }
        if (recipe.inputs[6]) {
            recipeBuilder.item_7 = [recipe.inputs[6]];
        }
        if (recipe.inputs[7]) {
            recipeBuilder.item_8 = [recipe.inputs[7]];
        }

        recipeBuilder.reagent = recipe.reagent;
        recipeBuilder.output = recipe.output;
        if (recipe.sourceCost) recipeBuilder.sourceCost = recipe.sourceCost;

        event.custom(recipeBuilder);
    });
});

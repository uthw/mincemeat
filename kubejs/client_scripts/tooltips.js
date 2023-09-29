onEvent("item.tooltip", (event) => {
    console.info("Hello from Client tooltips.js!");
    // tooltip.add()
    // tooltip.add(["industrialforegoing:mob_imprisonment_tool"], "Disabled");

    let akashicTomeBooks = [
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"twilightforest:guide"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"storagenetwork:network_book"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"apotheosis:apoth_chronicle"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"cyclic:cyclic_guide_book"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"thermal:guidebook"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"industrialforegoing:industrial_foregoing"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"industrialforegoing:industrial_foregoing"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"bloodmagic:guide"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"naturesaura:book"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"pneumaticcraft:book"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"engineersdecor:engineersdecor_manual"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"modularrouters:book"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"littlelogistics:guide"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"advancedperipherals:manual"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"mysticalagriculture:guide"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"productivebees:guide"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"psi:encyclopaedia_psionica"}'
        ),
        "integrateddynamics:on_the_dynamics_of_integration",
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"supplementaries:supplementaries_guide"}'
        ),
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"supplementaries:supplementaries_guide"}'
        ),
        "eidolon:codex",
        "rftoolsbase:manual",
        "ars_nouveau:worn_notebook",
        "occultism:dictionary_of_spirits",
        "immersiveengineering:manual",
        "powah:book",
        "securitycraft:sc_manual",
        "agricraft:agri_journal",
        "botania:lexicon",
        "astralsorcery:tome",
        "ftbquests:book",
    ];

    let summonerBag = [
        "blue_skies:soulbound_spear",
        "blue_skies:ethereal_arc",
        "blue_skies:summoning_table",
    ];

    let alchemistBag = [
        "blue_skies:spike_shield",
        "blue_skies:ventium_ingot",
        "blue_skies:dusk_arc",
    ];

    let natureBag = [
        "blue_skies:nature_arc",
        "blue_skies:alchemy_table",
        "blue_skies:falsite_ingot",
    ];

    let poisonBag = ["blue_skies:poison_arc"];

    let noLongerNeedsEnergy = [
        "industrialforegoing:block_breaker",
        "industrialforegoing:block_placer",
        "industrialforegoing:fluid_collector",
    ];

    let powahDisabled = [
        "powah:furnator_starter",
        "powah:furnator_basic",
        "powah:furnator_hardened",
        "powah:furnator_blazing",
        "powah:furnator_niotic",
        "powah:furnator_spirited",
        "powah:furnator_nitro",
    ];

    event.addAdvanced(noLongerNeedsEnergy, (item, advanced, text) => {
        text.add(1, Text.of("Does not require power").gold());
    });

    event.addAdvanced(akashicTomeBooks, (item, advanced, text) => {
        text.add(1, Text.of("Included in the Akashic Tome").gold());
    });
});

onEvent("recipes", (event) => {
    event.shaped("tombstone:voodoo_poppet", [" A ", "BCB", " B "], {
        A: "minecraft:clay",
        B: "atum:linen_cloth",
        C: "minecraft:gold_ingot",
    });

    event.shapeless("tombstone:strange_scroll", [
        "enigmaticlegacy:thicc_scroll",
        "2x tombstone:grave_dust",
    ]);

    //   event.shapeless("tombstone:scroll_of_reach", ["tombstone:strange_scroll", "minecraft:compass"]);
    event.shapeless("tombstone:scroll_of_unstable_intangibility", [
        "tombstone:strange_scroll",
        "quark:root_item",
    ]);
    event.shapeless("tombstone:scroll_of_lightning_resistance", [
        "tombstone:strange_scroll",
        "#forge:ingots/copper",
    ]);
    //   event.shapeless("tombstone:scroll_of_aquatic_life", ["tombstone:strange_scroll", "quark:cave_root"]);
    //   event.shapeless("tombstone:scroll_of_mercy");
    //   event.shapeless("tombstone:scroll_of_true_sight");
    event.shapeless("tombstone:scroll_of_frost_resistance", [
        "tombstone:strange_scroll",
        "blue_skies:moonstone_shard",
    ]);
    event.shapeless("tombstone:scroll_of_preservation", [
        "tombstone:strange_scroll",
        "infernalexp:soul_salt_clump",
    ]);
    event.shapeless("tombstone:scroll_of_purification", [
        "tombstone:strange_scroll",
        "eidolon:enchanted_ash",
    ]);

    // event.shapeless("")
});

onEvent("recipes", (event) => {
  event.remove({ input: "tombstone:strange_tablet" });
  event.remove({ output: "tombstone:strange_tablet" });

  let toRemove = [
    "tombstone:strange_tablet",
    "tombstone:voodoo_poppet",
    "tombstone:strange_scroll",
    "tombstone:scroll_of_knowledge",
    "tombstone:scroll_of_unstable_intangibility",
    "tombstone:scroll_of_lightning_resistance",
    "tombstone:scroll_of_frost_resistance",
    "tombstone:scroll_of_preservation",
    "tombstone:scroll_of_purification",
  ];
  toRemove.forEach((item) => event.remove({ output: item }));

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
});

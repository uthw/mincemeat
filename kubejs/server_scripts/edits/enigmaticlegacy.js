onEvent("recipes", (event) => {
  let toRemove = [
    "enigmaticlegacy:xp_scroll",
    "enigmaticlegacy:escape_scroll", // Escape doesn't work with corail tombstone.
    "enigmaticlegacy:heaven_scroll",
    "enigmaticlegacy:fabulous_scroll",
    "enigmaticlegacy:etherium_boots",
    "enigmaticlegacy:etherium_leggings",
    "enigmaticlegacy:etherium_chestplate",
    "enigmaticlegacy:etherium_helmet",
    "enigmaticlegacy:ender_rod",
    "enigmaticlegacy:cursed_stone",
  ];
  toRemove.forEach((item) => event.remove({ output: item }));

  // event.remove({ output: "enigmaticlegacy:magnetic_ring" });
  // event.shaped("enigmaticlegacy:magnet_ring", [" A ", "BCD", " E "], {
  //   A: "minecraft:diamond",
  //   B: "#forge:ingots/iron",
  //   C: "iceandfire:silver_ingot",
  //   D: "eidolon:lead_ingot",
  //   E: "minecraft:gold_ingot",
  // });

  event.shaped("enigmaticlegacy:heaven_scroll", [" A ", "BCD", " E "], {
    A: "forestcraft:keeper_of_clouds",
    B: "cyclic:chorus_flight",
    C: "enigmaticlegacy:thicc_scroll",
    D: "meetyourfight:phantoplasm",
    E: "enigmaticlegacy:angel_blessing",
  });

  event.remove({ output: "enigmaticlegacy:monster_charm" });
  event.shaped("enigmaticlegacy:monster_charm", [" A ", "BCD", "   "], {
    A: "cyclic:charm_xp_speed",
    B: Item.of("xpbook:xp_tome", "{xp:3333}"),
    C: "#forge:heads",
    D: Item.of("minecraft:enchanted_book").enchant("minecraft:looting", 3),
  });

  event.shaped("6x enigmaticlegacy:ender_rod", ["  A", "BCB", "A  "], {
    A: "#forge:rods/blaze",
    B: "enigmaticlegacy:astral_dust",
    C: "minecraft:ender_pearl",
  });

  event.shapeless("4x enigmaticlegacy:astral_dust", [
    "minecraft:blaze_powder",
    "betterendforge:crystal_shards",
    "#forge:dusts/ender_pearl",
  ]);

  event.smithing(
    "enigmaticlegacy:etherium_helmet",
    "betterendforge:aeternium_helmet",
    "enigmaticlegacy:etherium_ingot"
  );
  event.smithing(
    "enigmaticlegacy:etherium_chestplate",
    "betterendforge:aeternium_chestplate",
    "enigmaticlegacy:etherium_ingot"
  );
  event.smithing(
    "enigmaticlegacy:etherium_leggings",
    "betterendforge:aeternium_leggings",
    "enigmaticlegacy:etherium_ingot"
  );
  event.smithing(
    "enigmaticlegacy:etherium_boots",
    "betterendforge:aeternium_boots",
    "enigmaticlegacy:etherium_ingot"
  );

  //     event.remove({output: 'enigmaticlegacy:angel_blessing'})
  //     event.shaped('enigmaticlegacy:angel_blessing', [
  //             'ABA',
  //             'C D',
  //             'AEA'
  //         ], {
  //             A: 'elenaidodge2:golden_feather',
  //             B: 'spartanweaponry:heavy_crossbow_diamond',
  //             C: 'ars_nouveau:wilden_wing',
  //             D: 'forestcraft:thunder_feather',
  //             E: 'forestcraft:sky_walkers'
  //         })

  event.shaped("enigmaticlegacy:cursed_stone", ["ABA", "CDC", "EFE"], {
    A: "minecraft:lava_bucket",
    B: "enigmaticlegacy:twisted_core",
    C: "enigmaticlegacy:evil_essence",
    E: "cfm:rock_path",
    E: "astralsorcery:rock_crystal",
    F: "iceandfire:fire_dragon_heart",
  });
});

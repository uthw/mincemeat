// priority: 200

onEvent("recipes", (event) => {
  let brickShape = ["AB", "BA"];
  let inputShape = ["AAA", "ABA", "AAA"];
  let coreShape = [" A ", "ABA", " A "];
  let order = ["fire", "ice", "lightning"];

  event.remove({ input: "minecraft:stone_bricks", mod: "iceandfire" });

  order.forEach((material) => {
    let bricks = `iceandfire:dragonforge_${material}_brick`;

    event.shaped(`8x ${bricks}`, brickShape, {
      A: `#forge:storage_blocks/${material}_dragon_scale`,
      B: "minecraft:stone_bricks",
    });

    event.remove({ input: bricks });
    event.shaped(`iceandfire:dragonforge_${material}_input`, inputShape, {
      A: "minecraft:iron_ingot",
      B: bricks,
    });
    event.shaped(
      `iceandfire:dragonforge_${material}_core_disabled`,
      coreShape,
      {
        A: bricks,
        B: `iceandfire:${material}_dragon_heart`,
      }
    );
  });

  let toRemove = [
    "iceandfire:dragon_flute",
    "iceandfire:dragon_horn",
    "iceandfire:tide_trident",
    "iceandfire:ghost_sword",
  ];
  toRemove.forEach((item) => event.remove({ output: item }));

  event.shaped("iceandfire:dragon_flute", ["  A", "ABA", "CA "], {
    A: "iceandfire:dragonbone",
    B: "supplementaries:flute",
    C: "minecraft:gold_ingot",
  });
  // event.shaped('iceandfire:hippogryph_sword', [
  //     ' A ',
  //     'BCB',
  //     ' D '
  // ], {
  //     A: 'iceandfire:hippogryph_talon',
  //     B: '#forge:feathers',
  //     C: 'iceandfire:silver_ingot',
  //     D: 'atum:linen_thread'
  // })

  event.shaped("iceandfire:tide_trident", ["ABC", "DED", " F "], {
    A: "upgrade_aquatic:thrasher_tooth",
    B: "iceandfire:sea_serpent_fang",
    C: "alexsmobs:bone_serpent_tooth",
    D: "#forge:scales/sea_serpent",
    E: "aquamirae:abyssal_amethyst",
    F: "iceandfire:dragonbone",
  });
  // event.shaped('iceandfire:dragon_horn', [

  // ])

  event.shaped("iceandfire:ghost_ingot", ["AAA", "ABA", "AAA"], {
    A: "iceandfire:ectoplasm",
    B: "enigmaticlegacy:etherium_ingot",
  });

  event.smithing(
    "iceandfire:ghost_sword",
    "betterendforge:aeternium_sword",
    "iceandfire:ghost_ingot"
  );
});

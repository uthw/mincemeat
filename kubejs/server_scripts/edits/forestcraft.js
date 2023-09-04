onEvent("recipes", (event) => {
  event.remove({ input: "forestcraft:niter" });
  event.remove({ input: "forestcraft:sulfur" });

  let toRemove = [
    "forestcraft:prismatic_diamond",
    "forestcraft:enderite_ingot",
    "forestcraft:cosmic_beacon",
    "forestcraft:spectralum",
    "forestcraft:electrite",
    "forestcraft:demon_food",
  ];
  toRemove.forEach((item) => event.remove({ output: item }));
  event.shapeless("16x forestcraft:sky_bullet", [
    "forestcraft:sky_fragment",
    "#forge:gunpowder",
  ]);

  event.shapeless("forestcraft:prismatic_diamond", [
    "minecraft:diamond",
    "forestcraft:jewel_wart",
    "blue_skies:aquite_gem",
    "ars_nouveau:mana_gem",
    "minecraft:emerald",
    "#atum:godshards",
  ]);

  event.shaped("4x forestcraft:cosmic_beacon", ["AAA", "BCB", "BBB"], {
    A: "forestcraft:sky_fragment",
    B: "betterendforge:terminite_ingot",
    C: "alexsmobs:capsid",
  });

  event.smithing(
    "forestcraft:keeper_of_clouds",
    "forestcraft:keeper_of_heaven",
    "iceandfire:hippogryph_sword"
  );

  event.shaped("forestcraft:spectralum", ["AAA", "ABA", "AAA"], {
    A: "iceandfire:ectoplasm",
    B: "minecraft:blaze_powder",
  });

  // Electrite is too grind heavy normally so now it's 1:1 instead of 1per 4 thunder feathers
  event.shaped("forestcraft:electrite", ["ABA", "BCB", "ABA"], {
    A: "minecraft:diamond",
    B: "#forge:ingots/copper",
    C: "forestcraft:thunder_feather",
  });

  // simple tweak to reduce grinding
  event.shaped("3x forestcraft:demon_food", ["AAA", "BCB", "DDD"], {
    A: "minecraft:nether_wart",
    B: "minecraft:bone",
    C: "alexsmobs:mosquito_larva",
    D: "iceandfire:ectoplasm",
  });

  event.replaceInput("forestcraft:soul_essence", "iceandfire:ectoplasm");
  event.replaceInput("forestcraft:aquamarine", "astralsorcery:aquamarine");
  event.replaceInput("forestcraft:sky_fragment", "astralsorcery:stardust");
  event.replaceOutput("forestcraft:aquamarine", "astralsorcery:aquamarine");
});

onEvent("recipes", (event) => {
  let toRemove = ["blue_skies:horizonite_forge"];
  toRemove.forEach((item) => event.remove({ output: item }));

  event.replaceInput(
    { mod: "bloodmagic" },
    "#forge:stone",
    "#supplementaries:deepslate"
  );

  event.replaceInput(
    { output: "bloodmagic:alchemytable" },
    "minecraft:gold_ingot",
    "forbidden_arcanus:arcane_crystal"
  );

  event.replaceInput(
    { mod: "bloodmagic" },
    "minecraft:lapis_lazuli",
    "forbidden_arcanus:arcane_crystal"
  );

  event.replaceInput(
    { mod: "bloodmagic" },
    "minecraft:lapis_lazuli_block",
    "forbidden_arcanus:arcane_crystal_block"
  );

  event.replaceInput(
    { output: "bloodmagic:soulgempetty" },
    "minecraft:redstone",
    "eidolon:soul_shard"
  );
  event.replaceInput(
    { output: "bloodmagic:weakbloodorb" },
    "minecraft:diamond",
    "blue_skies:charoite"
  );
  event.replaceInput(
    { output: "bloodmagic:apprenticebloodorb" },
    "minecraft:redstone_block",
    "minecraft:diamond"
  );
  event.replaceInput(
    { output: "bloodmagic:magicianbloodorb" },
    "minecraft:gold_block",
    "undergarden:forgotten_nugget"
  );
  event.replaceInput(
    { mod: "bloodmagic" },
    "minecraft:glowstone_dust",
    "forbidden_arcanus:arcane_crystal_dust"
  );
  //   event.replaceInput(
  //     { output: "bloodmagic:magicianbloodorb" },
  //     "minecraft:redstone_block",
  //     "undergarden:forgotten_nugget"
  //   );

  event.shaped("bloodmagic:soulforge", ["A A", "BCB", "BDB"], {
    A: "forbidden_arcanus:arcane_crystal",
    B: "#supplementaries:deepslate",
    C: "bloodmagic:blankslate",
    D: "eidolon:lesser_soul_gem",
  });
});

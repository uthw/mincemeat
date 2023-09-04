onEvent("recipes", (event) => {
  let toRemove = [
    "fluxnetworks:flux_core",
    "fluxnetworks:flux_block",
    "fluxnetworks:flux_configurator",
    "fluxnetworks:flux_controller",
  ];
  toRemove.forEach((item) => event.remove({ output: item }));

  // Tweaked so that it's accessible earlier in progression
  event.shaped("8x fluxnetworks:flux_core", ["ABA", "BCB", "ABA"], {
    A: "forbidden_arcanus:arcane_crystal",
    B: "minecraft:obsidian",
    C: "enigmaticlegacy:earth_heart",
  });

  event.shaped("fluxnetworks:flux_block", ["AB ", "BA ", "   "], {
    A: "fluxnetworks:flux_core",
    B: "forbidden_arcanus:arcane_crystal",
  });

  event.shaped("fluxnetworks:flux_configurator", [" AB", " CA", "C  "], {
    A: "forbidden_arcanus:arcane_crystal",
    B: "enigmaticlegacy:earth_heart",
    C: "minecraft:obsidian",
  });

  event.shaped("fluxnetworks:flux_controller", ["ABA", "C C", "BBB"], {
    A: "fluxnetworks:flux_block",
    B: "fluxnetworks:flux_core",
    C: "forbidden_arcanus:arcane_crystal",
  });
});

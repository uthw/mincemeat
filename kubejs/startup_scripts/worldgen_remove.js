onEvent("worldgen.remove", (event) => {
  event.removeOres((ores) => {
    ores.blocks = [
      // "darkerdepths:amber",
      // "darkerdepths:silver_ore",

      "scalinghealth:power_crystal_ore",
      "scalinghealth:heart_crystal_ore",

      "forestcraft:sulfur_ore",
      "forestcraft:niter_ore",
      "forestcraft:deep_rock",

      "wyrmroost:platinum_ore",
    ];
  });
});

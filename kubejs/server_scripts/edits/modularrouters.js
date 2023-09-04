onEvent("recipes", (event) => {
  let removeItems = ["modularrouters:energy_output_module"];
  removeItems.forEach((item) => event.remove({ output: item }));

  event.replaceInput(
    { mod: "modularrouters" },
    "minecraft:iron_ingot",
    "#forge:ingots/cloggrum"
  );
  event.replaceInput(
    { mod: "modularrouters" },
    "minecraft:iron_bars",
    "undergarden:cloggrum_bars"
  );
  event.replaceInput(
    { mod: "modularrouters" },
    "minecraft:gold_nugget",
    "undergarden:cloggrum_nugget"
  );

  event.replaceInput(
    { mod: "modularrouters" },
    "minecraft:quartz",
    "undergarden:regalium_ingot"
  );

  event.replaceInput(
    { mod: "modularrouters" },
    "minecraft:paper",
    "undergarden:twistytwig"
  );

  event.replaceInput(
    { mod: "modularrouters" },
    "minecraft:ender_pearl",
    "forbidden_arcanus:dark_matter"
  );

  event.remove({ output: "modularrouters:blank_module" });
  event.shaped("modularrouters:blank_module", [" A ", "BBB", "   "], {
    A: "enigmaticlegacy:thicc_scroll",
    B: "undergarden:cloggrum_nugget",
  });

  event.shaped("modularrouters:energy_output_module", [" A ", "BCB", "  D"], {
    A: "immersiveengineering:wirecoil_copper",
    B: "cavesandcliffs:lightning_rod",
    C: "modularrouters:blank_module",
    D: "thermal:rf_coil",
  });
});

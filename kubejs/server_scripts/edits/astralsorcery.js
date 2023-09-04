onEvent("recipes", (event) => {
  let toRemove = ["astralsorcery:wand"];
  toRemove.forEach((item) => event.remove({ output: item }));

  event.shaped("astralsorcery:wand", [" AB", " CA", "C  "], {
    A: "#forge:gems/aquamarine",
    B: "forbidden_arcanus:arcane_crystal",
    C: "astralsorcery:marble_raw",
  });

  event.recipes.create.milling(
    "astralsorcery:stardust",
    "astralsorcery:starmetal_ingot"
  );
  event.recipes.immersiveengineeringCrusher(
    "astralsorcery:stardust",
    "astralsorcery:starmetal_ingot"
  );
  event.recipes.thermal.pulverizer(
    "astralsorcery:stardust",
    "astralsorcery:starmetal_ingot"
  );
});

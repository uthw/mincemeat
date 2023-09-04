onEvent("recipes", (event) => {
  let toRemove = ["darkutils:charm_portal", "darkutils:flat_tile"];
  toRemove.forEach((item) => {
    event.remove({ output: item });
  });

  event.shaped("darkutils:charm_portal", ["AAA", "BCB", " D "], {
    A: "#forge:string",
    B: "forbidden_arcanus:darkstone",
    C: "atum:scarab",
    D: "#forge:obsidian",
  });

  event.shaped("4x darkutils:blank_plate", ["AA ", "   ", "   "], {
    A: "forbidden_arcanus:darkstone",
  });

  event.replaceInput(
    { output: "darkutils:charm_experience" },
    "minecraft:emerald",
    "forbidden_arcanus:xpetrified_orb"
  );
  event.replaceInput(
    { output: "darkutils:charm_experience" },
    "minecraft:xp_bottle",
    "enigmaticlegacy:tattered_tome"
  );
});

onEvent("recipes", (event) => {
  event.remove({ output: "capsule:capsulemarker" });
  event.replaceInput(
    { mod: "capsule" },
    "minecraft:ender_pearl",
    "paraglider:spirit_orb"
  );

  event.shaped("capsule:capsulemarker", ["ABA", "ACA", "ADA"], {
    A: "minecraft:cobblestone",
    B: "#forge:glass_panes/colorless",
    C: "cavesandcliffs:spyglass",
    D: "minecraft:repeater",
  });
});

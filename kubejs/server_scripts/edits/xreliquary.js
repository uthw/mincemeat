onEvent("recipes", (event) => {
  let toRemove = ["xreliquary:angelheart_vial", "xreliquary:phoenix_down"];
  toRemove.forEach((item) => event.remove({ output: item }));

  event.replaceInput("xreliquary:zombie_heart", "eidolon:zombie_heart");

  // lead makes sense
  event.replaceInput({output: "xreliquary:bullets/neutral_bullet"}, "minecraft:gold_nugget", "#forge:nuggets/lead")
});

onEvent("recipes", (event) => {
  event.replaceInput(
    { output: "powah:dielectric_paste" },
    "minecraft:clay_ball",
    "architects_palette:algal_blend"
  );
  event.replaceInput(
    { output: "powah:dielectric_paste" },
    "#forge:coal",
    "#forge:silicon"
  );
});

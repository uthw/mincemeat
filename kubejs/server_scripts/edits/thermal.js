// onEvent('recipes', event => {
//     let inputs = [
//         "thermal:diamond_dust",
//         "thermal:emerald_dust"
//     ]
// })

// must use IE alloyer in early game
onEvent("recipes", (event) => {
  let toRemove = ["thermal:machine_smelter"];
  toRemove.forEach((item) => event.remove({ output: item }));

  event.replaceInput(
    { output: "thermal:machine_frame" },
    "minecraft:iron_ingot",
    "#forge:plates/iron"
  );
});

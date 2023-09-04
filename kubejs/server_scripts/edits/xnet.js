onEvent("recipes", (event) => {
  let toRemove = ["xnet:controller"];
  toRemove.forEach((item) => event.remove({ output: item }));

  event.shaped("xnet:controller", ["ABA", "CDC", "EFE"], {
    A: "minecraft:repeater",
    B: "minecraft:comparator",
    C: "#forge:dusts/redstone",
    D: "thermal:machine_frame",
    E: "#forge:ingots/copper",
    F: "#forge:ingots/gold",
  });

  // simplicity sake
  event.replaceInput("xnet:machine_frame", "thermal:machine_frame");

  // make it easier for player
  let colors = ["red", "green", "blue", "yellow", "routing"];
  colors.forEach((item) => {
    event.remove({ output: `xnet:advanced_connector_${item}` });
    event.replaceOutput(
      `xnet:connector_${item}`,
      `xnet:advanced_connector_${item}`
    );

    event.replaceInput(
      `xnet:connector_${item}`,
      `xnet:advanced_connector_${item}`
    );
  });
});

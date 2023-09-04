// priority: 500

onEvent("recipes", (event) => {
  let args = [
    { old: "immersiveengineering:slag", new: "#forge:slag" },
    { old: "ars_nouveau:mana_gem", new: "#forge:gems/mana" },
    { old: "mod_lavacow:ectoplasm", new: "#forge:ectoplasms" },
    { old: "minecraft:crafting_table", new: "#forge:workbench"}
  ];

  args.forEach((arg) => {
    event.replaceInput(arg.old, arg.new)
  })
});

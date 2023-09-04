onEvent("recipes", (event) => {
  let toRemove = ["industrialforegoing:machine_frame_pity"];
  toRemove.forEach((item) => event.remove({ output: item }));

  event.shaped(
    "industrialforegoing:machine_frame_pity",
    ["ABA", "BCB", "ABA"],
    {
      A: "#forge:logs",
      B: "#blue_skies:ingots/horizonite",
      C: "#forge:gears/invar",
    }
  );

  let replacements = [
    [
      { output: "industrialforegoing:machine_frame_simple" },
      "minecraft:nether_brick",
      "blue_skies:diopside_gem",
    ],
    [
      { output: "industrialforegoing:machine_frame_simple" },
      "minecraft:iron_ingot",
      "#forge:ingots/osmium",
    ],
    [
      { mod: "industrialforegoing" },
      "minecraft:lapis_lazuli",
      "ars_nouveau:mana_gem",
    ],
    [
      { output: "industrialforegoing:fluid_transporter_type" },
      "minecraft:ender_pearl",
      "immersivenegineering:fluid_pump",
    ],
    [
        { output: "industrialforegoing:item_transporter_type"},
        "minecraft:ender_pearl",
        "industrialforegoing:conveyor"
    ],
    [
        { output: "industrialforegoing:machine_frame_advanced"},
        "minecraft:gold_ingot",
        "blue_skies:charoite"
    ],
    [
        { output: "industrialforegoing:machine_frame_advanced"},
        "minecraft:netherite_scrap",
        "atum:nebu_ingot"
    ],
    [
        { output: "industrialforegoing:machine_frame_supreme"},
        "minecraft:diamond",
        "undergarden:cloggrum_ingot"
    ],
    [
        { mod: "industrialforegoing"},
        "#forge:gears/iron",
        "#forge:gears/silver"
    ],
    [
        { mod: "industrialforegoing"},
        "#forge:gears/iron",
        "#forge:gears/lumium"
    ],
    [
        { output: "industrialforegoing:material_stonework_factory"},
        "minecraft:diamond_pickaxe",
        "undergarden:cloggrum_pickaxe"
    ]
  ];
  replacements.forEach((item) => event.replaceInput(item[0], item[1], item[2]));
});

onEvent("recipes", (event) => {
  let removeItems = [
    "cataclysm:bulwark_of_the_flame",
    "cataclysm:the_incinerator",
  ];
  removeItems.forEach((item) => event.remove({ output: item }));

  event.shaped("cataclysm:bulwark_of_the_flame", ["ABA", "CDC", "ABA"], {
    A: "forestcraft:netherite_scrap_plate",
    B: "cataclysm:ignitium_ingot",
    C: "iceandfire:fire_dragon_blood",
    D: "minecraft:shield",
  });

  // TODO make the infusion recipe for this item
  // event.smithing(
  //   "cataclysm:the_incinerator",
  //   "minecraft:netherite_sword",
  //   "cataclysm:ignitium_ingot"
  // );

  event.custom({
    type: "betterendforge:infusion",
    input: {
      item: "wstweaks:lava_blade",
    },
    output: "cataclysm:the_incinerator",
    time: 240,
    catalysts: [
      {
        item: "ars_nouveau:blaze_fiber",
        index: 0,
      },
      {
        item: "iceandfire:fire_dragon_blood",
        index: 2,
      },
      {
        item: "ars_nouveau:blaze_fiber",
        index: 4,
      },
      {
        item: "iceandfire:fire_dragon_blood",
        index: 6,
      },
      {
        item: "cataclysm:ignitium_ingot",
        index: 1,
      },
      {
        item: "cataclysm:ignitium_ingot",
        index: 3,
      },
      {
        item: "cataclysm:ignitium_ingot",
        index: 5,
      },
      {
        item: "cataclysm:ignitium_ingot",
        index: 7,
      },
    ],
  });
});

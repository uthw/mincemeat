onEvent("recipes", (event) => {
  let toRemove = [
    "aquamirae:divider",
    "aquamirae:whisper_of_the_abyss",
    "aquamirae:terrible_sword",
  ];
  toRemove.forEach((item) => event.remove({ output: item }));

  event.custom({
    type: "betterendforge:infusion",
    input: {
      item: "minecraft:iron_sword",
    },
    output: "aquamirae:terrible_sword",
    time: 240,
    catalysts: [
      {
        item: "aquamirae:ship_graveyard_echo",
        index: 0,
      },
      {
        item: "aquaculture:neptunium_ingot",
        index: 2,
      },
      {
        item: "aquaculture:neptunium_ingot",
        index: 4,
      },
      {
        item: "aquaculture:neptunium_ingot",
        index: 6,
      },
      {
        item: "aquamirae:anglers_fang",
        index: 1,
      },
      {
        item: "aquamirae:anglers_fang",
        index: 3,
      },
      {
        item: "aquamirae:anglers_fang",
        index: 5,
      },
      {
        item: "aquamirae:anglers_fang",
        index: 7,
      },
    ],
  });

  event.replaceInput(
    { mod: "aquamirae" },
    "minecraft:diamond",
    "aquaculture:neptunium_ingot"
  );
});

// onEvent('item.tooltip', event => {
//     tooltip.add('aquamirae:divider', 'Disabled due to being OP.')
// })

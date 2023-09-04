onEvent("recipes", (event) => {
  let removeItems = [
    "cataclysm:bulwark_of_the_flame",
    // "#quark:candles",
    Item.of("minecraft:potion", '{Potion:"quark:resistance"}'),
    Item.of("minecraft:splash_potion", '{Potion:"quark:resistance"}'),
    Item.of("minecraft:lingering_potion", '{Potion:"quark:resistance"}'),
  ];
  removeItems.forEach((item) => event.remove({ output: item }));
});

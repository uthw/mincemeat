onEvent("recipes", (event) => {
  event.remove({ output: "#cavesandcliffs:candles" });
  event.replaceInput("cavesandcliffs:amethyst_shard", "#forge:gems/amethyst");
});

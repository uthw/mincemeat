onEvent("recipes", (event) => {
  //   event.replaceInput("betterendforge:ender_block", "charm:ender_pearl_block");

  event.remove({ output: "betterendforge:ender_block" });

  // removes all enchanted book recipes on the infusion table (Ars nouveau does this already)
  event.remove({
    output: "minecraft:enchanted_book",
    type: "betterendforge:infusion",
  });
});

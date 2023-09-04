// from a github repo,. dont know if it does anything important
onEvent("block.modification", (event) => {
  event.modify("refinedstorage:cable", (block) => {
    block.material = "iron";
  });

  
});

onEvent("recipes", event => {
  event.replaceInput({mod:"refinedstorage"}, "refinedstorage:quartz_enriched_iron", "#forge:ingots/aluminum")
})
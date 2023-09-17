onEvent("item.tooltip", (event) => {
  // tooltip.add()
  // tooltip.add(["industrialforegoing:mob_imprisonment_tool"], "Disabled");

  let akashicTomeBooks = [
    ""
  ]

  let summonerBag = [
    "blue_skies:soulbound_spear",
    "blue_skies:ethereal_arc",
    "blue_skies:summoning_table",
  ]

  let alchemistBag = [
    "blue_skies:spike_shield",
    "blue_skies:ventium_ingot",
    "blue_skies:dusk_arc"
  ]

  let natureBag = [
    "blue_skies:nature_arc",
    "blue_skies:alchemy_table",
    "blue_skies:falsite_ingot"
  ]

  let poisonBag = [
    "blue_skies:poison_arc",
  ]

  let noLongerNeedsEnergy = [
    "industrialforegoing:block_breaker",
    "industrialforegoing:block_placer",
    "industrialforegoing:fluid_collector"
  ]

  let powahDisabled = ["powah:furnator_starter", "powah:furnator_basic", "powah:furnator_hardened", "powah:furnator_blazing", "powah:furnator_niotic", "powah:furnator_spirited", "powah:furnator_nitro"]

  tooltip.addAdvanced(noLongerNeedsEnergy, (item, advanced, text) => {
    text.add(0, Text.of("Does not require power").gold())
  })
});

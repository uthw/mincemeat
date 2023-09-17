onEvent("recipes", (event) => {
    let removeItems = [
        "apotheosis:seashelf",
        "apotheosis:hellshelf",
        "apotheosis:sightshelf_t2",
    ];
    removeItems.forEach((item) => event.remove({ output: item }));

    // event.remove({ output: "apotheosis:seashelf" });

    // event.shaped("5x apotheosis:seashelf", ["ABA", "CDE", "ABA"], {
    //   A: "minecraft:prismarine_bricks",
    //   B: "#forge:scales/sea_serpent",
    //   C: "aquaculture:neptunium_ingot",
    //   D: "#forge:bookshelves",
    //   E: "#minecraft:fishes",
    // });

    // event.shaped("5x apotheosis:hellshelf", ["ABA", "CDE", "ABA"], {
    //   A: "minecraft:nether_bricks",
    //   B: "iceandfire:witherbone",
    //   C: "minecraft:blaze_rod",
    //   D: "#forge:bookshelves",
    //   E: "scalinghealth:heart_crystal",
    // });

    event.shaped("apotheosis:sightshelf_t2", ["ABA", "CDC", "ABA"], {
        A: "iceandfire:ectoplasm",
        B: "minecraft:netherite_ingot",
        C: "minecraft:ender_eye",
        D: "apotheosis:sightshelf",
    });
});

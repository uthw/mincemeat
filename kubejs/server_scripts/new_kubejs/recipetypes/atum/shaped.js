onEvent("recipes", (event) => {
    event.smelting("atum:nebu_ingot", "atum:nebu_ore");
    event.blasting("atum:nebu_ingot", "atum:nebu_ore");

    let recipes = [
        [
            "atum:scarab",
            [" A ", "BCB", " B "],
            {
                A: "minecraft:diamond",
                B: "minecraft:gold_ingot",
                C: "blue_skies:aquite_gem",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

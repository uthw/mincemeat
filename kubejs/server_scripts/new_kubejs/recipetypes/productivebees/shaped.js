onEvent("recipes", (event) => {
    onEvent("recipes", (event) => {
        let recipes = [
            [
                Item.of(
                    "productivebees:nest_locator",
                    '{productivebees_locator_nest:{nestName:"Bee Nest",nest:"minecraft:bee_nest"}}'
                ),
                ["A A", " B ", " C "],
                {
                    A: "#forge:rods/gold",
                    B: "minecraft:compass",
                    C: "enigmaticlegacy:gem_ring",
                },
            ],
        ];

        recipes.forEach((recipe) => {
            event.shaped(recipe[0], recipe[1], recipe[2]);
        });
    });
});

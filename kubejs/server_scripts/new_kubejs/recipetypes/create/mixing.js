onEvent("recipes", (event) => {
    let recipes = [
        [
            "3x eidolon:pewter_blend",
            ["#forge:ingots/copper", "#forge:ingots/tin", "#forge:ingots/iron"],
        ],
    ];

    recipes.forEach((recipe) => {
        let re = event.recipes.create.mixing(recipe[0], recipe[1]);

        if (recipe.length == 3) {
            re.heated();
        } else if (recipe.length == 4) {
            re.superheated();
        } else {
            event.recipes.create.mixing(recipe[0], recipe[1]);
        }
    });
});

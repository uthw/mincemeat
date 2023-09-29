// Mechanical press, basin, blaze burner?

onEvent("recipes", (event) => {
    let recipes = [
        {
            output: "modularrouters:blank_module",
            input: "enigmaticlegacy:thicc_scroll"
        }
    ];

    recipes.forEach((recipe) => {
        let re = event.recipes.create.mixing(recipe.output, recipe.input);

        if (re.heated) {
            re.heated();
        } else if (re.superheated) {
            re.superheated();
        }
    });
});

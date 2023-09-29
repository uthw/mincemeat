onEvent("recipes", (event) => {
    let recipes = [
        {
            output: "refinedstorage:basic_processor",
            input: "refinedstorage:raw_basic_processor",
            mold: "thermal:press_coin_die",
        },
        {
            output: "refinedstorage:improved_processor",
            input: "refinedstorage:raw_improved_processor",
            mold: "thermal:press_coin_die",
        },
        {
            output: "refinedstorage:advanced_processor",
            input: "refinedstorage:raw_advanced_processor",
            mold: "thermal:press_coin_die",
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineeringMetalPress(
            recipe.output,
            recipe.input,
            recipe.mold
        );
    });
});

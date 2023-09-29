onEvent("recipes", (event) => {
    let recipes = [
        [
            "modularrouters:blank_module",
            [" A ", "BBB", "   "],
            {
                A: "enigmaticlegacy:thicc_scroll",
                B: "undergarden:cloggrum_nugget",
            },
        ],
        // [
        //     "modularrouters:energy_output_module",
        //     [" A ", "BCB", "  D"],
        //     {
        //         A: "immersiveengineering:wirecoil_copper",
        //         B: "cavesandcliffs:lightning_rod",
        //         C: "modularrouters:blank_module",
        //         D: "thermal:rf_coil",
        //     },
        // ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

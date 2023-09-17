onEvent("recipes", (event) => {
    let recipes = [
        [
            "sophisticatedbackpacks:pickup_upgrade",
            [" A ", "BCB", "DED"],
            {
                A: "alexsmobs:bear_fur",
                B: "#forge:string",
                C: "sophisticatedbackpacks:upgrade_base",
                D: "#forge:gems/cinnabar",
                E: "minecraft:redstone",
            },
        ],
        [
            "sophisticatedbackpacks:filter_upgrade",
            ["ABA", "CDC", "AEA"],
            {
                A: "#forge:gems/cinnabar",
                B: "create:filter",
                C: "#forge:string",
                D: "sophisticatedbackpacks:upgrade_base",
                E: "cfm:spatula",
            },
        ],
        [
            "sophisticatedbackpacks:xp_pump_upgrade",
            ["ABA", "BCB", "ADA"],
            {
                A: "#forge:gems/cinnabar",
                B: "forbidden_arcanus:xpetrified_orb",
                C: "sophisticatedbackpacks:upgrade_base",
                D: "ars_nouveau:experience_gem",
            },
        ],
        [
            "sophisticatedbackpacks:pump_upgrade",
            ["ABA", "BCB", "ADA"],
            {
                A: "immersiveengineering:fluid_pipe",
                B: "immersiveengineering:fluid_pump",
                C: "sophisticatedbackpacks:upgrade_base",
                D: "supplementaries:jar",
            },
        ],
        [
            "sophisticatedbackpacks:battery_upgrade",
            ["ABA", "BCB", "ABA"],
            {
                A: "immersiveengineering:wirecoil_copper",
                B: "thermal:rf_potato",
                C: "sophisticatedbackpacks:upgrade_base",
            },
        ],
        [
            "sophisticatedbackpacks:inception_upgrade",
            ["ABA", "CDC", "ACA"],
            {
                A: "#forge:ingots/nebu",
                B: "meetyourfight:phantoplasm",
                C: "#forge:gems/amethyst",
                D: "sophisticatedbackpacks:upgrade_base",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});

onEvent("recipes", (event) => {
    let toRemove = [
        { output: "atum:nebu_drop", type: "smelting", type: "blasting" },
        { output: "create:white_sail", input: "#minecraft:wool" },
        {
            output: "ars_nouveau:novice_spell_book",
            input: "minecraft:iron_sword",
        },
    ];

    toRemove.forEach((item) => event.remove(item));
});

onEvent("recipes", (event) => {
    let toRemove = [
        { output: "atum:nebu_drop", type: "smelting", type: "blasting" },
        { output: "create:white_sail", input: "#minecraft:wool" },
    ];

    toRemove.forEach((item) => event.remove(item));
});

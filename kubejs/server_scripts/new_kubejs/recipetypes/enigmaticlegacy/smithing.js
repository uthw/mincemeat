onEvent("recipes", (event) => {
    let changes = [
        [
            "enigmaticlegacy:etherium_helmet",
            "betterendforge:aeternium_helmet",
            "enigmaticlegacy:etherium_ingot",
        ],
        [
            "enigmaticlegacy:etherium_chestplate",
            "betterendforge:aeternium_chestplate",
            "enigmaticlegacy:etherium_ingot",
        ],
        [
            "enigmaticlegacy:etherium_leggings",
            "betterendforge:aeternium_leggings",
            "enigmaticlegacy:etherium_ingot",
        ],
        [
            "enigmaticlegacy:etherium_boots",
            "betterendforge:aeternium_boots",
            "enigmaticlegacy:etherium_ingot",
        ],
    ];

    changes.forEach((change) => {
        event.smithing(change[0], change[1], change[2]);
    });
});

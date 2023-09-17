onEvent("recipes", (event) => {
    let changes = [
        [
            "iceandfire:ghost_sword",
            "betterendforge:aeternium_sword",
            "iceandfire:ghost_ingot",
        ],
    ];

    changes.forEach((change) => {
        event.smithing(change[0], change[1], change[2]);
    });
});

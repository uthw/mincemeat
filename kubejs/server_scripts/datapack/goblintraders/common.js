onEvent("server.datapack.low_priority", (event) => {
    let trades = {
        replace: false,
        trades: [
            {
                type: "goblintraders:basic",
                offer_item: {
                    item: "minecraft:emerald",
                    count: 1,
                },
                payment_item: {
                    item: "minecraft:apple",
                    count: 1,
                },
                price_multiplier: 0.0,
                max_trades: 24,
                experience: 4,
            },
            {
                type: "goblintraders:basic",
                offer_item: {
                    item: "minecraft:iron_ingot",
                    count: 2,
                },
                payment_item: {
                    item: "minecraft:iron_ore",
                    count: 1,
                },
                price_multiplier: 0.0,
                max_trades: 30,
                experience: 6,
            },
            {
                type: "goblintraders:basic",
                offer_item: {
                    item: "minecraft:gold_ingot",
                    count: 3,
                },
                payment_item: {
                    item: "minecraft:gold_ore",
                    count: 2,
                },
                price_multiplier: 0.0,
                max_trades: 30,
                experience: 6,
            },
            {
                type: "goblintraders:basic",
                offer_item: {
                    item: "minecraft:coal",
                    count: 1,
                },
                payment_item: {
                    item: "minecraft:rotten_flesh",
                    count: 4,
                },
                price_multiplier: 0.0,
                max_trades: 24,
                experience: 4,
            },
            {
                type: "goblintraders:basic",
                offer_item: {
                    item: "minecraft:flint",
                    count: 2,
                },
                payment_item: {
                    item: "minecraft:gravel",
                    count: 1,
                },
                price_multiplier: 0.0,
                max_trades: 32,
                experience: 4,
            },
            {
                type: "goblintraders:basic",
                offer_item: {
                    item: "minecraft:emerald",
                    count: 1,
                },
                payment_item: {
                    item: "minecraft:cobblestone",
                    count: 32,
                },
                price_multiplier: 0.0,
                max_trades: 128,
                experience: 4,
            },
            {
                type: "goblintraders:basic",
                payment_item: {
                    item: "immersiveengineering:ore_aluminum",
                    count: 2,
                },
                offer_item: {
                    item: "immersiveengineering:ingot_aluminum",
                    count: 3,
                },
                price_multipliter: 0.0,
                max_trades: 30,
                experience: 4,
            },
            {
                type: "goblintraders:basic",
                payment_item: {
                    item: "thermal:tin_ore",
                    count: 1,
                },
                offer_item: {
                    item: "thermal:tin_ingot",
                    count: 2,
                },
                price_multipliter: 0.0,
                max_trades: 30,
                experience: 4,
            },

            {
                type: "goblintraders:basic",
                payment_item: {
                    item: "immersiveengineering:ore_lead",
                    count: 1,
                },
                offer_item: {
                    item: "immersiveengineering:ingot_lead",
                    count: 2,
                },
                price_multipliter: 0.0,
                max_trades: 30,
                experience: 4,
            },
            {
                type: "goblintraders:basic",
                payment_item: {
                    item: "create:copper_ore",
                    count: 4,
                },
                offer_item: {
                    item: "create:copper_ingot",
                    count: 9,
                },
                price_multipliter: 0.0,
                max_trades: 30,
                experience: 4,
            },
            {
                type: "goblintraders:basic",
                payment_item: {
                    item: "create:zinc_ore",
                    count: 1,
                },
                offer_item: {
                    item: "create:zinc_ingot",
                    count: 2,
                },
                price_multipliter: 0.0,
                max_trades: 30,
                experience: 4,
            },
        ],
    };
});

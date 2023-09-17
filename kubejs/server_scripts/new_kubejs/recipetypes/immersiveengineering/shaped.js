// priority: 1000
onEvent("recipes", (event) => {
    event.remove({
        output: "#forge:dusts",
        input: "immersiveengineering:hammer",
    });
});

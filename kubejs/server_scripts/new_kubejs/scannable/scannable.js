onEvent("recipes", (event) => {
    event.remove({ output: "scannable:scanner" });
    event.shaped("scannable:scanner", ["A A", "BCB", "DED"], {
        A: "#forge:rods/copper",
        B: "#forge:plates/iron",
        C: "immersiveengineering:circuit_board",
        D: "#forge:ingots/aluminum",
        E: "thermal:rf_potato",
    });

    event.remove({ output: "scannable:module_blank" });
    event.shaped("scannable:module_blank", ["AAA", "BCB", "BBB"], {
        A: "immersiveengineering:hemp_fiber",
        B: "#forge:ingots/aluminum",
        C: "prettypipes:blank_module",
    });
});

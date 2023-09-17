// priority: 1

onEvent("recipes", (event) => {
    event.remove({ id: "wstweaks:lava_blade" });

    event.shaped("wstweaks:lava_blade", [" B ", "ACA", " B "], {
        A: "minecraft:lava_bucket",
        B: "enigmaticlegacy:astral_dust",
        C: "mod_lavacow:mootenheart",
    });
});

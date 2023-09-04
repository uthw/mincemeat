// Mahou tsukai is no longer part of the modpack. Even with heavily nerfed spells, I felt like it was too op and grind heavy to suit my tastes.

// onEvent("recipes", (event) => {
//   // Lol idk how to use kubejs thermal/create so prepare to look at a ton of json

//   let inputs = [
//     "minecraft:diamond",
//     "minecraft:emerald",
//     "minecraft:ender_pearl",
//     "minecraft:ender_eye",
//     "minecraft:gold_ingot",
//     "minecraft:iron_ingot",
//     "minecraft:quartz",
//   ];
//   let oldOutputs = [
//     "thermal:diamond_dust",
//     "thermal:emerald_dust",
//     "thermal:ender_pearl_dust",
//     "mahoutsukai:powdered_eye",
//     "thermal:gold_dust",
//     "thermal:iron_dust",
//     "thermal:quartz_dust",
//   ];

//   // I vastly prefer the Thermal textures for dust/powder, may make a resource pack that replaces the mahou ones
//   let newOutputs = [
//     "mahoutsukai:powdered_diamond",
//     "mahoutsukai:powdered_emerald",
//     "mahoutsukai:powdered_ender",
//     "mahoutsukai:powdered_eye",
//     "mahoutsukai:powdered_gold",
//     "mahoutsukai:powdered_iron",
//     "mahoutsukai:powdered_quartz",
//   ];

//   // remove old method
//   let tools = ["mahoutsukai:mortar_and_pestle", "mahoutsukai:hammer"];

//   tools.forEach((tool) => {
//     event.remove({ input: tool });
//     event.remove({ output: tool });
//   });

//   for (let i = 0; i < oldOutputs.length; i++) {
//     // Create Millstone
//     event.custom({
//       type: "create:milling",
//       ingredients: [
//         {
//           item: inputs[i],
//         },
//       ],
//       results: [
//         {
//           item: newOutputs[i],
//           count: 2,
//         },
//       ],
//       processingTime: 60,
//     });

//     // The really big wheels from create
//     // event.custom({
//     //   type: "create:crushing",
//     //   ingredients: [
//     //     {
//     //       item: inputs[i],
//     //     },
//     //   ],
//     //   results: [
//     //     {
//     //       item: "minecraft:diamond",
//     //       count: 3,
//     //     },
//     //   ],
//     //   processingTime: 120,
//     // });

//     // Pulverizer
//     event.custom({
//       type: "thermal:pulverizer",
//       ingredient: {
//         item: inputs[i],
//       },
//       result: [
//         {
//           item: newOutputs[i],
//         },
//       ],
//       experience: 0.6,
//     });

//     // replace thermal items with mahou
//     // event.replaceInput(oldOutputs[i], newOutputs[i]);
//     // event.replaceOutput(oldOutputs[i], newOutputs[i]);

//     event.shapeless(newOutputs[i], [oldOutputs[i]]);
//   }
// });

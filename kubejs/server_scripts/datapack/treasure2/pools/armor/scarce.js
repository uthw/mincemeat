// onEvent("server.datapack.low_priority", (event) => {
//   onEvent("server.datapack.low_priority", (event) => {
//     let chestLoot = {
//       version: "1.0",
//       type: "minecraft:chest",
//       pools: [
//         {
//           name: "scarce_armor",
//           rolls: 1,
//           entries: [
//             {
//               entryName: "cloggrum_helmet",
//               type: "minecraft:item",
//               name: "undergarden:cloggrum_helmet",
//               weight: 20,
//               functions: [
//                 {
//                   function: "minecraft:enchant_randomly",
//                 },
//               ],
//             },
//             {
//               entryName: "cloggrum_leggings",
//               type: "minecraft:item",
//               name: "undergarden:cloggrum_leggings",
//               weight: 20,
//               functions: [
//                 {
//                   function: "minecraft:enchant_randomly",
//                 },
//               ],
//             },
//             {
//               entryName: "cloggrum_helmet",
//               type: "minecraft:item",
//               name: "undergarden:cloggrum_helmet",
//               weight: 20,
//               functions: [
//                 {
//                   function: "minecraft:enchant_randomly",
//                 },
//               ],
//             },
//             {
//               entryName: "cloggrum_boots",
//               type: "minecraft:item",
//               name: "undergarden:cloggrum_boots",
//               weight: 20,
//               functions: [
//                 {
//                   function: "minecraft:enchant_randomly",
//                 },
//               ],
//             },
//             {
//               entryName: "silver_shield",
//               type: "minecraft:item",
//               name: "spartanshields:silver_shield",
//               weight: 7,
//             },
//             {
//               entryName: "silver_chestplate",
//               type: "minecraft:item",
//               name: "iceandfire:armor_silver_metal_chestplate",
//               weight: 8,
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: {
//                     min: 24,
//                     max: 34,
//                   },
//                   treasure: true,
//                 },
//               ],
//             },
//             {
//               entryName: "silver_leggings",
//               type: "minecraft:item",
//               name: "iceandfire:armor_silver_metal_leggings",
//               weight: 8,
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: {
//                     min: 24,
//                     max: 34,
//                   },
//                   treasure: true,
//                 },
//               ],
//             },
//             {
//               entryName: "silver_helmet",
//               type: "minecraft:item",
//               name: "iceandfire:armor_silver_metal_helmet",
//               weight: 8,
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: {
//                     min: 24,
//                     max: 34,
//                   },
//                   treasure: true,
//                 },
//               ],
//             },
//             {
//               entryName: "silver_boots",
//               type: "minecraft:item",
//               name: "iceandfire:armor_silver_metal_boots",
//               weight: 8,
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: {
//                     min: 24,
//                     max: 34,
//                   },
//                   treasure: true,
//                 },
//               ],
//             },
//             {
//               entryName: "turtle_helmet",
//               type: "minecraft:item",
//               name: "minecraft:turtle_helmet",
//               weight: 6,
//             },
//             {
//               entryName: "iron_horse_armor",
//               type: "minecraft:item",
//               name: "minecraft:iron_horse_armor",
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: {
//                     min: 15,
//                     max: 35,
//                   },
//                 },
//               ],
//               weight: 3,
//             },
//             {
//               entryName: "gold_hippogryph_armor",
//               type: "minecraft:item",
//               name: "iceandfire:gold_hippogryph_armor",
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: {
//                     min: 15,
//                     max: 35,
//                   },
//                 },
//               ],
//               weight: 3,
//             },
//             {
//               entryName: "camel_iron_armor",
//               type: "minecraft:item",
//               name: "atum:camel_iron_armor",
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: {
//                     min: 15,
//                     max: 35,
//                   },
//                 },
//               ],
//               weight: 3,
//             },
//           ],
//         },
//       ],
//     };

//     event.addJson(`treasure2:loot_tables/pools/armor/scarce.json`, chestLoot);
//   });
// });

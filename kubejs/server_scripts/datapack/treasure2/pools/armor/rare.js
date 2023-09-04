// onEvent("server.datapack.low_priority", (event) => {
//   onEvent("server.datapack.low_priority", (event) => {
//     let chestLoot = {
//       version: "1.0",
//       type: "minecraft:chest",
//       pools: [
//         {
//           name: "rare_armor",
//           rolls: 1,
//           entries: [
//             {
//               entryName: "diamond_chestplate",
//               type: "minecraft:item",
//               name: "minecraft:diamond_chestplate",
//               weight: 12, // I love this json patch that lets you add comments.
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: {
//                     min: 28,
//                     max: 34,
//                   },
//                   treasure: true,
//                 },
//               ],
//             },
//             {
//               entryName: "diamond_leggings",
//               type: "minecraft:item",
//               name: "minecraft:diamond_leggings",
//               weight: 12,
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: {
//                     min: 28,
//                     max: 34,
//                   },
//                   treasure: true,
//                 },
//               ],
//             },
//             {
//               entryName: "diamond_helmet",
//               type: "minecraft:item",
//               name: "minecraft:diamond_helmet",
//               weight: 14,
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: {
//                     min: 28,
//                     max: 34,
//                   },
//                   treasure: true,
//                 },
//               ],
//             },
//             {
//               entryName: "diamond_boots",
//               type: "minecraft:item",
//               name: "minecraft:diamond_boots",
//               weight: 14,
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: {
//                     min: 28,
//                     max: 34,
//                   },
//                   treasure: true,
//                 },
//               ],
//             },
//             {
//               entryName: "iron_chestplate",
//               type: "minecraft:item",
//               name: "minecraft:iron_chestplate",
//               weight: 15,
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: 48,
//                   treasure: true,
//                 },
//               ],
//             },
//             {
//               entryName: "iron_leggings",
//               type: "minecraft:item",
//               name: "minecraft:iron_leggings",
//               weight: 15,
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: 48,
//                   treasure: true,
//                 },
//               ],
//             },
//             {
//               entryName: "iron_helmet",
//               type: "minecraft:item",
//               name: "minecraft:iron_helmet",
//               weight: 20,
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: 48,
//                   treasure: true,
//                 },
//               ],
//             },
//             {
//               entryName: "iron_boots",
//               type: "minecraft:item",
//               name: "minecraft:iron_boots",
//               weight: 20,
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: 48,
//                   treasure: true,
//                 },
//               ],
//             },
//             {
//               entryName: "silver_shield",
//               type: "minecraft:item",
//               name: "iceandfire:silver_shield",
//               weight: 10,
//               functions: [
//                 {
//                   function: "minecraft:enchant_with_levels",
//                   levels: 45,
//                   treasure: true,
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     };

//     event.addJson(`treasure2:loot_tables/pools/armor/rare.json`, chestLoot);
//   });
// });

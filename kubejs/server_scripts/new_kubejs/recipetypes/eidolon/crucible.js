// onEvent("recipes", (event) => {
//     let recipes = [
//         // result is the item and amount
//         // steps is json with ingredients in chronological order
//         {
//             result: {
//                 item: "eidolon:arcane_gold_ingot",
//                 count: 2,
//             },
//             steps: [
//                 {
//                     ingredients: [
//                         {
//                             tag: "forge:dusts/arcane_crystal",
//                         },
//                         {
//                             tag: "forge:dusts/arcane_crystal",
//                         },
//                         {
//                             item: "eidolon:soul_shard",
//                         },
//                     ],
//                 },
//                 {
//                     ingredients: [
//                         {
//                             tag: "forge:ingots/gold",
//                         },
//                         {
//                             tag: "forge:ingots/gold",
//                         },
//                     ],
//                 },
//             ],
//         },
//     ];

//     recipes.forEach((recipe) => {
//         event.custom({
//             type: "eidolon:crucible",
//             result: recipe.result,
//             steps: recipe.steps,
//         });
//     });
// });

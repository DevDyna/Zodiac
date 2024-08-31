// JEIEvents.hideItems((event) => {
//   event.hideAll();
// });
// JEIEvents.hideFluids((event) => {
//   event.hideAll();
// });

// const $VanillaTypes = Java.loadClass("mezz.jei.api.constants.VanillaTypes");

// NetworkEvents.dataReceived("show", (event) => {
//   event.data.list.forEach(element => {
//   global.jeiRuntime
//     .getIngredientManager()
//     .addIngredientsAtRuntime($VanillaTypes.ITEM_STACK, [
//       Item.of(element),
//     ]);
//   });
// });

// NetworkEvents.dataReceived("hide", (event) => {
//   event.data.list.forEach(element => {
//   global.jeiRuntime
//     .getIngredientManager()
//     .removeIngredientsAtRuntime($VanillaTypes.ITEM_STACK, [
//       Item.of(element),
//     ]);
//   })
// });

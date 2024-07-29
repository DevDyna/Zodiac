JEIAddedEvents.registerCategories((event) => {
  // Register a new CustomCategory with the id "zodiac:click-event".
  event.custom("zodiac:click-event", (category) => {
    const {
      jeiHelpers,
      jeiHelpers: { guiHelper },
    } = category;
    // Set the title of the category to "Click Event".
    category
      //https://github.com/mezz/JustEnoughItems/blob/1.20.1/CommonApi/src/main/java/mezz/jei/api/helpers/IGuiHelper.java
      .title("Click on a Block")
      .background(
        guiHelper.createDrawable(
          "zodiac:textures/gui/click_event.png",
          2,
          2,
          128,
          128
        )
      )
      .icon(guiHelper.createDrawableItemStack(Item.of('wooden_pickaxe')))
      .isRecipeHandled((recipe) => {
        return global["verifyRecipe"](jeiHelpers, recipe);
      })
      .handleLookup((builder, recipe, focuses) => {
        global["handleLookup"](jeiHelpers, builder, recipe, focuses);
      })
    .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
      global["renderPainfulBlocks"](jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY);
    });
  });
});

global["verifyRecipe"] = (jeiHelpers, recipe) => {
  return !!(
    recipe?.data?.inputs?.main_hand !== undefined &&
    recipe?.data?.inputs?.off_hand !== undefined &&
    recipe?.data?.inputs?.block !== undefined &&
    recipe?.data?.outputs?.block_replace !== undefined &&
    recipe?.data?.outputs?.drop !== undefined
  );
};

// JEI needs to understand what sort of information is held within
// the recipe. This is where you can define different types of slots,
// where they should go, if they are input, output, catalysts, or neither.
// Depending on the slot type, it will effect if the recipe appears in
// in the recipe lookup.
// Refer to the JEI API for more information on how to use this.
global["handleLookup"] = (jeiHelpers, builder, recipe, focuses) => {
  /*{
      inputs:{
      main_hand: "minecraft:stick",
      off_hand : "minecraft:air",
      block : "minecraft:stone"
      },
      outputs:{
      block_replace:'minecraft:cobblestone',
      drop:['minecraft:diamond']}
    }
*/

  let verify = (what, type, x, y, builder) => {
    if (what != "minecraft:air" && what != undefined) {
      builder.addSlot(type, x, y).addItemStack(Item.of(what));
    } else {
      builder.addSlot(type, x, y).addItemStack(Item.of("minecraft:air"));
    }
  };

  // // const { main_hand, off_hand, block } = recipe.data.inputs;
  // // const { block_replace, drop } = recipe.data.outputs;

  verify(recipe.data.inputs.main_hand, "INPUT", 35, 6, builder);
  verify(recipe.data.inputs.off_hand, "INPUT", 2, 41, builder);
  verify(recipe.data.inputs.block, "INPUT", 35, 72, builder);
  verify(recipe.data.outputs.block_replace, "OUTPUT", 88, 12, builder);
  // verify(recipe.data.outputs.drop, "OUTPUT", 36, 7);

  let slotSize = 21;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      verify(
        recipe.data.outputs.drop[j * 3 + i],
        "OUTPUT",
        67 + i * slotSize,
        51 + j * slotSize,
        builder
      );
    }
  }

  //break;
  // case "fluid":
  //   // Add an input slot to the recipe that is 35 pixels from the left and 20 pixels from the top.
  //   // This one is slightly different as we are adding a fluid to the slot instead of an Item.
  //   // you can chain these as much as you'd like and add as many different ingredients
  //   // as you'd like.
  //   builder.addSlot("INPUT", 36, 7).addFluidStack(recipe.data.name, 1000).setSlotName("input");
  //   // Add an invisible output slot so that if you look at how the item is made, it shows this recipe.
  //   builder.addInvisibleIngredients("OUTPUT").addFluidStack(recipe.data.name, 1000);
  //   break;
};

global["renderPainfulBlocks"] = (jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
  // By using the Client binding we can get the Minecraft font.
  // Next we can draw the description of the recipe above the input slot.
  // The first argument is the font, the second is the FormattedText, the third is the x position,
  // the fourth is the y position, the fifth is the width of the text, and I have no clue what the last argument does.
  // Probably z-index if I had to guess.
  guiGraphics.drawWordWrap(Client.font, Text.of(recipe.data.description), 0, 10, 100, 0);
}

// Here we can hook into the JEI recipe registration event to add some recipes to our
// newly created category.
JEIAddedEvents.registerRecipes((event) => {
  event
    .custom("zodiac:click-event")
    // .add({
    //   name: "minecraft:cactus",
    //   type: "block",
    //   description: "It is kind of prickly.",
    // })
    // .add({
    //   name: "minecraft:stick",
    //   type: "item",
    //   description: "It could be sharp!",
    // })
    // //.add({ name: "minecraft:lava", type: "fluid", description: "It is very hot." })
    // .add({
    //   name: "minecraft:sugar",
    //   type: "item",
    //   description: "It causes diabetes.",
    // });

    .add({
      inputs: {
        main_hand: "minecraft:stick",
        off_hand: "minecraft:dirt",
        block: "minecraft:stone",
      },
      outputs: {
        block_replace: "minecraft:cobblestone",
        drop: ["minecraft:diamond"],
      },
    });

  // .add([])
  // .add("")
  // .add(true)
  // .add(50)
  // .add(12.4)
  // .add(()=> Item.of('steak'))
});

JEIAddedEvents.registerRecipeCatalysts((event) => {
  event.data.addRecipeCatalyst('wooden_pickaxe', "zodiac:click-event");
});

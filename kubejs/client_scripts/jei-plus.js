JEIAddedEvents.registerCategories((event) => {
  //---------------------------------------------------------------------------------------//
  //                                       CLICK EVENT                                     //
  //---------------------------------------------------------------------------------------//
  event.custom("zodiac:click-event", (category) => {
    const {
      jeiHelpers,
      jeiHelpers: { guiHelper },
    } = category;
    category
      //https://github.com/mezz/JustEnoughItems/blob/1.20.1/CommonApi/src/main/java/mezz/jei/api/helpers/IGuiHelper.java
      .title("Click on a Block")
      .background(
        guiHelper.createDrawable(
          "zodiac:textures/gui/click_event.png",
          2,
          2,
          136,
          128
        )
      )
      .icon(guiHelper.createDrawableItemStack(Item.of("wooden_pickaxe")))
      //---------------------------------------------------------------------//
      //                            SLOT VALIDATOR                           //
      //---------------------------------------------------------------------//
      .isRecipeHandled((recipe) => {
        return !!(
          recipe?.data?.inputs?.main_hand !== undefined &&
          recipe?.data?.inputs?.off_hand !== undefined &&
          recipe?.data?.inputs?.block !== undefined &&
          recipe?.data?.outputs?.block_replace !== undefined &&
          recipe?.data?.outputs?.drop !== undefined
        );
      })
      //---------------------------------------------------------------------//
      //                            SLOT IO                                  //
      //---------------------------------------------------------------------//
      .handleLookup((builder, recipe, focuses) => {
        verify(recipe.data.inputs.main_hand, "INPUT", 35, 16, builder);
        verify(recipe.data.inputs.off_hand, "INPUT", 2, 51, builder);
        verify(recipe.data.inputs.block, "INPUT", 35, 82, builder);
        verify(recipe.data.outputs.block_replace, "OUTPUT", 88, 22, builder);

        let slotSize = 21;

        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            verify(
              recipe.data.outputs.drop[j * 3 + i],
              "OUTPUT",
              67 + i * slotSize,
              61 + j * slotSize,
              builder
            );
          }
        }
      })
      //---------------------------------------------------------------------//
      //                            TEXT DRAWING                             //
      //---------------------------------------------------------------------//
      .setDrawHandler(
        (recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
          guiGraphics.drawWordWrap(
            Client.font,
            Text.of(convertString("right")).bold(),
            31,
            4,
            100,
            0
          );
          guiGraphics.drawWordWrap(
            Client.font,
            Text.of(convertString("left")).bold(),
            0,
            40,
            100,
            0
          );
          guiGraphics.drawWordWrap(
            Client.font,
            Text.of(convertString("result")).bold(),
            80,
            10,
            100,
            0
          );
        }
      );
    //---------------------------------------------------------------------//
  });

  //---------------------------------------------------------------------------------------//
  //                                       RANDOMTICK BASIC                                //
  //---------------------------------------------------------------------------------------//

  event.custom("zodiac:random-tick-basic", (category) => {
    const {
      jeiHelpers,
      jeiHelpers: { guiHelper },
    } = category;
    category
      .title("Random Tick Conversion")
      .background(
        guiHelper.createDrawable(
          "zodiac:textures/gui/randomtick/basic.png",
          2,
          2,
          90,
          32
        )
      )
      .icon(guiHelper.createDrawableItemStack(Item.of("flower_pot")))
      //---------------------------------------------------------------------//
      //                            SLOT VALIDATOR                           //
      //---------------------------------------------------------------------//
      .isRecipeHandled((recipe) => {
        return !!(
          recipe?.data?.input !== undefined &&
          recipe?.data?.output !== undefined
        );
      })
      //---------------------------------------------------------------------//
      //                            SLOT IO                                  //
      //---------------------------------------------------------------------//
      .handleLookup((builder, recipe, focuses) => {
        verify(recipe.data.input, "INPUT", 6, 7, builder);
        verify(recipe.data.output, "OUTPUT", 65, 7, builder);
      });
    //---------------------------------------------------------------------//
    //                            TEXT DRAWING                             //
    //---------------------------------------------------------------------//
    // .setDrawHandler(
    //   (recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
    //     guiGraphics.drawWordWrap(
    //       Client.font,
    //       Text.of(convertString("right")).bold(),
    //       31,
    //       4,
    //       100,
    //       0
    //     );
    //   }
    // );
    //---------------------------------------------------------------------//
  });

  //---------------------------------------------------------------------------------------//
  //                                       RANDOMTICK BELOW                                //
  //---------------------------------------------------------------------------------------//

  event.custom("zodiac:random-tick-below", (category) => {
    const {
      jeiHelpers,
      jeiHelpers: { guiHelper },
    } = category;
    category
      .title("Random Tick Conversion")
      .background(
        guiHelper.createDrawable(
          "zodiac:textures/gui/randomtick/block_top.png",
          2,
          2,
          90,
          58
        )
      )
      .icon(guiHelper.createDrawableItemStack(Item.of("dirt")))
      //---------------------------------------------------------------------//
      //                            SLOT VALIDATOR                           //
      //---------------------------------------------------------------------//
      .isRecipeHandled((recipe) => {
        return !!(
          recipe?.data?.input?.top !== undefined &&
          recipe?.data?.input?.below !== undefined &&
          recipe?.data?.output?.top !== undefined &&
          recipe?.data?.output?.below !== undefined
        );
      })
      //---------------------------------------------------------------------//
      //                            SLOT IO                                  //
      //---------------------------------------------------------------------//
      .handleLookup((builder, recipe, focuses) => {
        verify(recipe.data.input.top, "INPUT", 6, 7, builder);
        verify(recipe.data.input.below, "INPUT", 6, 32, builder);
        verify(recipe.data.output.top, "OUTPUT", 65, 7, builder);
        verify(recipe.data.output.below, "OUTPUT", 65, 32, builder);
      });
    //---------------------------------------------------------------------//
    //                            TEXT DRAWING                             //
    //---------------------------------------------------------------------//
    // .setDrawHandler(
    //   (recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
    //     guiGraphics.drawWordWrap(
    //       Client.font,
    //       Text.of(convertString("block placed below")).bold(),
    //       31,
    //       4,
    //       100,
    //       0
    //     );
    //   }
    // );
    //---------------------------------------------------------------------//
  });
});

JEIAddedEvents.registerRecipes((event) => {
  event.custom("zodiac:click-event").add({
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

  event.custom("zodiac:random-tick-basic").add({
    input: "minecraft:stone",
    output: "minecraft:dirt",
  });

  event.custom("zodiac:random-tick-basic").add({
    input: "minecraft:stone",
    output: "minecraft:dirt",
  });

  event.custom("zodiac:random-tick-below").add({
    input: { top: "minecraft:stone", below: "minecraft:dirt" },
    output: { top: "minecraft:stone", below: "minecraft:dirt" },
  });
});

JEIAddedEvents.registerRecipeCatalysts((event) => {
  event.data.addRecipeCatalyst("wooden_pickaxe", "zodiac:click-event");
  event.data.addRecipeCatalyst("flower_pot", "zodiac:random-tick-basic");
  event.data.addRecipeCatalyst("dirt", "zodiac:random-tick-below");
});

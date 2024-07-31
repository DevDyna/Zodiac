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
      .title("Click on Block")
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
          recipe?.data?.input?.main_hand !== undefined &&
          recipe?.data?.input?.off_hand !== undefined &&
          recipe?.data?.input?.block !== undefined &&
          recipe?.data?.output?.block_replace !== undefined &&
          recipe?.data?.output?.drop !== undefined &&
          recipe?.data?.output?.chance !== undefined &&
          recipe?.data?.output?.isCrouching !== undefined
        );
      })
      //---------------------------------------------------------------------//
      //                            SLOT IO                                  //
      //---------------------------------------------------------------------//
      .handleLookup((builder, recipe, focuses) => {
        verify(recipe.data.input.main_hand, "INPUT", 35, 16, builder);
        verify(recipe.data.input.off_hand, "INPUT", 2, 51, builder);
        verify(recipe.data.input.block, "INPUT", 35, 82, builder);
        verify(recipe.data.output.block_replace, "OUTPUT", 88, 22, builder);

        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            verify(
              recipe.data.output.drop[j * 3 + i],
              "OUTPUT",
              67 + i * 21,
              61 + j * 21,
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
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              if (recipe.data.output.chance[j * 3 + i] !== undefined) {
                guiGraphics.drawWordWrap(
                  Client.font,
                  Text.of(
                    convertString(recipe.data.output.chance[j * 3 + i] + "%")
                  ),
                  68 + i * 21,
                  72 + j * 21,
                  20,
                  20
                );
              }
            }
          }

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
      .title("Conversion with condition - below")
      .background(
        guiHelper.createDrawable(
          "zodiac:textures/gui/randomtick/block_below.png",
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

  //---------------------------------------------------------------------------------------//
  //                                       CROP RESULT                                     //
  //---------------------------------------------------------------------------------------//

  event.custom("zodiac:crop-result", (category) => {
    const {
      jeiHelpers,
      jeiHelpers: { guiHelper },
    } = category;
    category
      .title("Crop Result")
      .background(
        guiHelper.createDrawable(
          "zodiac:textures/gui/crop_result.png",
          2,
          2,
          96,
          136
        )
      )
      .icon(guiHelper.createDrawableItemStack(Item.of("dirt")))
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
        verify(recipe.data.input, "INPUT", 37, 8, builder);

        let slotSize = 21;

        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            verify(
              recipe.data.output[j * 4 + i],
              "OUTPUT",
              6 + i * slotSize,
              47 + j * slotSize,
              builder
            );
          }
        }
      });
    //---------------------------------------------------------------------//
    //                            TEXT DRAWING                             //
    //---------------------------------------------------------------------//
    // .setDrawHandler(
    //   (recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
    //     guiGraphics.drawWordWrap(
    //       Client.font,
    //       Text.of(convertString("better  that  botany")).gray(),
    //       -40,
    //       0,
    //       10,
    //       200
    //     );
    //   }
    // );
    //---------------------------------------------------------------------//
  });
});

JEIAddedEvents.registerRecipeCatalysts((event) => {
  event.data.addRecipeCatalyst("wooden_pickaxe", "zodiac:click-event");
  event.data.addRecipeCatalyst("flower_pot", "zodiac:random-tick-basic");
  event.data.addRecipeCatalyst("dirt", "zodiac:random-tick-below");
});

JEIAddedEvents.registerRecipes((event) => {
  //azalea click
  event.custom("zodiac:click-event").add({
    input: {
      main_hand: "kubejs:azalea_seeds",
      off_hand: "",
      block: "minecraft:flower_pot",
    },
    output: {
      block_replace: "kubejs:azalea_seed",
      drop: [],
      chance: [],
      isCrouching: false,
    },
  });

  //carrot click
  event.custom("zodiac:click-event").add({
    input: {
      main_hand: "kubejs:carrot_seeds",
      off_hand: "",
      block: "minecraft:flower_pot",
    },
    output: {
      block_replace: "kubejs:carrot_seed",
      drop: [],
      chance: [],
      isCrouching: false,
    },
  });

  //DEMO
  event.custom("zodiac:random-tick-basic").add({
    input: "minecraft:mud",
    output: "minecraft:dirt",
  });

  //rooted dirt
  event.custom("zodiac:random-tick-below").add({
    input: { top: "kubejs:azalea_seed", below: "minecraft:dirt" },
    output: { top: "kubejs:azalea_seed", below: "minecraft:rooted_dirt" },
  });

  //crop result
  event.custom("zodiac:crop-result").add({
    input: "kubejs:azalea_seed",
    output: ["kubejs:small_azalea_leaf", "minecraft:stick"],
  });

  event.custom("zodiac:crop-result").add({
    input: "kubejs:carrot_seed",
    output: ["minecraft:carrot"],
  });

  global.jei.recipes.click.forEach((element) => {
    event.custom("zodiac:click-event").add(element);
  });
});

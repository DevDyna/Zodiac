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
          recipe?.data?.input?.extra !== undefined &&
          recipe?.data?.output?.block_replace !== undefined &&
          recipe?.data?.output?.drop !== undefined &&
          recipe?.data?.output?.chance !== undefined &&
          recipe?.data?.output?.isCrouching !== undefined &&
          recipe?.data?.output?.extra !== undefined
        );
      })
      //---------------------------------------------------------------------//
      //                            SLOT IO                                  //
      //---------------------------------------------------------------------//
      .handleLookup((builder, recipe, focuses) => {
        verify(recipe.data.input.main_hand, "INPUT", 35, 16, builder);
        verify(recipe.data.input.off_hand, "INPUT", 2, 51, builder);
        verifyCrude(
          recipe.data.input.extra != ""
            ? Item.of(
                recipe.data.input.block,
                `{display:{Lore:['{\"text\":\"` +
                  recipe.data.input.extra +
                  `\"}']}}`
              )
            : Item.of(recipe.data.input.block),

          "INPUT",
          35,
          82,
          builder
        );
        verifyCrude(
          recipe.data.output.extra != ""
            ? Item.of(
                recipe.data.output.block_replace,
                `{display:{Lore:['{\"text\":\"` +
                  recipe.data.output.extra +
                  `\"}']}}`
              )
            : Item.of(recipe.data.output.block_replace),
          "OUTPUT",
          88,
          22,
          builder
        );

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
              if (
                recipe.data.output.chance[j * 3 + i] === undefined &&
                recipe.data.output.drop[j * 3 + i] !== undefined
              ) {
                guiGraphics.drawWordWrap(
                  Client.font,
                  Text.of(convertString("100%")),
                  68 + i * 21,
                  72 + j * 21,
                  20,
                  20
                );
              }
              if (recipe.data.output.drop[j * 3 + i] !== undefined) {
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
        guiHelper.createDrawable("zodiac:textures/gui/basic.png", 2, 2, 90, 32)
      )
      .icon(guiHelper.createDrawableItemStack(Item.of("mud")))
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
      .title("Conversion with condition")
      .background(
        guiHelper.createDrawable(
          "zodiac:textures/gui/block_below.png",
          2,
          2,
          90,
          58
        )
      )
      .icon(guiHelper.createDrawableItemStack(Item.of("rooted_dirt")))
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
          148,
          52
        )
      )
      .icon(guiHelper.createDrawableItemStack("kubejs:azalea_seed"))
      //---------------------------------------------------------------------//
      //                            SLOT VALIDATOR                           //
      //---------------------------------------------------------------------//
      .isRecipeHandled((recipe) => {
        return !!(
          recipe?.data?.input !== undefined &&
          recipe?.data?.output?.id !== undefined &&
          recipe?.data?.output?.tip !== undefined
        );
      })
      //---------------------------------------------------------------------//
      //                            SLOT IO                                  //
      //---------------------------------------------------------------------//
      .handleLookup((builder, recipe, focuses) => {
        verify(recipe.data.input, "INPUT", 10, 15, builder);

        let slotSize = 21;
        let slotY = 4;
        let slotX = 2;
        let tip = "";
        for (let i = 0; i < slotY; i++) {
          for (let j = 0; j < slotX; j++) {
            tip = recipe.data.output.tip[j * slotX + i];
            if (
              recipe.data.output.tip[j * slotX + i] == undefined &&
              recipe.data.output.id[j * slotX + i] != undefined
            ) {
              tip = "NAN";
            }
            verifyCrude(
              Item.of(
                recipe.data.output.id[j * slotX + i],
                `{display:{Lore:['{\"text\":\"` + tip + `\"}']}}`
              ),
              "OUTPUT",
              51 + i * slotSize,
              4 + j * slotSize,
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

  //---------------------------------------------------------------------------------------//
  //                                       COMPOSTING                                      //
  //---------------------------------------------------------------------------------------//

  event.custom("zodiac:composting", (category) => {
    const {
      jeiHelpers,
      jeiHelpers: { guiHelper },
    } = category;
    category
      .title("Composting")
      .background(
        guiHelper.createDrawable(
          "zodiac:textures/gui/composter.png",
          2,
          2,
          116,
          92
        )
      )
      .icon(guiHelper.createDrawableItemStack(Item.of("kubejs:composter")))
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
        verify(recipe.data.input, "INPUT", 15, 6, builder);

        let slotSize = 21;
        let size = 2;

        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
            verify(
              recipe.data.output[j * size + i],
              "OUTPUT",
              64 + i * slotSize,
              38 + j * slotSize,
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
  //                                       BLOCK DROP                                      //
  //---------------------------------------------------------------------------------------//

  event.custom("zodiac:block-drop", (category) => {
    const {
      jeiHelpers,
      jeiHelpers: { guiHelper },
    } = category;
    category
      .title("Block Drop")
      .background(
        guiHelper.createDrawable(
          "zodiac:textures/gui/block_result.png",
          2,
          2,
          96,
          136
        )
      )
      .icon(guiHelper.createDrawableItemStack(Item.of("minecraft:clay_ball")))
      //---------------------------------------------------------------------//
      //                            SLOT VALIDATOR                           //
      //---------------------------------------------------------------------//
      .isRecipeHandled((recipe) => {
        return !!(
          recipe?.data?.input !== undefined &&
          recipe?.data?.output?.id !== undefined &&
          recipe?.data?.output?.count !== undefined
        );
      })
      //---------------------------------------------------------------------//
      //                            SLOT IO                                  //
      //---------------------------------------------------------------------//
      .handleLookup((builder, recipe, focuses) => {
        verify(recipe.data.input, "INPUT", 37, 8, builder);
        let slotSize = 21;
        let tip = "";
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            tip = recipe.data.output.count[j * 4 + i];
            if (
              recipe.data.output.count[j * 4 + i] == undefined &&
              recipe.data.output.id[j * 4 + i] != undefined
            ) {
              tip = "NAN";
            }
            verifyCrude(
              Item.of(
                recipe.data.output.id[j * 4 + i],
                `{display:{Lore:['{\"text\":\"` + tip + `\"}']}}`
              ),
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
    //---------------------------------------------------------------------//
  });
});

JEIAddedEvents.registerRecipeCatalysts((event) => {
  event.data.addRecipeCatalyst("kubejs:composter", "zodiac:composting");
});

JEIAddedEvents.registerRecipes((event) => {
  //--------HARDCODED-RECIPES--------//
  //azalea click
  event.custom("zodiac:click-event").add({
    input: {
      main_hand: "kubejs:azalea_seeds",
      off_hand: "",
      block: "minecraft:flower_pot",
      extra: "",
    },
    output: {
      block_replace: "kubejs:azalea_seed",
      drop: [],
      chance: [],
      isCrouching: false,
      extra: "",
    },
  });

  //carrot click
  event.custom("zodiac:click-event").add({
    input: {
      main_hand: "kubejs:carrot_seeds",
      off_hand: "",
      block: "minecraft:flower_pot",
      extra: "",
    },
    output: {
      block_replace: "kubejs:carrot_seed",
      drop: [],
      chance: [],
      isCrouching: false,
      extra: "",
    },
  });

  //firepit click
  event.custom("zodiac:click-event").add({
    input: {
      main_hand: "kubejs:fire_starter",
      off_hand: "",
      block: "kubejs:firepit",
      extra: "unlit",
    },
    output: {
      block_replace: "kubejs:firepit",
      drop: [],
      chance: [],
      isCrouching: false,
      extra: "lit",
    },
  });

  //rooted dirt
  event.custom("zodiac:random-tick-below").add({
    input: { top: "kubejs:azalea_seed", below: "minecraft:dirt" },
    output: { top: "kubejs:azalea_seed", below: "minecraft:rooted_dirt" },
  });

  //mud to clay
  event.custom("zodiac:random-tick-basic").add({
    input: "minecraft:mud",
    output: "minecraft:clay",
  });

  //---------------------------------//

  //-------DYNAMIC-RECIPES-----------//
  global.jei.recipes.crop_result.forEach((element) => {
    event.custom("zodiac:crop-result").add(element);
  });

  global.jei.recipes.click.forEach((element) => {
    event.custom("zodiac:click-event").add(element);
  });

  global.jei.recipes.composting.forEach((element) => {
    event.custom("zodiac:composting").add(element);
  });

  global.jei.recipes.blockdrop.forEach((element) => {
    event.custom("zodiac:block-drop").add(element);
  });

  //---------------------------------//
});

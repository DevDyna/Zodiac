StartupEvents.registry("block", (event) => {

  let $recipe = global.jei.recipes.composting

  event
    .create("kubejs:composter")
    .property($BooleanProperty.create("composting"))
    .property($BooleanProperty.create("mature"))
    .property($IntegerProperty.create("stage", 0, 3))
    .property($IntegerProperty.create("type", 0, $recipe.length))
    .defaultCutout()
    .box(0, 0, 0, 16, 2, 16)
    .box(0, 2, 0, 14, 16, 2)
    .box(0, 2, 2, 2, 16, 16)
    .box(2, 2, 14, 16, 16, 16)
    .box(14, 2, 0, 16, 16, 14)
    .item((item) => {
      item.modelJson({
        parent: "zodiac:block/crate/template/item/demo",
      });
    })
    .defaultState((state) => {
      state
        .set($BooleanProperty.create("composting"), false)
        .set($BooleanProperty.create("mature"), false)
        .set($IntegerProperty.create("stage", 0, 3), 0)
        .set($IntegerProperty.create("type", 0, $recipe.length), 0);
    })
    .placementState((state) => {
      state
        .set($BooleanProperty.create("composting"), false)
        .set($BooleanProperty.create("mature"), false)
        .set($IntegerProperty.create("stage", 0, 3), 0)
        .set($IntegerProperty.create("type", 0, $recipe.length), 0);
    })
    .rightClick((click) => {
      const { item, block, hand, player, level } = click;
      const { x, y, z } = block;
      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        $recipe.forEach((element,index) => {
          
        //allow click until full
        if (
          item == element.input &&
          block.properties.get("stage").toLowerCase() !== "3"
          && block.properties.get("type").toLowerCase() == ""+(index+1)
        ) {
          if (!player.isCreative()) item.count--;
          level.spawnParticles(
            "minecraft:happy_villager",
            true,
            x + 0.5,
            y + 0.5,
            z + 0.5,
            0.1 * rnd(1, 4),
            0.1 * rnd(1, 4),
            0.1 * rnd(1, 4),
            10,
            0.1
          );
          if (rnd50()) {

            block.set("kubejs:composter", {
              type: ""+(index+1),
              composting: false,
              mature: false,
              stage: IHATEPROPERTIES(
                block.properties.get("stage").toLowerCase()
              ),
            });
            if (block.properties.get("stage").toLowerCase() === "3") {
              block.set("kubejs:composter", {
                type: ""+(index+1),
                composting: true,
                mature: false,
                stage: "3",
              });
            }
          }
        }
        //reset block and drop items
        if (block.properties.get("mature").toLowerCase() === "true") {
          block.set("kubejs:composter", {
            type: "0",
            composting: false,
            mature: false,
            stage: "0",
          });
          $recipe[index].output.forEach(e=>{
            block.popItemFromFace(e, "up");
          })
          
        }

      });

      }
    })
    .randomTick((tick) => {
      const { block } = tick;
      const { x, y, z } = block;
      if (
        block.properties.get("composting").toLowerCase() === "true" &&
        rnd75()
      ) {
        tick.level.spawnParticles(
          "minecraft:scrape",
          true,
          x + 0.5,
          y + 0.5,
          z + 0.5,
          0.1 * rnd(1, 2),
          0.1 * rnd(1, 2),
          0.1 * rnd(1, 2),
          rnd(1, 4),
          0.1
        );
        block.set("kubejs:composter", {
          type: block.properties.get("type").toLowerCase(),
          composting: false,
          mature: true,
          stage: "3",
        });
      }
    })
    .blockEntity((be) => {
      be.serverTick(5, 0, (tick) => {
        const { x, y, z } = tick.block;
        if (tick.block.properties.get("composting").toLowerCase() === "true") {
          tick.level.spawnParticles(
            "minecraft:scrape",
            true,
            x + 0.5,
            y + 0.5,
            z + 0.5,
            0.1 * rnd(1, 2),
            0.1 * rnd(1, 2),
            0.1 * rnd(1, 2),
            rnd(1, 4),
            0.1
          );
        }
      });
    }).blockstateJson = {
    multipart: [
      { apply: { model: "zodiac:block/crate/template/base" } },
      {
        when: { stage: "0", type: "0" },
        apply: { model: "zodiac:block/crate/template/empty" },
      },
//--------------------------------------------------------------//
      {
        when: { stage: "0", type: "1" },
        apply: { model: "zodiac:block/crate/dirt/stage0" },
      },
      {
        when: { stage: "1", type: "1" },
        apply: { model: "zodiac:block/crate/dirt/stage1" },
      },
      {
        when: { stage: "2", type: "1" },
        apply: { model: "zodiac:block/crate/dirt/stage2" },
      },
      {
        when: { stage: "3", type: "1" },
        apply: { model: "zodiac:block/crate/dirt/stage3" },
      },
//--------------------------------------------------------------//
      {
        when: { stage: "0", type: "2" },
        apply: { model: "zodiac:block/crate/cobblestone/stage0" },
      },
      {
        when: { stage: "1", type: "2" },
        apply: { model: "zodiac:block/crate/cobblestone/stage1" },
      },
      {
        when: { stage: "2", type: "2" },
        apply: { model: "zodiac:block/crate/cobblestone/stage2" },
      },
      {
        when: { stage: "3", type: "2" },
        apply: { model: "zodiac:block/crate/cobblestone/stage3" },
      },
//--------------------------------------------------------------//
    ],
  };
});

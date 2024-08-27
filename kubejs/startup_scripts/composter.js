global.jei = {
  recipes: {
    composter: [
      // {
      //   input,
      //   output,
      //   replace,
      // },
    ],
  },
};

StartupEvents.registry("block", (event) => {
  // event
  //   .create("kubejs:composter")
  //   .model("zodiac:block/crate/template/empty")
  //   .displayName("Empty Composter")
  //   .rightClick((click) => {
  //     const { player, item, block, hand } = click;
  //     if (hand == "OFF_HAND") return;
  //     if (hand == "MAIN_HAND") {
  //       if (item == "kubejs:pile_of_dirt") {
  //         player.swing();
  //         if (!player.isCreative()) item.count--;
  //         block.set("kubejs:composter");
  //       }
  //     }
  //   })
  //   .item((i) => {
  //     i.parentModel("zodiac:block/crate/template/empty");
  //   });

  //function createComposter(name, soilItem, texture) {}
  event
    .create("kubejs:composter")
    .property($BooleanProperty.create("composting"))
    .property($BooleanProperty.create("mature"))
    .property($IntegerProperty.create("stage", 0, 3))
    .property($IntegerProperty.create("type", 0, 9))
    .defaultCutout()
    .box(0, 0, 0, 16, 2, 16)
    .box(0, 2, 0, 14, 16, 2)
    .box(0, 2, 2, 2, 16, 16)
    .box(2, 2, 14, 16, 16, 16)
    .box(14, 2, 0, 16, 16, 14)
    .item((i) => {
      i.parentModel("zodiac:block/crate/template/empty");
    })
    .defaultState((state) => {
      state
        .set($BooleanProperty.create("composting"), false)
        .set($BooleanProperty.create("mature"), false)
        .set($IntegerProperty.create("stage", 0, 3), 0)
        .set($IntegerProperty.create("type", 0, 9), 0);
    })
    .placementState((state) => {
      state
        .set($BooleanProperty.create("composting"), false)
        .set($BooleanProperty.create("mature"), false)
        .set($IntegerProperty.create("stage", 0, 3), 0)
        .set($IntegerProperty.create("type", 0, 9), 0);
    })
    .rightClick((click) => {
      const { item, block, hand, facing, player, level } = click;
      const { x, y, z } = block;
      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        if (
          item == "kubejs:pile_of_dirt" &&
          block.properties.get("stage").toLowerCase() !== "3"
        ) {
          if (!player.isCreative()) item.count--;
          if (rnd50()) {
            level.spawnParticles(
              "minecraft:happy_villager",
              true,
              x + 0.1 * rnd(1, 4),
              y + 0.5 + 0.1 * rnd(1, 3),
              z + 0.1 * rnd(1, 4),
              0,
              0,
              0,
              10,
              0.1
            );

            block.set("kubejs:composter", {
              type: "1",
              composting: false,
              mature: false,
              stage: IHATEPROPERTIES(
                block.properties.get("stage").toLowerCase()
              ),
            });
            if (block.properties.get("stage").toLowerCase() === "3") {
              block.set("kubejs:composter", {
                type: "1",
                composting: true,
                mature: false,
                stage: "3",
              });
            }
          }
        }
        if (block.properties.get("mature").toLowerCase() === "true") {
          block.set("kubejs:composter", {
            type: "0",
            composting: false,
            mature: false,
            stage: "0",
          });
          block.popItemFromFace("minecraft:dirt", facing);
        }
      }
    })
    .randomTick((tick) => {
      const { block } = tick;
      if (
        block.properties.get("composting").toLowerCase() === "true" &&
        rnd25()
      ) {
        block.set("kubejs:composter", {
          type: "1",
          composting: false,
          mature: true,
          stage: "3",
        });
      }
    })
    .blockEntity((be) => {
      be.clientTick(5, 0, (tick) => {
        const { x, y, z } = tick.block;
        if (tick.block.properties.get("composting").toLowerCase() === "true") {
          tick.level.spawnParticles(
            "minecraft:happy_villager",
            true,
            x + 0.1 * rnd(1, 9),
            y + 1 + 0.1 * rnd(1, 5),
            z + 0.1 * rnd(1, 9),
            0,
            0,
            0,
            10,
            0.1
          );
        }
      });
    }).blockstateJson = {
    multipart: [
      { apply: { model: "zodiac:block/crate/template/base" } },
      {
        when: { stage: "0", type: "0" },
        apply: { model: "zodiac:block/crate/dirt/empty" },
      },
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
    ],
  };
});
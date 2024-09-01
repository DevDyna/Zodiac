// priority: 0

let campfireState = () => {
  let result = { variants: {} };
  let bool = [true, false];
  let decay = [0, 1, 2, 3];
  let faces = ["south", "west", "north", "east"];
  let rotations = [0, 90, 180, 270];
  let model = "";

  faces.forEach((face, index) => {
    bool.forEach((lit) => {
      decay.forEach((dec) => {
        if(!lit && decay == 3){
          model = "zodiac:block/campfire_burnout";
        } else if (lit){
          model = "minecraft:block/campfire";
        }else{
          model = "minecraft:block/campfire_off";
        }

        result.variants["facing=" + face + ",lit=" + lit + ",decay=" + dec] = {
          model: model,
          y: rotations[index],
        };
      });
    });
  });

  return result;
};

StartupEvents.registry("block", (event) => {
  event
    .create("kubejs:firepit", "cardinal")
    .property($BooleanProperty.create("lit"))
    .property($IntegerProperty.create("decay", 0, 3))
    .defaultCutout()
    .box(0, 0, 0, 16, 7, 16)
    .steppedOn((step) => {
      if (step.block.properties.get("lit").toLowerCase() === "true") {
        step.entity.remainingFireTicks = 30;
      }
    })
    .defaultState((state) => {
      state
        .set($BooleanProperty.create("lit"), false)
        .set($IntegerProperty.create("decay", 0, 3), 0);
    })
    .placementState((state) => {
      state
        .set($BooleanProperty.create("lit"), false)
        .set($IntegerProperty.create("decay", 0, 3), 0);
    })
    .rightClick((click) => {
      const prop = click.block.properties;
      const item = click.player.mainHandItem;
      const { x, y, z } = click.block;

      if (prop.get("decay").toLowerCase() === "3") {
        click.block.set("minecraft:air");
        for (let i = 1; i < rnd(2, 4); i++) {
          click.block.popItem("minecraft:charcoal");
        }
        click.level.spawnParticles(
          "minecraft:smoke",
          true,
          x + 0.5,
          y + 0.5,
          z + 0.5,
          0.3 * rnd(0, 4),
          0.3 * rnd(0, 4),
          0.3 * rnd(0, 4),
          rnd(2, 4),
          0.1
        );
        click.level.spawnParticles(
          "minecraft:ash",
          true,
          x + 0.5,
          y + 0.5,
          z + 0.5,
          0.3 * rnd(0, 4),
          0.3 * rnd(0, 4),
          0.3 * rnd(0, 4),
          rnd(4, 16),
          0.1
        );
      }
      if (
        item == "kubejs:fire_starter" &&
        prop.get("lit").toLowerCase() === "false" &&
        prop.get("decay").toLowerCase() === "0"
      ) {
        //click.level.playSound("minecraft:item.flintandsteel.use");
        click.item.damageValue++;
        click.block.set(click.block.id, {
          lit: "true",
          decay: "0",
          facing: prop.get("facing").toLowerCase(),
        });
      }
    })

    .randomTick((tick) => {
      const { x, y, z } = tick.block;
      const prop = tick.block.properties;
      if (prop.get("lit").toLowerCase() === "true") {
        tick.level.spawnParticles(
          "minecraft:campfire_cosy_smoke",
          true,
          x + 0.5,
          y + 0.5,
          z + 0.5,
          0.1 * rnd(0, 4),
          0.1 * rnd(0, 4),
          0.1 * rnd(0, 4),
          rnd(1, 4),
          0.1
        );

        if (prop.get("decay").toLowerCase() === "3") {
          tick.block.set(tick.block.id, {
            decay: "3",
            lit: "false",
            facing: prop.get("facing").toLowerCase(),
          });
        } else {
          tick.block.set(tick.block.id, {
            decay: IHATEPROPERTIES(prop.get("decay").toLowerCase()),
            lit: "true",
            facing: prop.get("facing").toLowerCase(),
          });
        }
      }
    })
    .item((item) => {
      item.modelJson({
        parent: "minecraft:block/campfire_off",
      });
    }).blockstateJson = campfireState();
});
console.log(campfireState());

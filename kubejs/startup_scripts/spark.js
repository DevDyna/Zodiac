StartupEvents.registry("block", (event) => {
  event
    .create("zodiac:node")
    .property($BooleanProperty.create("active"))
    .box(5,5,5,11,11,11)
    .unbreakable()
    .lightLevel(15)
    .defaultState((state) => {
      state.set($BooleanProperty.create("active"), false);
    })
    .rightClick((click) => {
      if (click.item == "") {
        click.level.playSound("minecraft:block.beacon.activate");
      }
    })
    .blockEntity((entity) => {
      entity.serverTick(10, 0, (tick) => {
        const { x, y, z } = tick;
        tick.level.spawnParticles(
          "minecraft:nautilus",
          true,
          x+0.5,
          y+0.5,
          z+0.5,
          0.1 * rnd(0, 4),
          0.1 * rnd(0, 4),
          0.1 * rnd(0, 4),
          0.1,
          1
        );
        if (tick.block.properties.get("active").toLowerCase()) {
          // tick.level.spawnParticles('minecraft:')
        }
      });
    })
    .model("zodiac:block/node")
    .item((i) => {
      i.parentModel("zodiac:block/node");
    });
});

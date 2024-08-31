StartupEvents.registry("block", (event) => {
  event
    .create("minecraft:dirt")
    .soundType("rooted_dirt")
    .hardness(0.5)
    .resistance(0.5)
    .requiresTool(false)
    .randomTick((tick) => {
      const faces = [
        Facing.NORTH,
        Facing.SOUTH,
        Facing.EAST,
        Facing.WEST,
        Facing.UP,
      ];

      let chance = (prop) => {
        rnd(
          0,
          Math.floor(32 / (1 + prop.properties.get("age").toLowerCase()))
        ) == 1;
      };

      if (tick.block.offset(Facing.UP) == "kubejs:azalea") {
        if (chance(tick.block.offset(Facing.UP))) {
          tick.block.set("minecraft:rooted_dirt");
        }

        faces.forEach((pos) => {
          if (tick.block.offset(pos) == "minecraft:rooted_dirt") {
            faces.forEach((dir) => {
              if (
                tick.block.offset(pos).offset(dir) == "kubejs:azalea" &&
                chance(tick.block.offset(pos).offset(dir))
              ) {
                tick.block.set("minecraft:rooted_dirt");
              }
            });
          }
        });
      }
    });

  event
    .create("minecraft:mud")
    .soundType("rooted_dirt")
    .hardness(0.5)
    .resistance(0.5)
    .requiresTool(false)
    .randomTick((tick) => {
      if (rnd75()) tick.block.set("minecraft:clay");
    });
});

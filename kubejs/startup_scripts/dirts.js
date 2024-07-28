StartupEvents.registry("block", (event) => {
  event
    .create("minecraft:dirt")
    .soundType("rooted_dirt") // Set a material (affects the sounds and some properties)
    .hardness(0.5) // Set hardness (affects mining time)
    .resistance(0.5) // Set resistance (to explosions, etc)
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
});

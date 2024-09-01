BlockEvents.broken("kubejs:firepit", (event) => {
  const { x, y, z } = event.block;
  if (Number(event.block.properties.get("decay").toLowerCase()) == 3) {
    for (let i = 0; i < rnd(2, 4); i++) {
      event.block.popItem("minecraft:charcoal");
    }
    event.level.spawnParticles(
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
    event.level.spawnParticles(
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
    for (
      let i = 0;
      i < rnd(1, Number(event.block.properties.get("decay").toLowerCase()));
      i++
    ) {
      event.block.popItem("kubejs:ash");
    }
  } else if (Number(event.block.properties.get("decay").toLowerCase()) >= 1) {
    for (let i = 0; i < rnd(1, 3); i++) {
      event.block.popItem("minecraft:stick");
    }
    for (let i = 0; i < rnd(1, 2); i++) {
      event.block.popItem("aquaculture:driftwood");
    }

    for (
      let i = 0;
      i < rnd(1, Number(event.block.properties.get("decay").toLowerCase()));
      i++
    ) {
      event.block.popItem("kubejs:ash");
    }

    event.level.spawnParticles(
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
  } else {
    for (let i = 0; i < rnd(1, 3); i++) {
      event.block.popItem("minecraft:stick");
    }
    for (let i = 0; i < rnd(1, 2); i++) {
      event.block.popItem("aquaculture:driftwood");
    }
  }
});

BlockEvents.rightClicked("kubejs:firepit", (event) => {
  const prop = event.block.properties;
  const item = event.player.mainHandItem;
  const { x, y, z } = event.block;

  if (prop.get("decay").toLowerCase() === "3") {
    event.player.swing();
    event.block.set("minecraft:air");
    for (let i = 1; i < rnd(2, 4); i++) {
      event.block.popItem("minecraft:charcoal");
    }
    for (
      let i = 0;
      i < rnd(1, Number(event.block.properties.get("decay").toLowerCase()));
      i++
    ) {
      event.block.popItem("kubejs:ash");
    }
    event.level.spawnParticles(
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
    event.level.spawnParticles(
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
  } else if (
    item == "kubejs:fire_starter" &&
    prop.get("lit").toLowerCase() === "false" &&
    prop.get("decay").toLowerCase() === "0"
  ) {
    event.player.swing();
    //event.level.playSound("minecraft:item.flintandsteel.use");
    if (event.item.getMaxDamage() <= event.item.damageValue) {
      event.item.count--;
    } else {
      event.item.damageValue++;
    }

    event.block.set(event.block.id, {
      lit: "true",
      decay: "0",
      facing: prop.get("facing").toLowerCase(),
    });
  } else event.cancel();
});

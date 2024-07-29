// priority: 0

let azalea = (event) => {
  let age = event.block.properties.get("age").toLowerCase();
  if (age == 7) {
    for (let i = 0; i < rnd(0, 3); i++) {
      event.block.popItem("kubejs:small_azalea_leaf");
    }
  }
  if (age >= 3) {
    event.block.popItem("minecraft:stick");
  }
};

let carrot = (event) => {
  let age = event.block.properties.get("age").toLowerCase();
  if (age == 3) {
    for (let i = 0; i < rnd(0, 3); i++) {
      event.block.popItem("minecraft:carrot");
    }
  }
};

potEvents(
  "kubejs:azalea",
  "kubejs:azalea_seeds",
  "minecraft:flower_pot",
  azalea
);

potEvents(
  "kubejs:carrot",
  "kubejs:carrot_seeds",
  "minecraft:flower_pot",
  carrot
);

function potEvents(id, item_seed, basePot, dropEvent) {
  //break event
  BlockEvents.broken(id, (event) => {
    dropEvent(event);
    event.block.popItem(basePot);
    event.block.popItem(item_seed);
  });
  //fast harvest event
  BlockEvents.rightClicked(id, (event) => {
    dropEvent(event);
    const { x, y, z } = event.block;
      event.level.spawnParticles(
        "minecraft:scrape",
        true,
        x +0.5,
        y+0.5,
        z+0.5,
        0.1*rnd(0,4),
        0.1*rnd(0,4),
        0.1*rnd(0,4),
        rnd(1, 4),
        0.1
      );
    event.block.set(id);
  });
  //planting event
  BlockEvents.rightClicked(basePot, (event) => {
    if (event.item == item_seed) {
      const { x, y, z } = event.block;
      event.level.spawnParticles(
        "minecraft:totem_of_undying",
        true,
        x+0.5,
        y+0.5,
        z+0.5,
        0.1*rnd(0,4),
        0.1*rnd(0,4),
        0.1*rnd(0,4),
        rnd(1, 4),
        0.1
      );
      event.player.swing();
      event.block.set(id);
    }
  });
}

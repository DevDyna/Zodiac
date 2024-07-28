// priority: 0

BlockEvents.broken("kubejs:azalea", (event) => {
  let age = event.block.properties.get("age").toLowerCase();
  if (age == 7) {
    for (let i = 0; i < rnd(0, 3); i++) {
      event.block.popItem("kubejs:small_azalea_leaf");
    }
  }
  if (age >= 3) {
    event.block.popItem("minecraft:stick");
  }
  event.block.popItem("minecraft:flower_pot");
  event.block.popItem("kubejs:azalea_seeds");
});

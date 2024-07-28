click_loot(
  "minecraft:dirt",
  ["kubejs:stone_pebble", "kubejs:azalea_seeds"],
  [50, 10],
  "minecraft:dirt"
);
click_loot(
  "minecraft:rooted_dirt",
  ["kubejs:stone_pebble", "kubejs:small_azalea_roots", "kubejs:small_worm"],
  [50, 75, 25],
  "minecraft:dirt"
);

function click_loot(block_id, loot, loot_chance, block_replace) {
  BlockEvents.rightClicked(block_id, (event) => {
    if (
      event.hand == "MAIN_HAND" &&
      event.player.mainHandItem == "minecraft:air" &&
      event.player.isCrouching()
    ) {
      if (rnd50()) {
        event.player.swing();
        loot.forEach((element, index) => {
          if (rndC(loot_chance[index])) {
            event.block.popItemFromFace(element, event.facing);
          }
        });
        if (rnd25()) {
          event.block.set(block_replace);
        }
      } else {
        event.cancel();
      }
    }
  });
}

BlockEvents.rightClicked("kubejs:azalea", (event) => {
  let age = event.block.properties.get("age").toLowerCase();
  if (age == 7) {
    event.player.swing();
    for (let i = 0; i < rnd(0, 3); i++) {
      event.block.popItem("kubejs:small_azalea_leaf");
    }
    event.block.popItem("minecraft:stick");
    event.block.set("kubejs:azalea");
  }
});

BlockEvents.rightClicked("minecraft:flower_pot", (event) => {
  if (event.item == "kubejs:azalea_seeds") {
    event.player.swing();
    event.block.set("kubejs:azalea");
  }
});

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

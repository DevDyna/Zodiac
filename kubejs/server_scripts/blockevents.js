// priority: 0

click_loot("minecraft:dirt", ["zodiac:stone_pebble"], [50]);
click_loot(
  "minecraft:rooted_dirt",
  ["zodiac:stone_pebble", "zodiac:small_azalea_roots", "zodiac:small_worm"],
  [25, 50, 5],
  "minecraft:dirt"
);

function click_loot(block_id, loot, chances, block_replace) {
  BlockEvents.rightClicked(block_id, (event) => {
    if (rnd25()) {
      event.player.swing();
      if (event.hand == "MAIN_HAND" && event.item.isEmpty() && event.player.isCrouching()) {
        loot.forEach((element, index) => {
          if (rndC(chances[index])) {
            event.block.popItemFromFace(element, event.facing);
          }
        });

        if (typeof block_replace != undefined) {
          event.block.set(block_replace);
        }
      }
    } else {
      event.cancel();
    }
  });
}

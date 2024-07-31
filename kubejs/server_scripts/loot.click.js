click_loot(
  [],
  "minecraft:dirt",
  ["kubejs:stone_pebble", "kubejs:azalea_seeds"],
  [50, 10],
  "minecraft:dirt",
  true
);
click_loot(
  [],
  "minecraft:rooted_dirt",
  [
    "kubejs:stone_pebble",
    "kubejs:small_azalea_roots",
    "kubejs:small_worm",
    "anthillinside:ants",
  ],
  [50, 75, 25,10],
  "minecraft:dirt",
  true
);

/**
 *
 * @param {string[]} hands null as ""
 * @param {block} block_id
 * @param {item[]} loot
 * @param {number[]} loot_chance
 * @param {block} block_replace
 */
function click_loot(
  hands,
  block_id,
  loot,
  loot_chance,
  block_replace,
  isCrouching
) {
  let main_hand;
  let off_hand;

  if (hands.length <= 0 && hands[0] === undefined) {
    main_hand = "";
  } else {
    main_hand = hands[0];
  }
  if (hands.length <= 1 && hands[1] === undefined) {
    off_hand = "";
  } else {
    off_hand = hands[1];
  }

  global.jei.recipes.click.push({
    input: {
      main_hand: main_hand,
      off_hand: off_hand,
      block: block_id,
    },
    output: {
      block_replace: block_replace,
      drop: loot,
      chance: loot_chance,
      isCrouching: isCrouching,
    },
  });

  BlockEvents.rightClicked(block_id, (event) => {
    let off_hand_flag = true;
    let isCrouching_flag = true;
    let off_hand_as_first = true

    main_hand = main_hand == "" ? "minecraft:air" : main_hand;

    if (off_hand != "") {
      off_hand_flag = event.player.offHandItem == off_hand;
      if(main_hand == "minecraft:air"){
        off_hand_as_first = event.hand == "MAIN_HAND"
      }
    }
    if (isCrouching) {
      isCrouching_flag = event.player.isCrouching();
    }

    if (
      event.hand == "MAIN_HAND" &&
      event.player.mainHandItem == main_hand &&
      isCrouching_flag &&
      off_hand_flag &&
      off_hand_as_first
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

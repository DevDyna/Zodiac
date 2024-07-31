global.jei.recipes.click.forEach((e) => {
  const { main_hand, off_hand, block } = e.input;
  const { block_replace, drop, chance, isCrouching } = e.output;
  click_loot(
    main_hand,
    off_hand,
    block,
    drop,
    chance,
    block_replace,
    isCrouching
  );
});

function click_loot(
  main_hand,
  off_hand,
  block_id,
  loot,
  loot_chance,
  block_replace,
  isCrouching
) {
  BlockEvents.rightClicked(block_id, (event) => {
    let flag_isCrouching = true;
    if (main_hand == "") {
      main_hand = "minecraft:air";
    }
    if (off_hand == "") {
      off_hand = "minecraft:air";
    }

    if (isCrouching) {
      flag_isCrouching = event.player.isCrouching();
    }

    if (
      event.player.mainHandItem == main_hand &&
      event.player.offHandItem == off_hand &&
      flag_isCrouching
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

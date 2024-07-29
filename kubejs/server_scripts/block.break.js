BlockEvents.leftClicked((event) => {
  const { block } = event;
  const { x, y, z } = block;

  let can_break = false;

  if (y != -63) {
    for (let i = y; i > -63; i--) {
      if (block.offset(x, i, z) != "minecraft:air") {
        can_break = true;
        break;
      }
      if (y == -63) {
        can_break = false;
        break;
      }
    }
  }

  if (!can_break && !event.player.isCreative()) {
    event.player.statusMessage = "§l§cUnable to Break this block"
    event.cancel();
  }
});

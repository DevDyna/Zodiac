BlockEvents.placed("ars_nouveau:sourceberry_bush", (event) => {
  if (!event.player.isCreative()) {
    if (event.block.down != "minecraft:mycelium") {
      event.player.statusMessage = "§l§cUnable to Place this block here";
      event.cancel();
    }
  }
});

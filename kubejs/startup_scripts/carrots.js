// priority: 0

StartupEvents.registry("block", (event) => {
  event
    .create("kubejs:carrot", "crop")
    .age(3, (builder) => {
      builder
         .shape(0, 5, 0, 5, 11, 12, 11)
         .shape(1, 5, 0, 5, 11, 12, 11)
         .shape(2, 5, 0, 5, 11, 12, 11)
         .shape(3, 5, 0, 5, 11, 12, 11)
    })
    .survive((state, level, pos) => {
      return level.getBlockState(pos.below()).block.id != "minecraft:air";
    })
    .growTick(() => 300)
    .dropSeed(false)
    //.crop("kubejs:small_azalea_leaf")
    .item((seedItem) => {
      seedItem.texture("minecraft:item/carrot");
    }).blockstateJson = blockstate("zodiac:block/carrot/", "age", 3);
});

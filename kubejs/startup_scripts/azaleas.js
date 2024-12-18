// priority: 0

StartupEvents.registry("block", (event) => {
  event
    .create("zodiac:azalea", "crop")
    .age(7, (builder) => {
      builder
        .shape(0, 5, 0, 5, 11, 12, 11)
        .shape(1, 5, 0, 5, 11, 12, 11)
        .shape(2, 5, 0, 5, 11, 13, 11)
        .shape(3, 4.5, 0, 4.5, 11.5, 15, 11.5)
        .shape(4, 4, 0, 4, 12, 16, 12)
        .shape(5, 4, 0, 4, 12, 16, 12)
        .shape(6, 4, 0, 4, 12, 16, 12)
        .shape(7, 4, 0, 4, 12, 16, 12);
    })
    .survive((state, level, pos) => {
      return level.getBlockState(pos.below()).block.id != "minecraft:air";
    })
    .growTick(() => 600)
    .dropSeed(false)
    //.crop("zodiac:small_azalea_leaf")
    .item((seedItem) => {
      seedItem.parentModel("zodiac:block/azalea/age7");
    }).blockstateJson = blockstate("zodiac:block/azalea/", "age", 8);
});

StartupEvents.registry("block", (event) => {
  //organic dirt -> mud
  event.create("kubejs:muddy_dirt").textureAll("minecraft:block/mud");
  //dry dirt -> sand
  event.create("kubejs:silty_dirt").textureAll("minecraft:block/sand");
  //pebble dirt -> gravel
  event.create("kubejs:rocky_dirt").textureAll("minecraft:block/gravel");

  event.create("kubejs:stick_crate").textureAll("minecraft:block/oak_planks");
});

StartupEvents.registry("item", (event) => {
  event.create("kubejs:stone_pebble").texture("zodiac:item/stone_pebble");
  event.create("kubejs:pile_of_dirt").texture("zodiac:item/pile_of_dirt");
  event.create("kubejs:small_worm").texture("zodiac:item/small_worm");
  event.create("kubejs:small_azalea_roots").texture("zodiac:item/small_azalea_roots");
  event.create("kubejs:small_azalea_leaf").texture("zodiac:item/small_azalea_leaf");
  event.create("kubejs:azalea_seeds").texture("zodiac:item/azalea_seeds");
  event.create("kubejs:carrot_seeds").texture("zodiac:item/carrot_seeds")
  event.create('kubejs:fire_starter').texture('minecraft:item/flint')
});

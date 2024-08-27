StartupEvents.registry("block", (event) => {

  function crate(name,texture){
    event.create(name).defaultCutout().modelJson = {
      "parent": "zodiac:block/crate/template/full",
      "textures": {
        "crate_top": texture,
        "crate_side": texture
      }
    }
  }

  //organic dirt -> mud
  event.create("kubejs:muddy_dirt").textureAll("minecraft:block/mud");
  //dry dirt -> sand
  event.create("kubejs:silty_dirt").textureAll("minecraft:block/sand");
  //pebble dirt -> gravel
  event.create("kubejs:rocky_dirt").textureAll("minecraft:block/coarse_dirt");

  crate("kubejs:crate_of_cobblestone","minecraft:block/cobblestone")
  crate("kubejs:crate_of_sticks","minecraft:block/oak_planks")
  crate("kubejs:crate_of_dirt","minecraft:block/dirt")
  crate("kubejs:crate_of_soil","farmersdelight:block/rich_soil")

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

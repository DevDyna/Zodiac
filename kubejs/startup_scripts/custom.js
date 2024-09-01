StartupEvents.registry("block", (event) => {
  event
    .create("kubejs:gravelly_dirt")
    .textureAll("minecraft:block/coarse_dirt");

  event.create("kubejs:muddy_dirt").textureAll("minecraft:block/mud");
});

StartupEvents.registry("item", (event) => {
  event.create("kubejs:stone_pebble").texture("zodiac:item/stone_pebble");
  event.create("kubejs:pile_of_dirt").texture("zodiac:item/pile_of_dirt");
  //event.create("kubejs:small_worm").texture("zodiac:item/small_worm");
  event
    .create("kubejs:small_azalea_roots")
    .texture("zodiac:item/small_azalea_roots");
  event
    .create("kubejs:small_azalea_leaf")
    .texture("zodiac:item/small_azalea_leaf");
  event.create("kubejs:azalea_seeds").texture("zodiac:item/azalea_seeds");
  event.create("kubejs:carrot_seeds").texture("zodiac:item/carrot_seeds");
  event
    .create("kubejs:fire_starter")
    .texture("minecraft:item/flint")
    .maxDamage(4);

  event
    .create("kubejs:paxel", "paxel")
    .parentModel("zodiac:item/paxel")
    .unstackable()
    .texture("zodiac:item/paxel")
    .displayName("Pick-axe")
    .tier("iron")
    .maxDamage(16384)
    .tag("bookshelf:pickaxes")
    .tag("forge:tools/axes")
    .tag("forge:tools/pickaxes")
    .tag("forge:pickaxes");

  //event.create("kubejs:big_stick").texture("minecraft:stick");
});

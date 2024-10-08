StartupEvents.registry("block", (event) => {
  event
    .create("kubejs:gravelly_dirt")
    .textureAll("minecraft:block/coarse_dirt");

  event.create("kubejs:muddy_dirt").textureAll("minecraft:block/mud");

  event
    .create("kubejs:charcoal_block")
    .textureAll("minecraft:block/coal_block");

  event.create("kubejs:stone_casing",'cardinal').soundType("stone")
  .hardness(0.5)
  .resistance(0.5)
  .requiresTool(false)
  .modelJson = {
    parent: "minecraft:block/cube_bottom_top",
    textures: {
      bottom: "terraqueous:block/craft_blank",
      side: "terraqueous:block/craftfurnace_side",
      top: "terraqueous:block/craft_blank",
    },
  };
});

StartupEvents.registry("item", (event) => {
  event
    .create("kubejs:cobblestone_pebble")
    .texture("zodiac:item/cobblestone_pebble");
  event.create("kubejs:stone_pebble").texture("zodiac:item/stone_pebble");
  event.create("kubejs:dirt_pile").texture("zodiac:item/dirt_pile");
  event.create("kubejs:organic_pile").texture("zodiac:item/organic_pile");
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

  event.create("kubejs:ash").texture("minecraft:item/bone_meal");

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

  event
    .create("kubejs:limewater_bottle")
    .color(0, 0xffffaf)
    .texture("layer0", "minecraft:item/potion_overlay")
    .texture("layer1", "minecraft:item/potion");

  event
    .create("kubejs:water_bottle")
    .color(0, 0x2b4797)
    .texture("layer0", "minecraft:item/potion_overlay")
    .texture("layer1", "minecraft:item/potion");
});

StartupEvents.registry("fluid", (event) => {
  event
    .create("kubejs:limewater")
    .flowingTexture("minecraft:block/water_flow")
    .stillTexture("minecraft:block/water_still")
    .color(0xffffaf)
    .bucketColor(0xffffaf);
});

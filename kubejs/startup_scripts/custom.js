StartupEvents.registry("block", (event) => {
  event
    .create("zodiac:gravelly_dirt")
    .textureAll("minecraft:block/coarse_dirt");

  event.create("zodiac:muddy_dirt").textureAll("minecraft:block/mud");

  event
    .create("zodiac:charcoal_block")
    .textureAll("minecraft:block/coal_block");

    event
    .create("zodiac:tinted_planks")
    .textureAll("zodiac:block/tinted_planks");

  event.create("zodiac:stone_casing",'cardinal').soundType("stone")
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
    .create("zodiac:cobblestone_pebble")
    .texture("zodiac:item/cobblestone_pebble");
  event.create("zodiac:stone_pebble").texture("zodiac:item/stone_pebble");
  event.create("zodiac:dirt_pile").texture("zodiac:item/dirt_pile");
  event.create("zodiac:organic_pile").texture("zodiac:item/organic_pile");
  //event.create("zodiac:small_worm").texture("zodiac:item/small_worm");
  event
    .create("zodiac:small_azalea_roots")
    .texture("zodiac:item/small_azalea_roots");
  event
    .create("zodiac:small_azalea_leaf")
    .texture("zodiac:item/small_azalea_leaf");
  event.create("zodiac:azalea_seeds").texture("zodiac:item/azalea_seeds");
  event.create("zodiac:carrot_seeds").texture("zodiac:item/carrot_seeds");
  event
    .create("zodiac:fire_starter")
    .texture("minecraft:item/flint")
    .maxDamage(4);

  event.create("zodiac:ash").texture("minecraft:item/bone_meal");

  event
    .create("zodiac:paxel", "paxel")
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

  //event.create("zodiac:big_stick").texture("minecraft:stick");

  event
    .create("zodiac:limewater_bottle")
    .color(0, 0xffffaf)
    .texture("layer0", "minecraft:item/potion_overlay")
    .texture("layer1", "minecraft:item/potion");

  // event
  //   .create("zodiac:water_bottle")
  //   .color(0, 0x2b4797)
  //   .texture("layer0", "minecraft:item/potion_overlay")
  //   .texture("layer1", "minecraft:item/potion");

  event
    .create("zodiac:flower_pot_with_water")
    .color(0, 0x3f99c6)
    .texture("layer0", "zodiac:item/pot_overlay")
    .texture("layer1", "zodiac:item/pot_base");

    event
    .create("zodiac:tinted_clay")
    .texture("zodiac:item/clay");
});

StartupEvents.registry("fluid", (event) => {
  event
    .create("zodiac:limewater")
    .flowingTexture("minecraft:block/water_flow")
    .stillTexture("minecraft:block/water_still")
    .color(0xffffaf)
    .bucketColor(0xffffaf);
});

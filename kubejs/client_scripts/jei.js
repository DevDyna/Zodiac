JEIEvents.removeCategories((event) => {
  let categories = [
    "mekanism:sps_casing",
    "minecraft:anvil",
    "minecraft:brewing",
    "minecraft:compostable",
    "jei:information",
    "railcraft:fluid_boiler",
    "railcraft:solid_boiler",
    "ae2:attunement",
    "ae2:certus_growth",
    "ae2:condenser",
    "create:automatic_brewing",
    "create:automatic_packing",
    "create:automatic_shaped",
    "create:automatic_shapeless",
    "create:draining",
    "create:item_application",
    "create:mystery_conversion",
    "create:spout_filling",
    "terraqueous:endertable",
    "mekanism:boiler_casing",
    "mekanism:nutritional_liquifier",
    "farmersdelight:decomposition",
    'enderio:soul_engine',
    'thermal:disenchantment_fuel',
    'thermal:gourmand_fuel',
    'thermal:stirling_fuel',
  ];
  categories.forEach((e) => {
    event.remove(e);
  });
});
ServerEvents.recipes((event) => {
  /**
   *
   * @param {Item[]|Item} inputs
   * @param {Item} output
   */
  let less = (inputs, output) => {
    if (inputs != null && output != null) {
      if (!Array.isArray(inputs)) inputs = [inputs];

      event.shapeless(output, inputs);
    } else {
      console.log("RecipeError: in " + inputs + " | out " + output);
    }
  };

  /**
   *
   * @param {Item[]|Item} inputs
   * @param {Item} output
   */
  let shapex = (inputs, output) => {
    if (inputs != null && output != null) {
      if (!Array.isArray(inputs)) inputs = [inputs];

      inputs.forEach((element) => {
        if (element == null) element = "minecraft:air";
      });

      event.shaped(output, ["ABC", "DEF", "GHI"], {
        A: inputs[0],
        B: inputs[1],
        C: inputs[2],
        D: inputs[3],
        E: inputs[4],
        F: inputs[5],
        G: inputs[6],
        H: inputs[7],
        I: inputs[8],
      });
    } else {
      console.log("RecipeError: in " + inputs + " | out " + output);
    }
  };

  /**
   *
   * @param {Item} input
   * @param {Item} output
   * @param {Item} alter (optional) change 50% of input
   */
  let r22 = (input, output, alter) => {
    shapex(
      [
        input,
        alter !== undefined ? alter : input,
        null,
        alter !== undefined ? alter : input,
        input,
      ],
      output
    );
  };

  /**
   *
   * @param {Item[]|Item} input
   * @param {Item} output
   * @param {Boolean} invert invert input direction
   */
  let rplate = (inputs, output, invert) => {
    if (!Array.isArray(inputs)) inputs = [inputs];

    shapex(
      [
        !invert
          ? inputs.lenght > 0
            ? inputs[0]
            : inputs[1]
          : inputs.lenght > 0
          ? inputs[1]
          : inputs[0],
        invert
          ? inputs.lenght > 0
            ? inputs[0]
            : inputs[1]
          : inputs.lenght > 0
          ? inputs[1]
          : inputs[0],
      ],
      output
    );
  };

  /**
   *
   * @param {Item[]|Item} input
   * @param {Item} output
   * @param {Boolean} invert invert input direction
   */
  let rstick = (inputs, output, invert) => {
    if (!Array.isArray(inputs)) inputs = [inputs];

    shapex(
      [
        !invert
          ? inputs.lenght > 0
            ? inputs[0]
            : inputs[1]
          : inputs.lenght > 0
          ? inputs[1]
          : inputs[0],
        null,
        null,
        invert
          ? inputs.lenght > 0
            ? inputs[0]
            : inputs[1]
          : inputs.lenght > 0
          ? inputs[1]
          : inputs[0],
      ],
      output
    );
  };

  /**
   *
   * @param {Item[]|Item} input
   * @param {Item} output
   * @param {Boolean} invert invert input direction
   */
  let rsalter = (input, output) => {
    shapex([null, input, null, input], output);
  };

  less("aquaculture:driftwood", "4x minecraft:stick");

  r22("minecraft:stick", "aquaculture:driftwood");

  r22("minecraft:charcoal", "zodiac:charcoal_block");

  r22("aquaculture:driftwood", "2x minecraft:oak_planks");

  r22("aquaculture:driftwood", "zodiac:barrel", "minecraft:oak_planks");

  rstick(["aquaculture:worm", "zodiac:barrel"], "zodiac:composter", true);

  rsalter("minecraft:stick", "zodiac:fire_starter");

  event.shapeless("zodiac:limewater_bottle", [
    Item.of("minecraft:potion", '{Potion:"minecraft:water"}').strongNBT(),
    "zodiac:ash",
  ]);

  less(["zodiac:water_bottle", "zodiac:ash"], "zodiac:limewater_bottle");

  event.recipes.enderio.tank(
    "minecraft:glass_bottle",
    "zodiac:limewater_bottle",
    Fluid.of("zodiac:limewater", 250),
    true
  );

  less(
    "zodiac:water_bottle",
    Item.of("minecraft:potion", '{Potion:"minecraft:water"}').strongNBT()
  );
  less(
    Item.of("minecraft:potion", '{Potion:"minecraft:water"}').strongNBT(),
    "zodiac:water_bottle"
  );

  event.recipes.enderio.tank(
    "zodiac:water_bottle",
    "minecraft:glass_bottle",
    Fluid.of("minecraft:water", 250),
    false
  );

  event.recipes.enderio.tank(
    "minecraft:glass_bottle",
    Item.of("minecraft:potion", '{Potion:"minecraft:water"}').strongNBT(),
    Fluid.of("minecraft:water", 250),
    true
  );

  event.recipes.enderio.tank(
    "minecraft:glass_bottle",
    "zodiac:water_bottle",
    Fluid.of("minecraft:water", 250),
    true
  );

  event.recipes.enderio.tank(
    "zodiac:tinted_clay",
    "minecraft:clay_ball",

    Fluid.of("zodiac:limewater", 50),
    false
  );

  event.recipes.enderio.tank(
    "zodiac:tinted_planks",
    "#minecraft:planks",

    Fluid.of("zodiac:limewater", 50),
    false
  );

  event.recipes.enderio.tank(
    "zodiac:tinted_planks",
    "minecraft:oak_planks",

    Fluid.of("zodiac:limewater", 50),
    false
  );

  event.campfireCooking("zodiac:stone_pebble", "zodiac:cobblestone_pebble");
  event.campfireCooking("zodiac:dirt_pile", "zodiac:organic_pile");

  less(
    ["zodiac:small_azalea_roots", "zodiac:small_azalea_leaf"],
    "2x zodiac:organic_pile"
  );

  rstick(
    ["minecraft:stick", "minecraft:oak_planks"],
    "aquaculture:wooden_fillet_knife"
  );

  rstick(["zodiac:composter", "aquaculture:driftwood"], "enderio:fluid_tank");

  rstick(
    ["enderio:fluid_tank", "aquaculture:driftwood"],
    "watercollector:watercollector"
  );

  r22("minecraft:clay_ball", "minecraft:clay");
  less("minecraft:clay", "4x minecraft:clay_ball");

  rstick(
    ["zodiac:barrel", "aquaculture:driftwood"],
    "terraqueous:apple_barrel"
  );

  shapex(
    [
      "minecraft:stone",
      "minecraft:stone",
      null,
      "minecraft:clay",
      "minecraft:clay",
    ],
    "zodiac:stone_casing"
  );

  less(
    [
      "zodiac:stone_casing",
      "aquaculture:driftwood",
      "terraqueous:apple_barrel",
    ],
    "terraqueous:craftbench"
  );
  less(
    ["zodiac:stone_casing", "aquaculture:driftwood", "zodiac:composter"],
    "terraqueous:craftfurnace"
  );

  event.smelting("minecraft:brick", "minecraft:clay_ball");

  shapex(
    ["minecraft:brick", null, "minecraft:brick", null, "minecraft:brick"],
    "3x minecraft:flower_pot"
  );
});

ServerEvents.recipes((event) => {
  // event.shapeless('minecraft:stone','minecraft:dirt').stage('cactus')
  event.remove({});
});

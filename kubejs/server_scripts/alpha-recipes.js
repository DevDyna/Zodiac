ServerEvents.recipes((event) => {
  /**
   *
   * @param {Item[]|Item} inputs
   * @param {Item} output
   */
  let less = (inputs, output) => {
    if (!Array.isArray(inputs)) inputs = [inputs];

    event.shapeless(output, inputs);
  };

  /**
   *
   * @param {Item[]|Item} inputs
   * @param {Item} output
   */
  let shapex = (inputs, output) => {
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
    shapex(
      [
        null,input,null,input
      ],
      output
    );
  };

  less("aquaculture:driftwood", "4x minecraft:stick");

  r22("minecraft:stick", "aquaculture:driftwood");

  r22("minecraft:charcoal", "kubejs:charcoal_block");

  r22("aquaculture:driftwood", "2x minecraft:oak_planks");

  shapex(
    [
      "aquaculture:driftwood",
      "aquaculture:driftwood",
      null,
      "minecraft:oak_planks",
      "minecraft:oak_planks",
    ],
    "kubejs:barrel"
  );

  rstick(["aquaculture:worm", "kubejs:barrel"], "kubejs:composter", true);

  rsalter("minecraft:stick", "kubejs:fire_starter");

  event.shapeless("kubejs:limewater_bottle", [
    Item.of("minecraft:potion", '{Potion:"minecraft:water"}').strongNBT(),
    "kubejs:ash",
  ]);

  less(["kubejs:water_bottle", "kubejs:ash"], "kubejs:limewater_bottle");

  less("kubejs:barrel", "enderio:fluid_tank");
  event.recipes.enderio.tank(
    "minecraft:glass_bottle",
    "kubejs:limewater_bottle",
    Fluid.of("kubejs:limewater", 250),
    true
  );

  less(
    "kubejs:water_bottle",
    Item.of("minecraft:potion", '{Potion:"minecraft:water"}').strongNBT()
  );
  less(
    Item.of("minecraft:potion", '{Potion:"minecraft:water"}').strongNBT(),
    "kubejs:water_bottle"
  );

  event.recipes.enderio.tank(
    "kubejs:water_bottle",
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
    "kubejs:water_bottle",
    Fluid.of("minecraft:water", 250),
    true
  );

  event.recipes.enderio.tank(
    "embers:caminite_blend",
    "minecraft:clay_ball",

    Fluid.of("kubejs:limewater", 50),
    false
  );

  event.recipes.enderio.tank(
    "embers:sealed_planks",
    "#minecraft:planks",

    Fluid.of("kubejs:limewater", 50),
    false
  );

  event.recipes.enderio.tank(
    "railcraft:quarried_cobblestone",
    "#forge:cobblestone",

    Fluid.of("kubejs:limewater", 50),
    false
  );
});

ServerEvents.recipes((event) => {
  // event.shapeless('minecraft:stone','minecraft:dirt').stage('cactus')
  event.remove({});
});

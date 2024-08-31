ServerEvents.recipes((event) => {
  let less = (inputs, output) => {
    if (!Array.isArray(inputs)) inputs = [inputs];

    event.shapeless(output, inputs);
  };

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

  let r22 = (input, output, alter) => {
    let list = [];
    list.push(input);
    list.push(alter !== undefined ? alter : input);
    list.push(null);
    list.push(alter !== undefined ? alter : input);
    list.push(input);

    shapex(list, output);
  };

  less("aquaculture:driftwood", "2x minecraft:oak_planks");

  shapex(
    [
      "minecraft:stick",
      "minecraft:stick",
      null,
      "minecraft:stick",
      "minecraft:stick",
    ],
    "aquaculture:driftwood"
  );

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

  shapex(
    ["aquaculture:worm", null, null, "kubejs:composter"],
    "kubejs:composter"
  );

  r22("kubejs:pile_of_dirt", "kubejs:muddy_dirt", "kubejs:small_azalea_roots");
});

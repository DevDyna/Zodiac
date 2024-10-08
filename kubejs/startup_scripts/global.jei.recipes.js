// priority: 1
global.jei = {
  recipes: {
    click: [
      {
        input: {
          main_hand: "",
          off_hand: "",
          block: "minecraft:dirt",
          extra: "",
        },
        output: {
          block_replace: "minecraft:dirt",
          drop: [
            "kubejs:cobblestone_pebble",
            "kubejs:azalea_seeds",
          ],
          chance: [50, 10, 25],
          isCrouching: true,
          extra: "",
        },
      },
      {
        input: {
          main_hand: "",
          off_hand: "",
          block: "minecraft:rooted_dirt",
          extra: "",
        },
        output: {
          block_replace: "minecraft:dirt",
          drop: [
            "kubejs:cobblestone_pebble",
            "kubejs:small_azalea_roots",
            "aquaculture:worm",
            "anthillinside:ants",
            "kubejs:carrot_seeds",
          ],
          chance: [50, 75, 25, 10, 5],
          isCrouching: true,
          extra: "",
        },
      },
      {
        input: {
          main_hand: "aquaculture:driftwood",
          off_hand: "aquaculture:driftwood",
          block: "minecraft:oak_planks",
          extra: "",
        },
        output: {
          block_replace: "kubejs:firepit",
          drop: [],
          chance: [],
          isCrouching: false,
          extra: "unlit",
        },
      },
      {
        input: {
          main_hand: "aquaculture:driftwood",
          off_hand: "aquaculture:driftwood",
          block: "kubejs:charcoal_block",
          extra: "",
        },
        output: {
          block_replace: "minecraft:campfire",
          drop: [],
          chance: [],
          isCrouching: true,
          extra: "",
        },
      },
    ],
    composting: [
      {
        input: "kubejs:dirt_pile",
        output: ["minecraft:dirt"],
      },
      // {
      //   input: "kubejs:cobblestone_pebble",
      //   output: ["minecraft:cobblestone"],
      // },
      {
        input: "kubejs:stone_pebble",
        output: ["minecraft:stone"],
      },
    ],
    blockdrop: [
      {
        input: "minecraft:clay",
        output: {
          id: ["minecraft:clay_ball"],
          count: [4],
        },
      },
      {
        input: "minecraft:stone",
        output: {
          id: ["minecraft:cobblestone"],
          count: [1],
        },
      },
    ],
    crop_result: [
      {
        input: "kubejs:azalea_seed",
        output: {
          id: ["kubejs:small_azalea_leaf", "minecraft:stick"],
          tip: ["1-3", "1"],
        },
      },
      {
        input: "kubejs:carrot_seed",
        output: { id: ["minecraft:carrot"], tip: ["1-3"] },
      },
    ],
  },
};

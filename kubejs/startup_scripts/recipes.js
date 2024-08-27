// priority: 1
global.jei = {
  recipes: {
    click: [
      {
        input: {
          main_hand: "",
          off_hand: "",
          block: "minecraft:dirt",
        },
        output: {
          block_replace: "minecraft:dirt",
          drop: ["kubejs:stone_pebble", "kubejs:azalea_seeds"],
          chance: [50, 10],
          isCrouching: true,
        },
      },

      {
        input: {
          main_hand: "",
          off_hand: "",
          block: "minecraft:rooted_dirt",
        },
        output: {
          block_replace: "minecraft:dirt",
          drop: [
            "kubejs:stone_pebble",
            "kubejs:small_azalea_roots",
            "kubejs:small_worm",
            "anthillinside:ants",
          ],
          chance: [50, 75, 25, 10],
          isCrouching: true,
        },
      },
    ],
    composting: [
      {
        input:"kubejs:pile_of_dirt",
        output:["minecraft:dirt"]
      },
      {
        input:'kubejs:stone_pebble',
        output:["minecraft:cobblestone"],
      },
    ],
  },
};
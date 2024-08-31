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
          drop: [
            "kubejs:stone_pebble",
            "kubejs:azalea_seeds",
            "kubejs:pile_of_dirt",
          ],
          chance: [50, 10, 25],
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
            "aquaculture:worm",
            "anthillinside:ants",
            "kubejs:carrot_seeds",
          ],
          chance: [50, 75, 25, 10, 5],
          isCrouching: true,
        },
      },
      {
        input: {
          main_hand: "",
          off_hand: "",
          block: 'kubejs:muddy_dirt',
        },
        output: {
          block_replace: 'minecraft:dirt',
          drop: [
            "minecraft:clay_ball"
          ],
          chance: [25],
          isCrouching: true,
        },
      },
    ],
    composting: [
      {
        input: "kubejs:pile_of_dirt",
        output: ["minecraft:dirt"],
      },
      {
        input: "kubejs:stone_pebble",
        output: ["minecraft:cobblestone"],
      },
    ],
    blockdrop : [
      {
        input:'minecraft:clay',
        output:{
        id:['minecraft:clay_ball'],
        count:[4],
        }
      },
      {
        input:'minecraft:stone',
        output:{
        id:['minecraft:stone'],
        count:[],
        }
      }
    ]
  
  },
};

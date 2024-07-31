// priority: 1

Platform.mods.kubejs.name = "Zodiac Core";

global.jeiItems = [];
global.jei = {
  recipes: {
    click: [],
  },
};

const $BooleanProperty = Java.loadClass(
  "net.minecraft.world.level.block.state.properties.BooleanProperty"
);

const $IntegerProperty = Java.loadClass(
  "net.minecraft.world.level.block.state.properties.IntegerProperty"
);

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rnd50() {
  return Math.random() < 0.5;
}

function rnd75() {
  return Math.random() < 0.75;
}

function rnd25() {
  return Math.random() < 0.25;
}

function rndC(value) {
  return Math.random() < 0.01 * value;
}

let blockstate = (url, state, size) => {
  let result = { variants: {} };
  let models = [];
  let rotations = [0, 90, 180, 270];
  for (let i = 0; i < size; i++) {
    rotations.forEach((rot) => {
      models.push({ model: "" + url + state + i, y: rot });
    });
    result.variants[state + "=" + i] = models;
    models = [];
  }
  return result;
};

let campfireState = () => {
  let result = { variants: {} };
  let bool = [true, false];
  let decay = [0, 1, 2, 3];
  let faces = ["south", "west", "north", "east"];
  let rotations = [0, 90, 180, 270];
  let model = "";

  faces.forEach((face, index) => {
    bool.forEach((lit) => {
      decay.forEach((dec) => {
        if (!lit) {
          model = "minecraft:block/campfire_off";
        } else if (decay == 3) {
          model = "zodiac:block/campfire_burnout";
        } else {
          model = "minecraft:block/campfire";
        }

        result.variants["facing=" + face + ",lit=" + lit + ",decay=" + dec] = {
          model: model,
          y: rotations[index],
        };
      });
    });
  });

  return result;
};

let IHATEPROPERTIES = (input) => {
  let num = Number(input);
  num += 1;
  return num.toString();
};

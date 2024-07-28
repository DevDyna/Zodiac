// priority: 1

Platform.mods.kubejs.name = "Zodiac Core";

global.jeiItems = [];

const $BooleanProperty = Java.loadClass(
  "net.minecraft.world.level.block.state.properties.BooleanProperty"
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
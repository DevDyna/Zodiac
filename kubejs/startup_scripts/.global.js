// priority: 100

Platform.mods.kubejs.name = "Zodiac Core";

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

let IHATEPROPERTIES = (input) => {
  let num = Number(input);
  num += 1;
  return num.toString();
};

let multipartUtils = (base_model, stage_model) => {
  let result = { multipart: [{ apply: { model: base_model } }] };
  let rotations = [0, 90, 180, 270];
  let decay = [0, 1, 2, 3];
  let obj = {};

  decay.forEach((stage) => {
    obj = {
      when: { stage: stage },
      apply: [],
    };
    rotations.forEach((rot) => {
      obj.apply.push({
         model: stage_model + "stage" + stage, y: rot 
      });
    });
    result.multipart.push(obj);
  });
  console.log(result)
  return result;
};

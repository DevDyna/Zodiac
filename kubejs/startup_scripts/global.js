// priority: 1
global.jeiItems = []

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
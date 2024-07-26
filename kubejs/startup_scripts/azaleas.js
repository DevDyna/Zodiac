// priority: 0
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

StartupEvents.registry("block", (event) => {
  event
    .create("azalea", "crop")
    .age(7, (builder) => {
      builder
        .shape(0, 5, 0, 5, 11, 12, 11)
        .shape(1, 5, 0, 5, 11, 12, 11)
        .shape(2, 5, 0, 5, 11, 13, 11)
        .shape(3, 4.5, 0, 4.5, 11.5, 15, 11.5)
        .shape(4, 4, 0, 4, 12, 16, 12)
        .shape(5, 4, 0, 4, 12, 16, 12)
        .shape(6, 4, 0, 4, 12, 16, 12)
        .shape(7, 4, 0, 4, 12, 16, 12);
    })
    .survive((state, level, pos) => {
      return level.getBlockState(pos.below()).block.id != "minecraft:air";
    })
    .growTick(() => 1)
    .dropSeed(false)
    .crop("zodiac:azalea", 1)
    .item((seedItem) => {
      seedItem.texture("minecraft:item/apple");
    }).blockstateJson = blockstate("zodiac:block/", "age", 8);

  // const dir = [
  //   Facing.NORTH,
  //   Facing.SOUTH,
  //   Facing.EAST,
  //   Facing.WEST,
  //   Facing.DOWN,
  // ];

  

  
  event.create("minecraft:dirt")
  .soundType("rooted_dirt") // Set a material (affects the sounds and some properties)
  .hardness(0.5) // Set hardness (affects mining time)
  .resistance(0.5) // Set resistance (to explosions, etc)
  .requiresTool(false)
  .randomTick((tick) => {

    const faces = [
      Facing.NORTH,
      Facing.SOUTH,
      Facing.EAST,
      Facing.WEST,
      Facing.UP,
    ];

    const { block } = tick;
    let offset = block.offset(Facing.UP);
    let chance = rnd25() && rnd(0, Math.floor(128 / +offset.properties.get("age"))) == 1;

    if (offset == "zodiac:azalea") {
      block.set("minecraft:rooted_dirt");
    }
    faces.forEach((pos) => {
      if (block.offset(pos) == "minecraft:rooted_dirt" && chance) {
        faces.forEach((dir) => {
          if (block.offset(pos).offset(dir) == "zodiac:azalea" && chance) {
            block.set("minecraft:rooted_dirt");
          }
        });
      }
    });
  });

  //organic dirt -> mud
  event.create('zodiac:muddy_dirt').textureAll('minecraft:block/mud')
  //dry dirt -> sand
  event.create('zodiac:silty_dirt').textureAll('minecraft:block/sand')
  //pebble dirt -> gravel
  event.create('zodiac:rocky_dirt').textureAll('minecraft:block/gravel')



  event.create('zodiac:stick_crate').textureAll('minecraft:block/dirt')
  


});


StartupEvents.registry('item',event=>{


  event.create('zodiac:stone_pebble').texture('minecraft:stick')
  event.create('zodiac:pile_of_dirt').texture('minecraft:stick')
  event.create('zodiac:small_worm').texture('minecraft:stick')
  event.create('zodiac:small_azalea_roots').texture('minecraft:stick')


  

})
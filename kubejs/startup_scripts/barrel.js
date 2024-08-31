StartupEvents.registry("block", (event) => {
  event
    .create("kubejs:barrel")
    .item((item) => {
      item.modelJson({
        parent: "zodiac:block/barrel",
      });
    })
    .box(1, 0, 1, 15, 16, 15) //TODO NEED TO BE MORE CLEAN
    .defaultCutout()
    .model("zodiac:block/barrel");
});

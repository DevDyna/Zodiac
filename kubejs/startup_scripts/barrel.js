StartupEvents.registry("block", (event) => {
  event
    .create("zodiac:barrel")
    .item((item) => {
      item.modelJson({
        parent: "zodiac:block/barrel/template/empty",
      });
    })
    .box(1, 0, 1, 15, 16, 15) //TODO NEED TO BE MORE CLEAN
    .defaultCutout()
    .model("zodiac:block/barrel/template/empty");
});

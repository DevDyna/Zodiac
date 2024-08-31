StartupEvents.registry("block", (event) => {
  event
    .create("kubejs:barrel")
    .item((item) => {
      item.modelJson({
        parent: "zodiac:block/barrel",
      });
    })
    .model("zodiac:block/barrel");
});

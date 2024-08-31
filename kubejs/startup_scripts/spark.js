StartupEvents.registry("block", (event) => {
  event
    .create("zodiac:node", "animatable")
    .box(6,6,6,10,10,10)
    // .property($BooleanProperty.create("active"))
    // .box(5, 5, 5, 11, 11, 11)
    // .unbreakable()
    // .lightLevel(15)
    // .defaultState((state) => {
    //   state.set($BooleanProperty.create("active"), false);
    // })
    // .rightClick((click) => {
    //   if (click.item == "") {
    //   }
    // })
    .unbreakable()
    .animatableBlockEntity((info) => {
      info.addAnimation((state) =>
        state.setAndContinue(RawAnimation.begin().thenLoop("rotating"))
      );
    })
    .defaultGeoModel();
});

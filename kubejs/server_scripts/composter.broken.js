BlockEvents.broken("zodiac:composter", (event) => {
  if (event.block.properties.get("mature").toLowerCase() == "true") {
    global.jei.recipes.composting[
      Number(event.block.properties.get("type").toLowerCase())-1
    ].output.forEach((element) => {
      event.block.popItem(element);
    });
  }
});

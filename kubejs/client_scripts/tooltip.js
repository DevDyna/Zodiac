ItemEvents.tooltip((event) => {
  event.add("kubejs:composter", "Allow to combine items into blocks");

  event.add(["kubejs:water_bottle", "kubejs:limewater_bottle"], "§aNo Potion");

  event.add('watercollector:watercollector','§aGenerate Unlimited Water from nothing')

  event.addAdvanced('minecraft:potion',(item,advanced,text)=>{
    if(item.nbt == null){
        text.add(3,'§cERROR 404')
    }
  })
});

// GameStageEvents.stageAdded(event=>{
// 	event.addGameStage('cactus')
// })
// GameStageEvents.stageRemoved(event=>{

// })

ServerEvents.recipes(event=>{
    // event.shapeless('minecraft:stone','minecraft:dirt').stage('cactus')
    event.remove({})
})

ItemEvents.rightClicked((event) => {
  event.player.sendData("show", { list: global.jei.stage });
  //event.player.tell("added " + event.item + " on jei");
  global.jei.stage.push(event.item.id);
  //event.player.tell(global.jei.stage);
  //event.player.tell(event.player.stages.all)
});

ServerEvents.tick((event) => {
    event.server.scheduleInTicks(20,()=>{
        event.server.players.forEach((e) => {
            e.sendData("show", { list: global.jei.stage });
          });
    })
});

PlayerEvents.loggedIn((event) => {
  event.player.sendData("show", { list: global.jei.stage });
  
});

PlayerEvents.loggedOut(event=>{
    //event.server.persistentData.putArr()
    //jei.push([event.player.uuid,global.jei.stage])
})

// ItemEvents.rightClicked(event=>{
//     event.player.sendData('hide',{item:'minecraft:stone'})
//     event.player.tell('stage add_item removed')
// })

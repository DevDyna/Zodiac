let airs = ["minecraft:air", "minecraft:void_air", "minecraft:cave_air"];

// disable block breaking on specific position

BlockEvents.leftClicked((event) => {
  const { block, player } = event;
  let diff = 64 + block.y;
  let flag = true;

  if (!player.isCreative()) {
    if (diff > 0) {
      for (let i = 1; i < diff + 1; i++) {
        if (airs.indexOf(block.offset("down", i).id) == -1) {
          flag = false;
          break;
        }
      }
      if (flag) {
        player.statusMessage = "§l§cUnable to Break this block";
        event.cancel();
      }
    } else {
      player.statusMessage = "§l§cUnable to Break this block";
      event.cancel();
    }
  }
});

// disable bridge-placing between air canyons
      //TO DO   NOT WORK PROPERLY
// BlockEvents.rightClicked((event) => {
//   const { block, player } = event;
//   let diff = 64 + block.y;
//   let flag = true;

//   if (!player.isCreative()) {
//     if (event.item != null) {
//       if (diff > 0) {
//         for (let i = 1; i < diff + 1; i++) {
//           if (airs.indexOf(block.offset("down", i).id) == -1) {
//             flag = false;
//             break;
//           }
//         }
//         if (flag) {
//           player.statusMessage = "§l§cUnable to Place this block here";
//           event.cancel();
//         }
//       } else {
//         player.statusMessage = "§l§cUnable to Place this block here";
//         event.cancel();
//       }
//     }
//   }
// });

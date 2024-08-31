let tokens = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
  ];
StartupEvents.registry('item',event=>{
    tokens.forEach(e=>{

        event.create('token_'+e).texture('minecraft:coal')

    })

})

/*
north
 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, -7, -8, -67);
south
 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, -7, -8, 53);
east
 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, 53, -8, -7);
west
 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, -67, -8, -7);
*/
/*
n-e
 1 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, 18, -8, -62);
 2 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, 36, -8, -50);
 3 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, 48, -8, -32);
s-w
 1 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, -62, -8, 18);
 2 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, -50, -8, 36);
 3 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, -32, -8, 48);
n-w
 1 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, -32, -8, -62);
 2 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, -50, -8, -50);
 3 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, -62, -8, -32);
s-e
1 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, 18, -8, 48);
2 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, 36, -8, 36);
3 paste("minecraft:coal","15x8x15_1716072385301_schematic",0.1, 48, -8, 18);
*/
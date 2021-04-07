class Game {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {

      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play() {

    Player.getPlayerInfo();


    if (allPlayers !== undefined) {
      //var display_position = 100;
      form.hide();

      background("#454545");

      bground = createSprite(0, -4 * displayHeight, displayWidth, -5 * displayHeight);
      bground.addImage(bgroundImg);

      ship1 = createSprite(100, 200);
      ship1.addImage("ship1", ship1Img);

      ship2 = createSprite(300, 200);
      ship2.addImage("ship2", ship2Img);



      ships = [ship1, ship2];
      //index of the ships array
      var index = 0;


      //x and y position of the ships
      x = displayWidth / 2;
      y;

      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        ships[index - 1].depth = bground.depth + 1;

        ships[index - 1].scale = 0.3;

        //position the ships a little away from each other in x direction
        //x position value should change when xVel will change
        x = allPlayers[plr].xPos;
        


        //use data form the database to display the ships in y direction
        y = displayHeight - allPlayers[plr].distance;
        ships[index - 1].x = x;
        ships[index - 1].y = y;





        if (index === player.index) {
          fill("red");
          ellipse(x, y, 80, 80);
          camera.position.x = displayWidth / 2;
          camera.position.y = ships[index - 1].y
        }

        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

  

    if (keyIsDown(38) && player.index !== null) {
      yVel += 0.9;

      if (keyIsDown(37)) {
        xVel -= 0.2;
      }
      if (keyIsDown(39)) {
        xVel += 0.2;
      }
      player.update();
    }

    player.distance += yVel;
    //yVel += 0.9;
    player.xPos += xVel;
    //xVel += 0.9;

    
    console.log(player.xPos,player.distance);

    drawSprites();
  }
 
}

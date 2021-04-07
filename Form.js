class Form {

  constructor() {
    //placeholder is attribute name.

    this.input = createInput().attribute("placeholder","Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('reset');
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  

  display(){

    this.title.html("SHOOTER GAME").style('color', 'white');
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 70 , displayHeight/2 - 30);
    this.button.position(displayWidth/2 - 10, displayHeight/2 + 20);

    this.reset.position(displayWidth - 100,20);

    



    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.style('color', 'white');
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

   this.reset.mousePressed(()=>{

    player.updateCount(0);
    game.update(0);
    database.ref('/players').remove();


   })

  }
}

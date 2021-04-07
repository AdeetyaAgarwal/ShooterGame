var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var ships, ship1, ship2;

var ship1Img, ship2Img;
var bgroundImg;
var bground;

var x,y;

var bullet, bulletImg;

var xVel = 0;
var yVel = 0;


function preload(){

  ship1Img = loadImage("images/ship1.png");
  ship2Img  = loadImage("images/ship2.png");
 

  bgroundImg = loadImage("images/bground.jpg");

  bulletImg = loadImage("images/bullet.png");

  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

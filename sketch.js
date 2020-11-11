var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score;
var monkey , monkey_running;
var bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground, invisibleGround;
var survivalTime;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}

function setup(){
createCanvas(600,400);
  
// var message = "This is a message";
//   console.log(message);
  
   monkey = createSprite(50,350,20,50);
   monkey.addAnimation("running",monkey_running);
   monkey.scale = 0.1;
  
  
   ground = createSprite(0,390,600,20);
   ground.x = ground.width /2;
  
  invisibleGround = createSprite(300,390,600,10);
  invisibleGround.visible = false;
  
    
}

function draw(){
 background(360);
 text("survival time: "+ score, 450,50);
  
  
//   if(gameState === PLAY){
    
    
    
    
//   }
  
  
  if(keyDown("space")&& monkey.y >= 300) {
   monkey.velocityY = -12;
   
    }
 monkey.velocityY = monkey.velocityY + 1;
  spawnBananas();
  spawnObstacle();
  monkey.collide(invisibleGround);   
  drawSprites(); 
}

 function spawnObstacle(){
  if(frameCount % 100 === 0) {
  obstacle = createSprite(600,360,10,40);
   obstacle.scale = 0.1;
   obstacle.velocityX = -2;
   obstacle.addImage(obstacleImage);

  }
   }

function spawnBananas(){
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
  }
  
}
var PLAY =1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var invisibleGround;

function preload()
{

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  ground1 = loadImage("ground2.png");
 
}



function setup()
{
  createCanvas(600,600);
  
  monkey = createSprite(50,450,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  monkey.setCollider("circle",0,0,350);
 // monkey.debug = true;
  
  score=0;
  
  ground = createSprite(300,520,600,10);
  ground.addImage(ground1);
 // ground.scale = 2.5;
  
  invisibleGround=createSprite(300,530,600,10);
  invisibleGround.visible=false;
  
 
  
  
}


function draw() 
{
  background(224);
  text("Score: "+ score, 500,50);
  drawSprites();
  if(gameState === PLAY)
    {
      score = score+Math.round(getFrameRate()/60);
      ground.velocityX= -4;
      if(ground.x < 0){
        ground.x = ground.width/2;
      }

      if(keyDown("space")&& monkey.y>=300){
        monkey.velocityY = -10;  
      }
      monkey.velocityY = monkey.velocityY + 0.8;

      spawnBanana();
      spawnStone();
    }
  else if(gameState == END )
  {
      ground.velocityX= 0;
  }
  
  monkey.collide(invisibleGround);
   
  
}

function spawnBanana()
{
  if(frameCount%110==0)
    {
      banana = createSprite(600,200,100,20);
      banana.addImage(bananaImage);
      banana.scale = 0.18 ;
      banana.velocityX = -5;
    }
}
function spawnStone()
{
  
  if(frameCount%110==0)
    {
      obstacle = createSprite(600,500,100,20);  
      obstacle.addImage(obstacleImage);
      obstacle.scale = 0.16;
      obstacle.velocityX = -4;
    }
}





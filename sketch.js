
var monkey , monkeyRunning;
var banana ,bananaImage, obstacle, obstacleImage,ground,groundImage;
var FoodGroup, obstacleGroup,bananas,obstacles;
var score;

function preload(){
  
  
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
monkey=createSprite(100,250,20,20);
  monkey.addAnimation("monkey",monkeyRunning);
  monkey.scale=0.1;
  ground=createSprite(300,284,600,10);
  score=0;
  
  
}


function draw() {
background(300);
  drawSprites();
  ground.velocityX=-4;
   if (ground.x < ground.width/2){
      ground.x = ground.width/2;
   }
  bananas();
  obstacles();
  monkey.collide(ground);
if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
   text("Survival Time: "+ score, 300,50);
   score = score + Math.round(getFrameRate()/60);
    
}

function bananas(){
  if(frameCount% 80===0){
   banana = createSprite(600,80,10,10); 
  banana.addImage(bananaImage); 
    banana.scale=0.1;
  banana.y=Math.round(random(80,130));
   banana.velocityX=-4;
    banana.lifetime=150;
 }
  
}
function obstacles(){
  if(frameCount% 80===0){
    obstacle= createSprite(600,265,10,10); 
   obstacle.addImage(obstacleImage); 
   obstacle.scale=0.1;
 
   obstacle.velocityX=-4;
   obstacle.lifetime=150;
 }
  
}




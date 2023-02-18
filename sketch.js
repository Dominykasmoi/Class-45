var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacles

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

obstacle1img = loadImage("assets/obsBottom1.png")
obstacle2img = loadImage("assets/obsBottom2.png")
obstacle3img = loadImage("assets/obsBottom3.png")
}



function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   SpawnObstaclesBottom();
        drawSprites();
        
}

function SpawnObstaclesBottom(){
  if(World.frameCount % 60 === 0){  

    obstacle1 = createSprite(400,350,20,50);
    obstacle1.addImage(obstacle1img);
    obstacle1.scale = 0.07
    obstacle1.velocityX = -4

    var rand = Math.round (random(1,3))
    switch(rand){
      case 1 : obstacle1.addImage(obstacle1img)
      break; 
      case 2 :obstacle1.addImage (obstacle2img)
      break;
      case 3 :obstacle1.addImage (obstacle3img)
      break;
      default : break;
    }
  }
}
var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var pipeTop,pipeTopImg;
var pipeBottom,pipeBottomImg

function preload(){
bgImg = loadImage("assets/bg.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
pipeTopImg = loadImage("assets/TopPipe.png");
pipeBottomImg = loadImage("assets/Pipe.png");
}

function setup(){
 createCanvas(900,660);
   
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.5
bg.velocityX = -2;
bg.x = bg.width/2

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      

pipeTop = createSprite(900,50,30,100);
pipeTop.addImage(pipeTopImg);
pipeTop.scale = 0.7
pipeTop.velocityX = -3

pipeBottom = createSprite(900,560,30,200);
pipeBottom.addImage(pipeBottomImg);
pipeBottom.scale = 0.7
pipeBottom.velocityX = -3

//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

}

function draw() {
  
  background("black");

           if(bg.x < 0){
            bg.x = bg.width/2
           }  
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
        drawSprites();
        
}
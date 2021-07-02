var leftBulb,rightBulb;
var wire;

function preload(){
  offBulbImage= loadImage("bulb1.png")
  onBulbImage = loadImage("bulb2.png")
  cableImage = loadImage("wire.png")
}
function setup() {
  createCanvas(800,400);

  wire = createSprite(400,380,10,100)
  wire.addImage("wire", cableImage)
 
  leftBulb = createSprite(250, 200, 50, 50);
  leftBulb.addImage("b1", offBulbImage)
  leftBulb.addImage("b2", onBulbImage)

  rightBulb = createSprite(550, 200, 50, 50);
  rightBulb.addImage("b1", offBulbImage)
  rightBulb.addImage("b2", onBulbImage)

}

function draw() {
  background("lightyellow");  
  
  if(keyDown("right")){
    wire.x+=2
  }
  if(keyDown("left")){
    wire.x-=2
  }

  textSize(20)
  fill("red")
  text("Test the Bulb!", 350,30)
  
  if(wire.x - leftBulb.x < (wire.height + leftBulb.height)/2
  && leftBulb.x - wire.x < (wire.height + leftBulb.height)/2 &&
  wire.x - leftBulb.x < (wire.width + leftBulb.width)/2
  && leftBulb.x - wire.x < (wire.width + leftBulb.width)/2){

    leftBulb.changeImage("b2", offBulbImage)  
  }
  else{
    leftBulb.changeImage("b1", onBulbImage)
  }

  
  if(wire.x - rightBulb.x < (wire.height + rightBulb.height)/2
  &&rightBulb.x - wire.x < (wire.height + rightBulb.height)/2 &&
  wire.x - rightBulb.x < (wire.width + rightBulb.width)/2
  && rightBulb.x - wire.x < (wire.width + rightBulb.width)/2){
 
    rightBulb.changeImage("b2", offBulbImage) 
  } 
  else{
    rightBulb.changeImage("b1", onBulbImage)
  }

  drawSprites();

}
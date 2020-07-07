var fixedRect, movingRect, movingRect2;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect2 = createSprite(400,500,50,50);
  movingRect2.shapeColor = "green";

  movingRect2.velocityY = -5;
  fixedRect.velocityY = 5;

  gameObject1 = createSprite(100,50,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,50,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,50,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,50,50,50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

if (isTouching(movingRect, gameObject2)){
  movingRect.shapeColor = "red";
  gameObject2.shapeColor = "red"
}
else{
  movingRect.shapeColor = "green";
  gameObject2.shapeColor = "green";
}

bounceOff(movingRect2,fixedRect);
  
  drawSprites();
}




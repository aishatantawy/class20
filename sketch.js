var fixedRect,movingRect;

function setup() {
  createCanvas(800,800);

fixedRect = createSprite(200,200,50,50);
fixedRect.shapeColor = "green";
 
movingRect = createSprite(200,100,50,50); 
movingRect.shapeColor = "green";
}

function draw() {
  background(0);
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

 console.log(movingRect.y - fixedRect.y);


 if(movingRect.x - fixedRect.x < 50 && fixedRect.x - movingRect.x < 50 
    && movingRect.y - fixedRect.y < 50 && fixedRect.y - movingRect.y < 50){
   movingRect.shapeColor = "red";
   fixedRect.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }
 



drawSprites();
}
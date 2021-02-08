var balloon,backgroundImg;
var balloonImg,background;
var database,position;
function preload(){
backgroundImg=loadImage("Hot Air Ballon-01.png");
balloonImg=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
}


function setup() {
  createCanvas(500,500);
  background=createSprite(400, 200, 50, 50);
  balloon=createSprite(200,200,300,30);

  var balloonPosition=database.ref('balloon/position');
    balloonPosition.on("value",readPosition,showError);
}

function draw() {
  background(255,255,255); 
  background.addImage("background",backgroundImg); 
  balloon.addAnimation("balloon",balloonImg);

  text("Use arrow keys to move the balloon!!");
  testSize(5);
  fill("blue");
  stroke("green");

  if(keyDown(LEFT_ARROW)){
      balloon.x=balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    
    writePosition(0,-10);
    balloon.scale=balloon.scale-0.01;
  }
  else if(keyDown(DOWN_ARROW)){
   
    writePosition(0,10);
    balloon.scale=balloon.scale+0.01
  }
  readPosition();
  writePosition();
  showError();
  drawSprites();
}

function readPosition(data){
  ballposition=data.val();
  balloon.x=position.x;
  balloon.y=position.y;
}

function writePosition(x,y){
  database.ref('balloon/position').set({
    'x':position.x+x,
    'y':position.y+y
})

}

function showError(){
  console.log("Error in writing the database");
}

  
    






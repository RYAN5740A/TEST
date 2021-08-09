function preload(){
  bg=loadImage("snow2.jpg")
  snowFlakesImg=loadImage("snow4.webp")
  boyRunning=loadAnimation("")
}
function setup() {
  createCanvas(800,400);
  boy=createSprite(400, 200, 50, 50);
  
  // snowFlakes=new Snow (1000,100,40,40)
}

function draw() {
  background(bg);
  // snowFlakes.display();
  drawSprites();
}
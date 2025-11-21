function preload(){
  trex_running=loadAnimation("trex_1.png", "trex_2.png", "trex_3.png");
  ground_img=loadImage("ground.png");
  cloud_img=loadImage("cloud.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  trex=createSprite(90,630,20,20);
  ground=createSprite(width/2,height-30,width+1000,200);
  ground.x=width/2;
  ground.addImage("moving", ground_img);
  trex.addAnimation("running", trex_running);
  trex.scale=0.2;
  trex.depth=ground.depth;
  trex.depth=trex.depth+1;
}
function draw(){
  background("lightblue");
  ground.velocityX=-6;
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  spawnClouds();
  spawnObstacles();
  drawSprites();
}
function spawnClouds(){
  if (frameCount%100==0){
  var cloud=createSprite(1500,80,20,20);
  cloud.y=Math.round(random(50,200))
  cloud.addImage("moving", cloud_img);
  cloud.velocityX=-6;
  }
}
function spawnObstacles(){
  if (frameCount%400==0){
  var obstacle=createSprite(windowWidth-500,620,10,10);
  obstacle.addImage(obstacle1);
  obstacle.scale=0.9;
  obstacle.velocityX=-6;
  }
}
var car,wall;
var speed,weight,b1,b2,b3;

function setup(){
  speed=random(55,90);
  weight=random(400,1500);
  car =createSprite(50,200,50,50);
  wall=createSprite(1300,200,20,height/2);
 wall.shapeColor=color(80,80,80);
 
 b1=createSprite(50,100,2470,3);
 b1.shapeColor=color(211,211,211)
b2=createSprite(50,200,2450,3)
b2.shapeColor=color(211,211,211)
b3=createSprite(50,300,2470,3)
b3.shapeColor=color(211,211,211)
  car.velocityX=speed;
}

function draw(){
  createCanvas(1600,400);

  background(0)
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0)
    }
  if(deformation<180 &&deformation>100){
    car.shapeColor=color(230,230,0)
  }
  if(deformation<100){
    car.shapeColor=color(0,255,0)
  }
  drawSprites();
}
}
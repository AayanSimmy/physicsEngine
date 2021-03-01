
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var mew
var ground
var mewtwo
var energyBallIMage
var mewImage
var mewtwoImage
function preload()
{
  mewtwoImage=loadImage("mewtwoImage.jpg")
  mewImage=loadImage("mewImage.jpg")
  energyBallIMage=loadImage("energyBallIMage.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  ground=new Ground(400,650,800,20)
  
  mewtwo=rect(625,425,50,50)
  mew=rect(200,50,50,50)
	energyBall=rect(210,50,50)
	slingShot = new SlingShot(energyBall,mew);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  ground.display()
  image(mewImage,200,610,50,50)
  image(mewtwoImage,320,610,50,50)
  image(energyBallImage,200,610,50,50)
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(energyBall.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly()
}




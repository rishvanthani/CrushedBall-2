
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground
var box


function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball=new PaperBall()
	ground=new Ground(600,683,1200,30)
	box=new Box(980,500)
	

	Engine.run(engine);
  
}


function draw() {
  
  background("pink");
  
  ball.display()
  ground.display()
  box.display()
 
 
 
 
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){}
  
	Matter.Body.applyForce(ball.body,ball.body.position,{x:600,y:-500})
  }
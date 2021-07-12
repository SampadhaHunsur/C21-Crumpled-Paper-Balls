
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;

function preload()
{
	
}


function setup() {
	createCanvas(800, 700);

	groundObj = new Ground(width/2,670,width,20); 
	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1500,600,20,120)


	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		frictionAir : 0,
		density : 1.2
	} 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(150,20,20,ball_options);
	World.add(world,ball);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);  
  background("black");
  Engine.update(engine) 
  ellipse(ball.position.x, ball.position.y, 20)
  groundObj.display()
 

  
  drawSprites();
 
} 

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{ x:0, y:0 },{x:0.05, y:0} ) 
		Matter.Body.applyForce(ball,{ x:0, y:0 },{x:0, y:-0.05} )

	}


}




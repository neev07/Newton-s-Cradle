const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,180,250,20);

	bob1 = new Bob(400,380,30);
	bob2 = new Bob(350,380,30);
	bob3 = new Bob(300,380,30);
	bob4 = new Bob(450,380,30);
	bob5 = new Bob(500,380,30);

	rope1 = new Chain(bob1.body, roof.body);
	rope2 = new Chain(bob2.body, roof.body);
	rope3 = new Chain(bob3.body, roof.body);
	rope4 = new Chain(bob4.body, roof.body);
	rope5 = new Chain(bob5.body, roof.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}

function mousePressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.positon,{x:-85,y:80});
	}
}
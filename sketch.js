
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = createSprite (400, 100,500,50);
	roofObject = new Roof(400,100,500,50)

	bobDiameter = 40;

	

	bobObject1 = new Bob (400,400, 20);
	rope1 =new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

	bobObject2 = new Bob (420,400, 20);
	rope2 =new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	
	bobObject3 = new Bob (440,400, 20);
	rope3 =new Rope(bobObject3.body,roofObject.body,-bobDiameter*0, 0)
	
	bobObject4 = new Bob (460,400, 20);
	rope4 =new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	
	bobObject5 = new Bob (480,400, 20);
	rope5 =new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(200);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x: -100,y:-100});
	   
	 }
	}

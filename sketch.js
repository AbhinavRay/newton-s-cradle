
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof,rope1,rope2,rope3,rope4,rope5

function preload(){
	
}

function setup() {
	createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/4.1,50,400,25)

	Bob1 = createSprite(270,width/2.25,50,50)
	Bob1.shapeColor = color("green")
	Bob2 = createSprite(330,width/2.25,50,50)
	Bob2.shapeColor = color("green")
	Bob3 = createSprite(390,width/2.25,50,50)
	Bob3.shapeColor = color("green")
	Bob4 = createSprite(450,width/2.25,50,50)
	Bob4.shapeColor = color("green")
	Bob5 = createSprite(510,width/2.25,50,50)
	Bob5.shapeColor = color("green")

	rope1 = new Rope(Bob1,roof,270,100)
	rope2 = new Rope(Bob2,roof,330,100)
	rope3 = new Rope(Bob3,roof,390,100)
	rope4 = new Rope(Bob4,roof,450,100)
	rope5 = new Rope(Bob5,roof,510,100)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);  
  drawSprites();
  roof.display();
  rope1.display();
}
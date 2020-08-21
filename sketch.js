
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin1,dustbin2,dustbin3

function preload(){
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper=new Paper();
	 ground=new Ground(600,690,1200,20);
	dustbin1 = new Dustbin(990,500,200,20);
	 dustbin2 = new Dustbin(880,600,150,150);
	dustbin3 = new Dustbin(1100,500,150,150);


	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background("white");
  paper.display();
  ground.display();
//  dustbin1.display();
  dustbin2.display();
 // dustbin3.display();

}

function keyPressed(){
     if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-120})
	 }
}

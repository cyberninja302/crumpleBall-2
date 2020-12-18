
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground
var box1, box2, box3

function preload()
{
	dustbinImage=loadImage("dustbingreen.png")
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,300)

	ground = new Ground(400,480,800,10)

	box1 = new Box (550,420,10,100)
	box2 = new Box (600,470,100,10)
	box3 = new Box (650,420,10,100)

	Engine.run(engine);
  
}


function draw() {

 background("white")
 
	paper.display();
  
	ground.display();

	//box1.display();
	//box2.display();
	//box3.display();
	imageMode(CENTER)
image(dustbinImage,600,420,150,100)

  

  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
console.log("uparrow key is pressed")
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-100})
	}
}





var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,left,right,base; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(700, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2,height-35, width,10);
	groundSprite.shapeColor=color(255)

	leftSprite=createSprite(width/2-100, 610, 20,100);
	leftSprite.shapeColor = "red"; 

	rightSprite=createSprite(width/2+100, 610, 20,100);
	rightSprite.shapeColor = "red"; 

	baseSprite=createSprite(width/2, 660, 200 ,20);
	baseSprite.shapeColor = "red"; 
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic: true} );
	 World.add(world, ground);

	 left = Bodies.rectangle(width/2-80, 600, 20,100, {isStatic: true} );
	 World.add(world, left);

	 right= Bodies.rectangle(width/2+80, 600, 20,10, {isStatic: true} );
	 World.add(world, right);

	 base = Bodies.rectangle(width/2, 100, 200 ,20 , {isStatic: true} );
	 World.add(world, base);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lime");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
     //Look at the hints in the document and understand how to make the package body fall only on
 }
}

  



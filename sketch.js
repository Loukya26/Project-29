const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;

var stonesArr = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
    
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  frameRate(80);

  ground = new Base(width/2,height-40,width,30)
  left = new Base(50,height/2+50,120,120)
  jointPoint = new Base(50,height/2+50,120,120)
  right  = new Base(width-50,height/2+50,120,120)
  bridge  = new Bridge(25,{x:width-50,y:height/2+50})
  
  Matter.Composite.add(bridge.body,jointPoint)
  jointLink = new Link(bridge, jointPoint)

  for(var i = 0;i<8;i++){
    var x = random(width/2-150,width/2+150)
    var y = random(0,100)
    var stone = new Stone(x,y)
    stonesArr.push(stone)

  }
}

function draw() {
  background(51);
  Engine.update(engine);
for (var i = 0;i<8;i++){
   stonesArr[i].display()
}

  ground.display()
  left.display()
  right.display()
  bridge.show()
  
}

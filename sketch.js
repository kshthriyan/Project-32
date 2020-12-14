const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var pimg;
var score = 0;

function preload(){
  pimg=loadImage("img/polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(450,900,900,20);
   stand1 = new Stand(390,300,250,10);
   stand2 = new Stand(700,200,200,10);
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);
  blocks1 = new Box(640,175,30,40);
  blocks2 = new Box(670,175,30,40);
  blocks3 = new Box(700,175,30,40);
  blocks4 = new Box(730,175,30,40);
  blocks5 = new Box(760,175,30,40);
  blocks6 = new Box(670,135,30,40);
  blocks7 = new Box(700,135,30,40);
  blocks8 = new Box(730,135,30,40);
  blocks9 = new Box(700,95,30,40);
  Engine.run(engine);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  slingShot = new Slingshot (this.ball , {x:200,y:100});

score++


}
function draw() {
  background(56,44,44); 
  textSize(20);
  fill("yellow");
  text("Drag the Hexagonal Stone and Release it to launch it towards the blocks",100,30);
  text("Score:"+score,800,30);
  console.log(score);
  ground.display();
   stand1.display();
   stand2.display();
  strokeWeight(2);
  stroke(15);
   fill("blue");
   block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("blue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
   fill("pink")
   blocks9.display();

 
   block1.score();
   block2.score();
   block3.score();
   block4.score();
   block5.score();
   block6.score();
   block7.score();
   block8.score();
   block9.score();
   block10.score();
   block11.score();
   block12.score();
   block13.score();
   block14.score();
   block15.score();
   block16.score();
   blocks1.score();
   blocks2.score();
   blocks3.score();
   blocks4.score();
   blocks5.score();
   blocks6.score();
   blocks7.score();
   blocks8.score();
  blocks9.score();
   

  fill("gold");
  slingShot.display();


  imageMode(CENTER)
  image(pimg ,ball.position.x,ball.position.y,40,40);
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}


function keyPressed(){
  if(keyCode === 32){
  slingShot.attach(this.ball);
  } 
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;

var ball;

var option = {
  restitution : 0.95
}


function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(300,390,600,20);
  right = new Ground(590,350,10,100);
  left = new Ground(480,350,10,100);

  ball = Bodies.circle(20,200,20,option);

  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background("darkgreen");
  ground.show();
  left.show();
  right.show();
  //console.log(ball.position.y);
  fill("lightblue");
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x : 0.05,y : -0.05});
  }
}
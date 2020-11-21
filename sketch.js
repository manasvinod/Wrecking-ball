
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1
var world;
function setup() {
createCanvas(1600, 700);
//rectMode(CENTER);

engine = Engine.create();
world = engine.world;
ground1=new ground(800,600,1600,20);
box1=new box(900,100,70,70);
box2=new box(900,100,70,70);
box3=new box(900,100,70,70);
box4=new box(900,100,70,70);
box5=new box(900,100,70,70);
box6=new box(900,100,70,70);
box7=new box(800,100,70,70);
box8=new box(800,100,70,70);
box9=new box(800,100,70,70);
box10=new box(800,100,70,70);
box11=new box(800,100,70,70);
box12=new box(800,100,70,70);
box13=new box(700,100,70,70);
box14=new box(700,100,70,70);
box15=new box(700,100,70,70);
box16=new box(700,100,70,70);
box17=new box(700,100,70,70);
box18=new box(700,100,70,70);
box19=new box(700,100,70,70);
box20=new box(700,100,70,70);
ball1=new ball(200,200,80,80)
rope1=new rope(ball1.body,{x:500,y:50})
Engine.run(engine);

}

function draw() {
rectMode(CENTER);
background(230);
ground1.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
ball1.display()
rope1.display()
}
function mouseDragged() {

Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});

}


class ball
{
constructor(x,y,width,height,angle)
{
var options={
isStatic:false,
frictionAir:0.005,
density:1.0
}
this.x=x;
this.y=y;
this.width=width
this.height=height
this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)
World.add(world, this.body);
}
display()
{
var angle=this.body.angle
var ballpos=this.body.position;
push()
translate(ballpos.x, ballpos.y);
rotate(angle)
rectMode(CENTER)
fill(255,0,255)

ellipse(0,0,this.width, this.height);
pop()

}
}
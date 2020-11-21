class rope{

    constructor(body1,point2)
    { 
    var options={
    bodyA:body1,
    pointB:point2,
    stiffness:1.2,
    length:250
    }
    this.pointB=point2
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
    }
    display()
    {
    var pointA=this.rope.bodyA.position;
    var pointB=this.pointB;
    strokeWeight(2);
    stroke("brown")
    line(pointB.x,pointB.y,pointA.x,pointA.y);
    }
    
    }
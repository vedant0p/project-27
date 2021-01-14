class Bob
{

constructor(x,y,r)
{
    var options={
        
        restitution:1,
        friction:0,
        density:0.8
    }
this.x=x
this.y=y
this.r=r
this.body = Bodies.circle(this.x,this.y,this.r,options)
World.add(world, this.body);

}
display()
{

var boss = this.body.position;

push()
translate(boss.x,boss.y);
ellipseMode(RADIUS)
fill(255,0,255)
ellipse(0,0,this.r,this.r);
pop()

}

}
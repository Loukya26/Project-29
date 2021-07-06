class Stone{
    constructor(x,y){
        var options = {
            restitution:0.1 
        }
        this.body = Bodies.circle(x,y,30,options)
        this.r = 30
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push ()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r)
        pop()
    }

}
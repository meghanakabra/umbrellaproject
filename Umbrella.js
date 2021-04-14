class Umbrella{
    constructor(x, y, radius){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x, y, radius+95, options);
        this.radius = radius;
        this.image = loadImage("walking_1.png")
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 290, 290);
    }
}
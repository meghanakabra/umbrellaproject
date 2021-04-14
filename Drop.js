class Drop{
    constructor(x, y, radius, angle){
        var options = {
            isStatic : false,
            friction : 0.0001,
            restitution : 0.1
        }
        this.body = Bodies.circle(x, y, 3, options);
        this.radius = 3;
        
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(0, 102, 255);
        ellipse(0, 0, this.radius, this.raadius);
        pop();
    }
    updateY(){
        if (this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x : random(0, 600), y : random(-105, 0)});
        }
    }
}
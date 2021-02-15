class Monster {
    constructor(x, y, radius) {
        var options = {isStatic: false, density: 0.5};
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        this.radius = radius;
        this.image = loadImage("Images/Monster-01.png");
        World.add(world, this.body);
    }

    display() {
       var pos = this.body.position;
       push();
       translate(pos.x, pos.y);
       imageMode(CENTER);
       image(this.image, 0, 0, 200, 200);
       pop();
    }
}
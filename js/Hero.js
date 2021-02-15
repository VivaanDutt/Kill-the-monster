class Hero {
    constructor(x, y, radius) {
        var options = {isStatic: false, density: 0.5};
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("Images/Superhero-02.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 400, 200);
        pop();
    }
}
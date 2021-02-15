class Fly {
    constructor(bodyA, pointB) {
        var options = {bodyA: bodyA, pointB: pointB, stiffness: 20, length: 10};
        this.pointB = pointB;
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }
    display() {
        var pointA = this.fly.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3);
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
    }

    Fly() {
        this.fly.bodyA = null;
    }

    attach(body) {
        this.fly.bodyA = body;
    }
}
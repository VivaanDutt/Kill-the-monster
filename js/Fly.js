class Fly {
    constructor(bodyA, pointB) {
        var options = {bodyA: bodyA, pointB: pointB, stiffness: 10, length: 5};
        this.bodyA = bodyA;
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

    release() {
        this.fly.bodyA = null;
    }

    attach(body) {
        this.fly.bodyA = body;
    }
}
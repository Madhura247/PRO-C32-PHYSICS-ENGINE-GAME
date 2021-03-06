class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bow = loadImage('Images/bow.jpg');
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
        
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.bow,90, 90, 200, 200);
           
    }
    
}
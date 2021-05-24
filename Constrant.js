class Chain{

    constructor(bodyA,bodyB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:10
    }    
    this.chain=Matter.Constraint.create(options)
    World.add(world,this.chain)

    }
    display(){
        var piontA=this.chain.bodyA.position
        var piontB=this.chain.bodyB.position
        strokeWeight(5)
    line(piontA.x,piontA.y,piontB.x,piontB.y)
}

}
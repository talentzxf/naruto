import {Sphere} from 'Chakra/Geometry/Sphere.js'
import {ForceSystem} from "Chakra/Mechanics/Force.js";
import {Vector} from "Chakra/Algebra/Vector.js"

class Ball extends Sphere {
    constructor(center, radius, mass) {
        super(center, radius)
        if (mass != undefined) {
            this.mass = mass
        } else {
            this.mass = 1.0
        }

        this.forceSystem = new ForceSystem()
        this.speed = new Vector([0,0,0])
    }

    setSpeed(speed){
        if(speed instanceof Array){
            speed = new Vector(speed)
        }
        this.speed = speed
    }

    setMass(mass) {
        this.mass = mass
    }

    addForce(f){
        this.forceSystem.addForce(f)
    }

    update(dt){
        var objF = this.forceSystem.mainMoment
        var accelerate = objF.multi(1.0/this.mass)
        this.speed.iadd(accelerate.multi(dt))
        this.center.iadd(this.speed.multi(dt))
    }
}

export {Ball}
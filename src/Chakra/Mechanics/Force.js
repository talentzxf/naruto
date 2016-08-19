'use strict'
import {Vector} from '../Algebra/Vector.js';
// A force contains two factors
// 1. A free vector indicates magnitude and direction of force
// 2. Point of action
class Force{
    constructor(){
        if( arguments.length != 2 )
            throw "Pleaes input two vectors, first one is force direction/magnitude. Second is point of action. Current argument length" + arguments.length

        if(arguments[0] instanceof Vector && arguments[0].rows == 3){
            this.force = arguments[0];
        }else{
            throw "First argument is not vector or dimension not match!"
        }


        if(arguments[1] instanceof Vector && arguments[1].rows == 3 ){
            this.point = arguments[1]
        }else{
            throw "Second argument is not vector or dimension not match!"
        }
    }
}

class ForceSystem{
    constructor(){
        this.forces = [];
        this.mainMoment = new Vector(3);
        for(var i = 0; i < arguments.length; i++){
            this.forces.push(arguments[i]);
            this.mainMoment.add()
        }
    }

    torqueSimplifyTo(p){
        // p should be a 3d vector.
        if(!(p instanceof Vector ) && p.rows != 3){
            throw "P is not vector or dimension of p is not 3!";
        }

        var mainTorque = null;
        for(var i = 0 ; i < this.forces.length ; i++){
            var torque = new Torque(p, this.forces[i]);
            if(mainTorque == null){
                mainTorque = torque;
            }else{
                mainTorque.add(torque);
            }
        }
        return mainTorque;
    }

}

export {Force}
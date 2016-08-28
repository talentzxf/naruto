'use strict'
import {Vector} from '../Algebra/Vector.js';
import {Torque} from './Torque.js';
// A force contains two factors
// 1. A free vector indicates magnitude and direction of force
// 2. Point of action
class Force extends Vector{
    constructor(){
        if( arguments.length != 1 || arguments.length != 2 )
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

        // Main moment is actually the join force but is a free vector. Representing direction and magnitude of the join force.
        this.mainMoment = new Vector(3);
        for(var i = 0; i < arguments.length; i++){
            this.addForce(arguments[i])
        }
    }

    addForce(f){
        if(!(f instanceof Force)){
            throw "Only force can be added for force system!"
        }
        this.forces.push(f);
        this.mainMoment.iadd(f.force);
    }

    // Simplify the force system.
    // May encounter three types of results.
    // 0. Force balance. i.e. mainMoment=0 and mainTorque is zero.
    // 1. Force couple
    // 2. Joint force
    // 3. Force screw
    simplify(){
        // Randomly pick a point to test.
        let testPoint = new Vector([0,0,0]);
        var simplifiedRes = simplifyTo(testPoint);
        if(this.mainMoment.norm2() == 0){
            // Force == 0 , Torque == 0. Balance
            if(simplifiedRes.T.norm2() == 0){
                return {status:0}
            } else {
                // Force == 0 , Torque == 0. Equal to a Force dual.
                return {status:1, torque:simplifiedRes.T}
            }
        }

        // Force <> 0, Torque == 0. Can be simplified as a Joint force to several points.
        if(simplifiedRes.T.getTorque().norm2() == 0){
            return {status:2, force: new Force( this.mainMoment , testPoint )};
        }else{
            // The most complicated case. Force <>0 and Torque<>0
            // Calculate the invariant variable T dot F.
            var TdF = simplifiedRes.T.getTorque().dot(this.mainMoment);
            if(TdF == 0 ){

            }
        }
    }

    simplifyTo(p){
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
                mainTorque = mainTorque.add(torque);
            }
        }
        return {"F": this.mainMoment, 'T': mainTorque};
    }

}

export {Force,ForceSystem}
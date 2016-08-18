import {Vector} from '../Algebra/Vector.js';
import {Force} from './Force.js';
// input should be r, F.
// p is the action point.
// F is the force
class Torque{
    constructor(){
        if(arguments.length != 2 ){
            throw "Need two arguments. p and F"
        }

        if(!(arguments[0] instanceof Vector)){
            throw "First argument should be a Vector! This is the p: the action point."
        }

        if(!(arguments[1] instanceof Force)){
            throw "Second argument should be a Force!"
        }

        // r = F.point - action point
        this.r = arguments[1].point.sub( arguments[0] );
        this.F = arguments[1].force;

        this.torque = this.r.cross(this.F);
    }

    getTorque(){
        return this.torque;
    }
}

export {Torque}
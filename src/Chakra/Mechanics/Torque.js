import {Vector} from '../Algebra/Vector.js';
import {Force} from './Force.js';
import {Matrix} from '../Algebra/Matrix.js';
// input should be r, F.
// p is the action point.
// F is the force
class Torque extends Vector{
    constructor(){
        if(arguments.length==1 && ( arguments[0] instanceof Torque || arguments[0] instanceof Matrix) ){
            // clone the torque
            super(arguments[0]);
            return;
        }

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
        let r = arguments[1].point.sub( arguments[0] );
        let F = arguments[1];

        super(r.cross(F));
    }
}

export {Torque}
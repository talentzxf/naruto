import {Vector} from './Vector.js';

class Quaternion extends Vector{
    constructor(){
        if(arguments.length != 1){
            throw "Only 1 argument was required."
        }

        if(arguments[0].rows != 4 || arguments[0].cols != 1){
            throw "Dimension not match. Should input a 4d Vector"
        }

        if(arguments[0] instanceof Vector){
            super(arguments[0]);
        }
    }

    multi(m){
        if(m instanceof Quaternion){

        }
    }
}

export {Quaternion}
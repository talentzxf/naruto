import {Vector} from '../Algebra/Vector.js';
class Point3d extends Vector{
    constructor(){
        if(arguments[0] instanceof Vector && arguments[0].rows == 3){
            super(arguments[0])
        }else{
            throw "First argument is not vector or dimension not match!"
        }
    }
}

export {Point3d}
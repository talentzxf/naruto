/**
 * Column Vector.  Internally a n*1 matrix
 */
import {Matrix} from './Matrix.js';
class Vector extends Matrix{
    constructor(){
        if( arguments.length != 1 )
            assert("Constructor of vector should only have 1 argument.")
        if(arguments[0] instanceof Array){
            var data = arguments[0];
            super([data])
        }else{
            super(arguments[0], 1);
        }
    }

    add(otherVec){
        if(!(otherVec instanceof Vector)){
            assert("Vector can only add to another vector")
        }

        return super.add(otherVec)
    }
}

export {Vector}
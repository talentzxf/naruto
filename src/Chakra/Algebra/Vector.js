/**
 * Column Vector.  Internally a n*1 matrix
 */
import {Matrix} from './Matrix.js';
class Vector extends Matrix{
    constructor(){
        if( arguments.length != 1 )
            throw "Constructor of vector should only have 1 argument.";
        if(arguments[0] instanceof Array){
            // Convert from row vector to col vector
            var data = arguments[0];
            super(new Matrix([data]).T().data)
        }else{
            super(arguments[0], 1);
        }
    }

    add(otherVec){
        if(!(otherVec instanceof Vector)){
            throw "Vector can only add to another vector";
        }

        return new Vector(super.add(otherVec).data);
    }

    getEle(idx){
        if(arguments.length != 1 && arguments.length != 2 ){
            throw "Only 1 argument should be provided, provided:" + arguments.length + ".";
        }

        if(arguments.length == 2){
            if(arguments[1] != 0 )
                throw "If provide two arguments, second should be 0."
        }

        return super.getEle(idx,0);
    }
}

export {Vector}
'use strict'
import {Vector} from '../Algebra/Vector.js';
// A force contains two factors
// 1. A free vector indicates magnitude and direction of force
// 2. Point of action
class Force{
    constructor(){
        if( arguments.length != 2 )
            throw "Pleaes input two vectors, first one is force direction/magnitude. Second is point of action"

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

export {Force}
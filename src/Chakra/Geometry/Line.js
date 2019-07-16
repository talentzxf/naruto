import {Point2d,Point3d} from './Point.js'
class Line2d{
    constructor(){
        if(arguments.length == 2){
            if((arguments[0] instanceof Point2d) && (arguments[1] instanceof Point2d)){
                this.p1 = arguments[0];
                this.p2 = arguments[1];
            }
        } else {
            throw "Argument wrong!"
        }
    }
}

class Line3d{
    constructor(){
        if(arguments.length == 2){
            if((arguments[0] instanceof Point3d) && (arguments[1] instanceof Point3d)){
                this.p1 = arguments[0];
                this.p2 = arguments[1];
            }
        } else {
            throw "Argument wrong!"
        }
    }
}

export {Line2d, Line3d}
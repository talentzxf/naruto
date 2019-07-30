import {Point3d} from './Point.js'
var THREE = require("n3d-threejs")

class Sphere {
    constructor() {
        // Center + Radius
        if (arguments.length == 2) {
            if ((arguments[0] instanceof Point3d) ) {
                this.center = arguments[0];
            } else if((arguments[0] instanceof Array)){
                this.center = new Point3d(arguments[0])
            }

            if(typeof arguments[1] == "number"){
                this.radius = arguments[1];
            }
        } else {
            throw "Argument wrong!"
        }
    }
}

export {Sphere}
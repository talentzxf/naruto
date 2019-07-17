import {Point3d} from './Point.js'
var THREE = require("n3d-threejs")

class Sphere {
    constructor() {
        // Center + Radius
        if (arguments.length == 2) {
            if ((arguments[0] instanceof Point3d) && (typeof arguments[1] == "number")) {
                this.center = arguments[0];
                this.radius = arguments[1];
            }
        } else {
            throw "Argument wrong!"
        }
    }
}

export {Sphere}
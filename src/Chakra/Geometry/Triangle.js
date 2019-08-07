import {Point3d} from "./Point";

// Three points define a plane
class Plane {
    constructor() {
        // Center + Radius
        if (arguments.length == 3) {
            this.p1 = new Point3d(arguments[0])
            this.p2 = new Point3d(arguments[1])
            this.p3 = new Point3d(arguments[2])
        } else {
            throw "Argument wrong!"
        }
    }
}

export {Plane}
/**
 * Column Vector.  Internally a n*1 matrix
 */
import {Matrix} from './Matrix.js';
class Vector extends Matrix {
    constructor() {
        if (arguments.length != 1)
            throw "Constructor of vector should only have 1 argument.";
        if (arguments[0] instanceof Array) {
            // Convert from row vector to col vector
            var data = arguments[0];
            super(new Matrix([data]).T().data)
        } else if (arguments[0] instanceof Matrix) {
            super(arguments[0].data);
        } else {
            super(arguments[0], 1);
        }
    }

    add(otherVec) {
        if (!(otherVec instanceof Vector)) {
            throw "Vector can only add to another vector";
        }

        var retMatrix = super.add(otherVec);

        return new Vector(retMatrix);
    }

    sub(otherVec) {
        if (!(otherVec instanceof Vector)) {
            throw "Vector can only add to another vector";
        }

        return new Vector(super.sub(otherVec));
    }

    getEle(idx) {
        if (arguments.length != 1 && arguments.length != 2) {
            throw "Only 1 argument should be provided, provided:" + arguments.length + ".";
        }

        if (arguments.length == 2) {
            if (arguments[1] != 0)
                throw "If provide two arguments, second should be 0."
        }

        return super.getEle(idx, 0);
    }

// dot multiply
    dot(otherVec) {
        if (!(otherVec instanceof Vector)) {
            throw "Param not vector!"
        }

        if (otherVec.rows != this.rows) {
            throw "Dimension not much!"
        }

        return this.T().multi(otherVec).data[0][0];
    }

// Cross multiply
    cross(otherVec) {
        if (!(otherVec instanceof Vector)) {
            throw "Param not vector!"
        }

        if (otherVec.rows != this.rows) {
            throw "Dimension not much!"
        }

        // I only know the cross product of 3d vector
        if (this.rows != 3) {
            throw "Only know cross product on 3d vector"
        }

        return new Vector([
            this.getEle(1) * otherVec.getEle(2) - this.getEle(2) * otherVec.getEle(1),
            this.getEle(2) * otherVec.getEle(0) - this.getEle(0) * otherVec.getEle(2),
            this.getEle(0) * otherVec.getEle(1) - this.getEle(1) * otherVec.getEle(0)
        ])
    }

// square of norm
    norm2() {
        return this.dot(this)
    }

    norm() {
        return Math.sqrt(this.norm2())
    }

    unit() {
        return this.multi(1 / this.norm())
    }
}

export {Vector}
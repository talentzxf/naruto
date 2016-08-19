'use strict'
import {Vector} from '../Algebra/Vector.js';
import {Force,ForceSystem} from '../Mechanics/Force.js';
import {Torque} from '../Mechanics/Torque.js';

var assert = require('assert');
describe('ForceSystem', function() {
    describe('#construct', function() {
        var fs = new ForceSystem();
        fs.addForce(new Force( new Vector([-1,0,0]), new Vector([0,2,2])));
        fs.addForce(new Force( new Vector([0,-1,0]), new Vector([0,2,2])));
        fs.addForce(new Force( new Vector([1,0,0]), new Vector([0,0,2])));
        fs.addForce(new Force( new Vector([0,1,-1]), new Vector([2,0,2])));

        var simplifiedFS = fs.simplifyTo(new Vector([0,0,0]));
        assert.equal(true, simplifiedFS.F.equal(new Vector([0,0,-1])))
        assert.equal(true, simplifiedFS.T.getTorque().equal(new Vector([0,2,4])))
    })
})
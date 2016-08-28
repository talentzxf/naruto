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
        assert.equal(true, simplifiedFS.Torque.equal(new Vector([0,2,4])))

        var mostSimplifiedFS = fs.simplify();
        assert.equal(true, mostSimplifiedFS.status==3);
        assert.equal(true, mostSimplifiedFS.p.equal(new Vector([2,0,0])));
        assert.equal(true, mostSimplifiedFS.torque.equal(new Vector([0,0,4])));
    })

    describe('#forcesystem', function() {
        //var fs = new ForceSystem();
        //fs.addForce(new Force(new Vector([0, -40, 0]), new Vector([0.5,0,0]) ));
        //fs.addForce(new Force(new Vector([-10*Math.sqrt(3), 10, 0]), new Vector([1,0.5,0])));
        //fs.addTorque(new Torque(new Vector([0,0,20])));
        //
        //var mostSimplifiedFS = fs.simplify();
        //assert.equal(true, mostSimplifiedFS.status==2);
        //assert.equal(true, mostSimplifiedFS.point.norm.equal(21.34/34.64));
    })

})
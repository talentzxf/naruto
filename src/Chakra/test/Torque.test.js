'use strict'
import {Force} from '../Mechanics/Force.js';
import {Torque} from '../Mechanics/Torque.js';
import {Vector} from '../Algebra/Vector.js';

var assert = require('assert');
describe('Torque', function() {
    describe('#constructors', function() {
        let f = new Force(new Vector([0,0,3]), new Vector([1,2,1]));
        let p = new Vector(3);
        let t = new Torque(p,f);
        assert.equal(true, new Vector([6,-3,0]).equal(t));
    })
})

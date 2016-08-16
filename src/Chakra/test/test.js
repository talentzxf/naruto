'use strict'
import {Matrix} from '../Algebra/Matrix.js';

var assert = require('assert');
describe('Matrix', function() {
    describe('#set/get', function() {
        it('Element should be the same as provided', function() {
            let mat = new Matrix([[1,2],[2,3]])
            assert.equal(1,mat.getEle(0,0));

            console.log(mat)
        });
    });
});


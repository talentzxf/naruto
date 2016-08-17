'use strict'
import {Vector} from '../Algebra/Vector.js';
var assert = require('assert');

describe('Vector', function() {
    describe('#constructors', function () {
        let vec1 = new Vector(10);
        for(var i = 0 ; i < 10; i++){
            assert.equal(0,vec1.getEle(i));
        }

        let v1 = new Vector([1,2,3,4,5]);
        let v2 = new Vector([6,7,8,9,10]);
        let v3 = v1.add(v2);
        assert.equal(7, v3.getEle(0))
        assert.equal(9, v3.getEle(1))
        assert.equal(11, v3.getEle(2))
        assert.equal(13, v3.getEle(3))
        assert.equal(15, v3.getEle(4))
    })
})
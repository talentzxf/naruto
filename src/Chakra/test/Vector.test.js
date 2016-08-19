'use strict'
import {Vector} from '../Algebra/Vector.js';
var assert = require('assert');

describe('Vector', function() {
    describe('#constructors', function () {
        let vec1 = new Vector(10);
        for(var i = 0 ; i < 10; i++){
            assert.equal(0,vec1.getEle(i));
        }
    })

    describe("#equal", function(){
        let vec1 = new Vector([1,2,3,4,5,6,7,8,9]);
        let vec2 = new Vector([1,2,3,4,5,6,7,8,9]);

        assert.equal(true, vec1.equal(vec2));

        let vec3 = new Vector([1,2,3,4,5,6,7,8,10]);
        assert.equal(false, vec1.equal(vec3));
    })

    describe('#operators', function(){
        let v1 = new Vector([1,2,3,4,5]);
        let v2 = new Vector([6,7,8,9,10]);
        let v3 = v1.add(v2);
        assert.equal(7, v3.getEle(0))
        assert.equal(9, v3.getEle(1))
        assert.equal(11, v3.getEle(2))
        assert.equal(13, v3.getEle(3))
        assert.equal(15, v3.getEle(4))
        assert.equal(130, v1.dot(v2))

        let v4 = new Vector([2,3,4]);
        let v5 = new Vector([9,10,11]);
        let v6 = v4.cross(v5)
        assert.equal(-7, v6.getEle(0));
        assert.equal(14, v6.getEle(1));
        assert.equal(-7, v6.getEle(2));

        assert.equal(0, v4.dot(v6));
        assert.equal(0, v5.dot(v6));
    })

    describe('norms', function(){
        let v4 = new Vector([2,3,4]);
        assert.equal(29, v4.norm2())

        let v7 = new Vector([3,4]);
        assert.equal(5,v7.norm())

        let v8 = new Vector([1,1]);
        console.log(v8.unit())
    })
})
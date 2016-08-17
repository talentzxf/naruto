'use strict'
import {Matrix} from '../Algebra/Matrix.js';

var assert = require('assert');
describe('Matrix', function() {
    describe('#constructors', function() {
        it('Element should be the same as provided', function() {
            let mat1 = new Matrix([[1,2],[2,3]])
            assert.equal(1,mat1.getEle(0,0));

            let mat2 = new Matrix(5,3)
            assert.equal(0,mat2.getEle(4,2));
        });
    });

    describe('#add', function() {
        it('Matrix addition', function() {
            let mat1 = new Matrix([[1,2],[2,3]])
            console.log("Matrix is:\n" + mat1.toString())
            assert.equal(1,mat1.getEle(0,0));

            let mat2 = mat1.add(new Matrix(2,2))
            console.log("Matrix is:\n" + mat2.toString())
            assert.equal(3,mat2.getEle(1,1));

            let mat3 = mat1.add(new Matrix([[2,3],[4,5]]))
            console.log("Matrix is:\n" + mat3)
            assert.equal(3,mat3.getEle(0,0));
            assert.equal(5,mat3.getEle(0,1));
            assert.equal(6,mat3.getEle(1,0));
            assert.equal(8,mat3.getEle(1,1));
        });
    });

    describe('#transpose', function() {
        it('Matrix transpose', function() {
            let mat = (new Matrix([[1,2]])).T();
            console.log("Mat:" + mat);
            assert.equal(1,mat.getEle(0,0))
            assert.equal(2,mat.getEle(1,0))

            let mat1 = (new Matrix([[1,2],[3,4],[5,6]])).T();
            assert.equal(1,mat1.getEle(0,0));
            assert.equal(3,mat1.getEle(0,1));
            assert.equal(5,mat1.getEle(0,2));
            assert.equal(2,mat1.getEle(1,0));
            assert.equal(4,mat1.getEle(1,1));
            assert.equal(6,mat1.getEle(1,2));
        });
    });

    describe("#multiply", function(){
        it("num multiply",function(){
            let mat = new Matrix([[1,2,3,4,5]]).multi(3);
            assert.equal(3,mat.getEle(0,0))
            assert.equal(6,mat.getEle(0,1))
            assert.equal(9,mat.getEle(0,2))
            assert.equal(12,mat.getEle(0,3))
            assert.equal(15,mat.getEle(0,4))
        })

        it("Matrix multiply matrix", function(){
            let mat1 = new Matrix([[1,2,3],[4,5,6],[7,8,9],[10,11,12]])
            let mat2 = new Matrix([[13,14,15,16],[17,18,19,20],[21,22,23,24]])
            let mat3 = mat1.multi(mat2)
            console.log(mat3)
            assert.equal(1*13+2*17+3*21, mat3.getEle(0,0))
            assert.equal(1*14+2*18+3*22, mat3.getEle(0,1))
            assert.equal(4*13+5*17+6*21, mat3.getEle(1,0))
            assert.equal(10*16+11*20+12*24, mat3.getEle(3,3))
        })
    })
});


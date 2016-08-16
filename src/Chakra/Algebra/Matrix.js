'use strict'
class Matrix{
    constructor(){
        if(arguments.length == 1){
            if(arguments[0] instanceof Array){
                var inArray = arguments[0];
                if(!(inArray[0] instanceof Array)){
                    assert("Input array not 2d.")
                }
                // TODO: Validate this array is 2d array
                this.data = inArray;
                this.rows = inArray.length;

                this.cols = inArray[0].length;
            }
        }else if(arguments.length == 2){
            this.data = []
            this.rows = arguments[0];
            this.cols = arguments[1];
            for(var r = 0 ; r < this.rows; r++){
                this.data.push([]);
                for( var c = 0 ; c < this.cols; c++){
                    this.data[r].push(0);
                }
            }
        }
    }

    getEle(r,c){
        return this.data[r][c];
    }

    setEle(r,c,v){
        this.data[r][c] = v;
    }

    /**
     * Matrix-Matrix addition.
     * @param m
     */
    add(m){
        if(!m instanceof Matrix)
            assert(m + "is not a matrix!")

        if(m.rows != this.rows || m.cols != this.cols){
            assert("Matrix dimension didn't match!")
        }

        let retM = new Matrix(m.rows, m.cols);
        for(var r = 0; r < m.rows; r++){
            for(var c = 0 ; c < m.rows; c++){
                retM.setEle(r,c, m.getEle(r,c) + this.getEle(r,c))
            }
        }
        return retM;
    }

    /**
     * Transpose a matrix
     * @constructor
     */
    T(){
        var retM = new Matrix(this.cols, this.rows);
        for(var r = 0; r < this.rows; r++){
            for(var c = 0 ; c < this.cols; c++){
                retM.setEle(c,r, this.getEle(r,c));
            }
        }
        return retM;
    }

    /**
     * Matrix multiply
     * @returns {string}
     */
    multi(){
        if(arguments.length == 1){
            if(!(arguments[0] instanceof Matrix )){ // Number multiply
                var retM = new Matrix(this.rows, this.cols);
                var num = arguments[0]
                for(var r = 0; r < this.rows; r++) {
                    for (var c = 0; c < this.cols; c++) {
                        retM.setEle(r, c, this.getEle(r, c) * num);
                    }
                }
                return retM;
            }else{   //Matrix multiply matrix
                var m = arguments[0]
                if(this.cols == m.rows){
                    var retM = new Matrix(this.rows, m.cols);
                    for(var r = 0; r < this.rows; r++){
                        for(var c = 0 ; c < m.cols; c++){
                            var res = 0;
                            for(var index = 0; index < this.cols; index++){
                                res += this.getEle(r, index) * m.getEle(index, c);
                            }
                            retM.setEle(r,c, res);
                        }
                    }
                    return retM;
                }
                else{
                    assert("Matrix dimension not match!Left col:" + this.cols + " right rows:" + m.rows);
                }
            }
        }
    }

    toString(){
        var retStr = "";
        for(var r = 0; r < this.rows; r++){
            for(var c = 0 ; c < this.cols; c++){
                retStr += this.data[r][c] + ",";
            }
            retStr += "\n";
        }

        return retStr;
    }
}

export {Matrix}


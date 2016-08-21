'use strict'
class Matrix{
    constructor(){
        if(arguments.length == 1){
            if(arguments[0] instanceof Array){
                var inArray = arguments[0].slice();
                if(!(inArray[0] instanceof Array)){
                    throw "Input array not 2d.";
                }

                this.rows = inArray.length;
                this.cols = inArray[0].length;
                this.data = [];
                for(var r = 0 ; r < this.rows; r++){
                    this.data.push([]);
                    for( var c = 0 ; c < this.cols; c++){
                        this.data[r].push(inArray[r][c]);
                    }
                }
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

    validateDimensionMatch(m){
        if(!m instanceof Matrix)
            throw m + "is not a matrix!"

        if(m.rows != this.rows || m.cols != this.cols){
            throw "Matrix dimension didn't match!"
        }
    }

    equal(other){
        this.validateDimensionMatch(other);

        for(var r = 0; r < this.rows; r++){
            for( var c = 0 ; c < this.cols; c++){
                if(this.getEle(r,c) != other.getEle(r,c)){
                    return false;
                }
            }
        }

        return true;
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
        this.validateDimensionMatch(m);

        let retM = new Matrix(m.rows, m.cols);
        for(var r = 0; r < m.rows; r++){
            for(var c = 0 ; c < m.cols; c++){
                retM.setEle(r,c, m.getEle(r,c) + this.getEle(r,c))
            }
        }
        return retM;
    }

    /**
     * Inplacement add
     */
    iadd(m){
        this.validateDimensionMatch(m);

        for(var r = 0; r < m.rows; r++){
            for(var c = 0 ; c < m.cols; c++){
                this.setEle(r,c, m.getEle(r,c) + this.getEle(r,c))
            }
        }

        return this;
    }

    sub(m){
        this.validateDimensionMatch(m);

        let retM = new Matrix(m.rows, m.cols);
        for(var r = 0; r < m.rows; r++){
            for(var c = 0 ; c < m.cols; c++){
                retM.setEle(r,c, this.getEle(r,c) - m.getEle(r,c) )
            }
        }
        return retM;
    }

    /**
     * Inplacement substract
     */
    isub(m){
        this.validateDimensionMatch(m);

        for(var r = 0; r < m.rows; r++){
            for(var c = 0 ; c < m.cols; c++){
                this.setEle(r,c, this.getEle(r,c) - m.getEle(r,c) )
            }
        }
        return this;
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

    iT(){
        for(var r = 0; r < this.rows; r++){
            for(var c = 0 ; c < this.cols; c++){
                var tmp = this.getEle(r,c);
                this.setEle(r,c, this.getEle(c,r));
                this.setEle(c,r, tmp);
            }
        }
        return this;
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
                    throw "Matrix dimension not match!Left col:" + this.cols + " right rows:" + m.rows;
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


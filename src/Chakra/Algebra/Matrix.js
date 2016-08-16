'use strict'
class Matrix{
    constructor(inArray){
        // TODO: Validate this array is 2d array
        this.data = inArray;
        this.rows = inArray.length;
        this.cols = inArray[0].length;
    }

    //constructor(rows, cols){
    //    this.data = []
    //    this.rows = rows;
    //    this.cols = cols;
    //    for(var r = 0 ; r < rows; r++){
    //        this.data
    //        for( var c = 0 ; c < cols; c++){
    //
    //        }
    //    }
    //}

    getEle(r,c){
        return this.data[r][c];
    }

    setEle(r,c,v){
        this.data[r][c] = v;
    }

    //add(m){
    //    if(!m instanceof Matrix)
    //        assert(m + "is not a matrix!")
    //
    //    if(m.getCols() != this.getCols() || m.getRows() != this.getRows()){
    //        assert("Matrix dimension didn't match!")
    //    }
    //
    //    let m = new Matrix();
    //    for()
    //}
    //
    //getCols(){
    //        return
    //    }

    toString(){
        var retStr = "";
        for(var r = 0; r < this.rows; r++){
            for(var c = 0 ; c < this.cols; c++){
                retStr += this.data[r][c] + ",";
            }
            retStr += "\n";
        }
    }
}

export {Matrix}


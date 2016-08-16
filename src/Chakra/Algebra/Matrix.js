'use strict'
class Matrix{
    constructor(inArray){
        // TODO: Validate this array is 2d array
        this.data = inArray;
        this.rows = inArray.length;
        this.cols = inArray[0].length;
    }

    getEle(r,c){
        return this.data[r][c];
    }

    setEle(r,c,v){
        this.data[r][c] = v;
    }

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


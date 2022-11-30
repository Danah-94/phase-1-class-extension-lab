// Your code here

class Polygon{
    constructor(array){
        this.array = array;
    }
    
    get countSides(){
        return this.array.length
    }

    get perimeter(){
        return this.array.reduce( ( total , currentValue ) => total + currentValue , 0)
    }
}

class Triangle extends Polygon{
    get isValid(){
        let side1 = this.array[0];
        let side2 = this.array[1];
        let side3 = this.array[2];

       if ( side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2 ) {
        return true;
       } else {
        return false;
       }        
    }
}

class Square extends Polygon {
    get area(){
        let side = this.array[0];
        return Math.pow( side , 2 )
    }

    get isValid(){
        return this.array.every( side => side === this.array[0] )
    }
}
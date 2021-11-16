// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((total, side) => {
            return total + side;
        })
    }
}

class Triangle extends Polygon { 
    get isValid() {
        if (this.countSides === 3) {
            const [a, b, c] = this.sides;
            return ((a + b >= c) && (b + c >= a) && (a + c >= b));
        }
    }
}
class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            const [a, b, c, d] = this.sides;
            return (a === b && b === c && c === d);
        }
    }

    get area () {
        if (this.isValid) {
            return this.sides[0] * this.sides[0];
        }
    }
}
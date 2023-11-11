//classes
class Rectangle {
    constructor(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area() {
        return this.height * this.width;
    }
    perimeter() {
        return 2 * (this.height + this.width)
    }

    isSquare() {
        return this.width === this.height;
    }

    logArea() {
        console.log('Rectangle area is ' + this.area())
    }
}

const square = new Rectangle('Square', 20, 20)
// console.log(square)
// console.log(square.area())
// square.logArea();
// console.log(square.isSquare())


//class inheritance

class Shape {
    constructor(name) {
        this.name = name
    }
    logName() {
        console.log('name is ' + this.name)
    }
}

class Rec extends Shape {
    constructor(name, width, height) {
        super(name);

        this.width = width;
        this.height = height
    }
}
class Circle extends Shape {
    constructor(name, radius) {
        super(name);

        this.radius = radius;
    }

    area() {
        return 2 * Math.PI * this.radius;
    }

    //static method
    static getClass() {
        return 'circle';
    }
}

const rect = new Rec('rectangle1', 20, 20)
console.log(rect)
rect.logName()

const circle = new Circle('circle1', 20)
console.log(circle)
console.log(circle.area().toFixed(2))
console.log(Circle.getClass())
// console.log(circle.getClass())//error in js static method cant be called on instances
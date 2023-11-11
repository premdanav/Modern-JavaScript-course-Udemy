// const rectangle = {
//     name: "rectangle 1",
//     width: 10,
//     height: 20,
//     area: function () {
//         return this.width * this.height;
//     },
// }

// console.log(rectangle)
// console.log(rectangle.area())


//constructor functions

function Rectangle(name = "square", width = 20, height = 20) {
    this.name = name;
    this.width = width;
    this.height = height;
};

//adding function to prototype chain
Rectangle.prototype.area = function () {
    return this.height * this.width;
}

const rect = new Rectangle('Rect', 10, 10)
console.log(rect)
console.log(rect.area())
const byDeafultSquare = new Rectangle();//Rectangle {name: 'square', width: 20, height: 20}
// console.log(byDeafultSquare);
const rect1 = new Rectangle('Rectangle 1', 20, 40)
const rect2 = new Rectangle('Rectangle 2', 20, 40)
console.log(rect1.name, rect1['width'])
//add property
rect1.color = 'red';
rect2.perimeter = () => 2 * (rect2.width + rect2.height);
console.log(rect2);
//remove the property
delete rect2.perimeter;
console.log(rect2)
//check for property
console.log(rect1.hasOwnProperty('color'))
console.log(rect2.hasOwnProperty('color'))

//get keys
console.log(Object.keys(rect1))
console.log(Object.values(rect1))

//get entries
console.log(Object.entries(rect1))
for (let [key, value] of Object.entries(rect1)) {
    console.log(`${key}--->${value}`);

}
// console.log(rect1.area())
// console.log(rect1.constructor)
// console.log(rect1 instanceof Rectangle)


//literals vs constructors
const strLit = 'Hello';
const strObj = new String('Hello')

// console.log(strLit, typeof strLit)
// console.log(strObj, typeof strObj)


//boxing
// console.log(strLit.toUpperCase())
// console.log(strLit[0])


//unboxing
// console.log(strObj.valueOf(), typeof strObj.valueOf())
// console.log(strLit.constructor)

// console.log(strLit instanceof String)//false
// console.log(strObj instanceof String)//true


const funcLit = function (x) {
    return x * x;
}
// console.log(funcLit, typeof funcLit)
// console.log(funcLit(5))

const funcObj = new Function('x', 'return x*x')
// console.log(funcObj, typeof funcObj)
// console.log(funcObj(6))


const obj1 = {};
const obj2 = new Object();

// console.log(obj1, typeof obj1)//object
// console.log(obj2, typeof obj2)//object


const rectaglePrototypes = {
    area: function () {
        return this.width * this.height;
    },
    perimeter: function () {
        return 2 * (this.width + this.height);
    }
}

function createRectangle(height, width) {
    return Object.create(rectaglePrototypes, {
        height: { value: height },
        width: { value: width }
    })
}
const rectnagle3 = createRectangle(20, 40);
const rec4 = createRectangle(30, 60);
console.log(rectnagle3, rec4);
console.log(rectnagle3.area())
console.log(rec4.perimeter())

//contructor
function Shape(name) {
    this.name = name;
}

//inherit shape prototype
Shape.prototype.logName = function () {
    console.log(`shape name = ${this.name}`)
}
function Rec(name, height, width) {
    Shape.call(this, name);
    this.height = height;
    this.width = width
}

//set prototype constructors
Rec.prototype.constructor = Rec;

Rec.prototype = Object.create(Shape.prototype)
function Circle(name, radius) {
    Shape.call(this, name);
    this.radius = radius;
}

const recta = new Rec('Rectagle 1', 20, 20)
const cir = new Rec('Circle', 30)
console.log(recta, cir)
recta.logName()
console.log(recta.constructor)
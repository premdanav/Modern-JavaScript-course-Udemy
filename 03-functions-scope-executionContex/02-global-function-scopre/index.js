const x = 200;

function run() {
    console.log(`${x} in functin`);
}

function add() {
    const x = 1;//variable shaddowing
    const y = 20;
    console.log(x + y);
}
run();
add();


for (let i = 0; i <= 10; i++) {
    //console.log(i);
}
//console.log(i)


//nested function

function first() {
    const x = 299;

    function second() {
        const y = 233;
        console.log(x + y);
    }

    second();
}

first();

//function declaration

console.log(addDollar(199));//only function declarations are hoisted 
function addDollar(val) {
    return `${val}$`;
}

//function expression

// console.log(addPlus(500));// gives error not hoisted

const addPlus = function (value) {
    return `${value}+`;
}
console.log(addPlus(500));

//arrow function

const addNums = (a, b) => {
    return a + b;
}

//implicit return
const subNums = (a, b) => a - b;

//can leave () with a single param
const double = a => a * 2;

//returning an object
const createObj = () => ({
    name: "brad"
});

const numbers = [2, 34, 5, 6, 7, 7];
numbers.forEach(n => console.log(n))

console.log(createObj());
console.log(double(7));
console.log(addNums(5, 4));
console.log(subNums(5, 2));

//function challenge

function getCelsius(tempInFah) {
    return ` the temp is ${((tempInFah - 32) * 5 / 9)} \xB0 C`;
}

const getCelsiusTemp = (temp) => ((temp - 32) * 5 / 9)

console.log(getCelsiusTemp(32))
console.log(getCelsius(32));


//secong

const minMax = (numsArr) => {
    const maxNum = Math.max(...numsArr);
    const minNum = Math.min(...numsArr)
    return ({
        min: maxNum,
        max: minNum
    })
}

console.log(minMax([2, 4, 5, 6, 7, 4, 3, 22]));

//self invoking function
((length, breadth) => {
    let area = length * breadth;
    const res = ` area is ${length} * ${breadth} = ${area}`;
    console.log(res);
})(6, 7);

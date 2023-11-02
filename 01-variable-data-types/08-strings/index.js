let x;

const name = "John";
const age = 20;

x = 'my name is ' + name + ' and i am ' + age + " years old";

x = `my name is ${name} and i am ${age} years old`;

//string properties and methods
const s = "Hello World"
x = typeof s//string

let y = new String("hello world");
x = typeof y;

x = s[0]//H
x = s.charAt(0);//H
x = s.__proto__;
x = s.toLowerCase();
x = s.toUpperCase();
x = s.substring(1, 4);

x = s.slice(-11);//Hello World
x = s.slice(-11, -6);//Hello

let a = '      hello  world    '
x = a.trim();
x = s.replace("World", "John")
x = s.includes("World");
x = s.valueOf()

//split into array
x = s.split('')
console.log(x);
//console.log(Math);
let x;
x = Math.sqrt(9);
x = Math.abs(-5.34);
x = Math.ceil(5.4)
x = Math.floor(5.7);
x = Math.round(5.34);
x = Math.floor(Math.random() * 100 + 1);
console.log(x)

//challenge

let num1 = Math.floor(Math.random() * 100 + 1);
let num2 = Math.floor(Math.random() * 50 + 1);

const sumOutput = `${num1} + ${num2} = ${num1 + num2}`;
const differenceOutput = `${num1} - ${num2} = ${num1 - num2}`;
const productOutput = `${num1} * ${num2} = ${num1 * num2}`;
const quotientOutput = `${num1} / ${num2} = ${num1 / num2}`;
const rmOutput = `${num1} % ${num2} = ${num1 % num2}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);

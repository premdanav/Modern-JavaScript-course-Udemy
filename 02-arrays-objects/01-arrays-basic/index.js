let res;
const fruits = new Array('apple', 'grape', 'orange');

const mixed = [12, 'hello', true, null];
mixed.push(10);
mixed.shift();
mixed.unshift(20);
mixed.reverse();
res = mixed.includes(20);

let arr = [23, 23, 45, 22, 324, 55, 67, 45];
res = arr.slice(2, 5);
res = arr.slice();//doesnt change the original array

//res = arr.splice(3, 1);//change the original array

res = arr.splice(0, 4).reverse().toString()

console.log(res);
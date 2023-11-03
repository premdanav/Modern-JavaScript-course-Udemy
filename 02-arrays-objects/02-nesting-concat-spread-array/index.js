let x;
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];
const allfruits = [fruits, berries];
//fruits.push(...berries);


//flattern arrays
let arr = [1, 2, 3, 4, [5, 4], 6, [4, 5, 6, [8, 9, [6, 7]]], 9];
x = arr.flat().flat().flat().flat();//gives you the all elements in an array 



//static methods on array object
x = Array.isArray(fruits);
x = Array.isArray(String);

x = Array.from('123456');//[ '1', '2', '3', '4', '5', '6' ]

const a = 2;
const b = 4, c = 45;

x = Array.of(a, b, c);//[ 2, 4, 45 ]


//challenge

arr = [1, 2, 3, 4, 5];
x = arr;
arr.unshift(0);
arr.push(6);
x = arr.reverse();

console.log(x);
const items = ['book', 'table', 'kite', 'chair'];

//filter methos creates a shallow copy
const res = items.filter(word => word.length > 4);

//console.log(res, items);


//Array.map
//creates a new array populated with results 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const map1 = arr.map(x => x * 2);
const squareAndDouble = arr.map(x => x * 2).map(x => x + 3);
const evenDouble = arr.filter(num => num % 2 === 0).map(num => num * 2);

console.log(evenDouble);
// console.log(squareAndDouble);
// console.log(arr, map1);
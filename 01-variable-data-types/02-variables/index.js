const arr = [1, 2, 3, 4];
console.log(arr);

arr.push(5);
console.log(arr)
arr.unshift(10);
console.log(arr)
arr.shift();
arr.shift();
arr.unshift();
console.log(arr);

const person = {
    name: "Brad"
}
person.name = "Prem"
person.age = 36;
console.table(person)
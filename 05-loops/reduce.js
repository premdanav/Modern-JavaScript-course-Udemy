const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];//45
const nums = arr.filter(num => num > 7).reduce((acc, curr) => acc + curr);
console.log(nums)

const sum = arr.reduce(function (accumulator, currValue) {
    return accumulator + currValue;
})//45

const initialValue = 5;
const sum1 = arr.reduce(function (accumulator, currValue) {
    return accumulator + currValue;
}, initialValue);//50

console.log(sum1);


const cart = [
    { id: 1, name: "product1", prices: 130 },
    { id: 2, name: "product2", prices: 150 },
    { id: 3, name: "product3", prices: 175 },
    { id: 4, name: "product4", prices: 180 },
]

const res = cart.reduce((acc, product) => {
    return acc + product.prices
}, 0)

console.log(res);


const people = [
    {
        firstName: "prem",
        lastName: "danav",
        email: "p@gmail.com",
        age: 40
    },
    {
        firstName: "prem1",
        lastName: "danav1",
        email: "p@gmail.com1",
        age: 41
    },
    {
        firstName: "prem2",
        lastName: "danav2",
        email: "p@gmail.com2",
        age: 42
    },
]

const youngPeople =
    people
        .filter(person => person.age > 40)
        .map(person => ({
            name: person.firstName + ' ' + person.lastName,
            email: person.email
        }))
console.log(youngPeople)


const items = ['book', 'table', 'kite', 'chair'];

const capitalisedWords = items.map(word => word.toString().charAt(0).toUpperCase() + word.substring(1));
console.log(capitalisedWords)
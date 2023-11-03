const items = ['book', 'table', 'kite', 'chair'];

const users = [
    { id: 123, name: "prem" }, { id: 456, name: "sumit" }, { id: 789, name: "bhavik" }
]

//for of loop
for (let item of items) {
    // console.log(item);
}

//loop over strings
const str = 'Hello world';
for (let char of str) {
    //console.log(char)
}

//loop over map
const map = new Map();
map.set('name', 'brad');
map.set('age', '30')
for (let [key, value] of map) {
    // console.log(`${key}: ${value}`);
}


//for in loop
for (const key in users) {
    //    console.log(key, users[key]);
}

for (let key in items) {
    console.log(key, items[key]);
}

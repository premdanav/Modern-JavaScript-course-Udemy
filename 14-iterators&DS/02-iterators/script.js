// const app = {
//     nextIndex: 0,
//     teams: ['red', 'blue', 'green'],
//     next() {
//         if (this.nextIndex >= this.teams.length) {
//             return { done: true }
//         }

//         const returnValue = { value: this.teams[this.nextIndex++], done: false };
//         return returnValue;
//     }
// }

// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next()); 
const app = {
    teams: ['red', 'blue', 'green'],
    [Symbol.iterator]: function () {
        let nextIndex = 0;
        return {
            next: () => {
                return nextIndex < this.teams.length
                    ? { value: this.teams[nextIndex++], done: false }
                    : { done: true };
            },
        };
    },
};

const iterator = app[Symbol.iterator]();
// console.log(iterator.next().value);  // Output: 'red'
// console.log(iterator.next().value);  // Output: 'blue'
// console.log(iterator.next().value);  // Output: 'green'
// console.log(iterator.next().done);   // Output: true

for (const iterator of app) {
    console.log(iterator)
}
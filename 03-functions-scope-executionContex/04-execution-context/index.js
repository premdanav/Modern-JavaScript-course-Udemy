//Execution context
//similar to activation record
//when you run any js , a special environment is created to handle the transformation and execution of code. This is called as execution context

// It contains the currently running code and everything that aids in its execution

// there is gloabla and function execution context


//1-> memory creation phase undefined
//2-> execution phase added the valu e

// function first() {
//     console.log('first..')
// }

// function second() {
//     console.log('second..')
// }

// function third() {
//     console.log('third..');
// }

// first();
// second();
// third();


function first() {
    console.log('first..');
    second();
}

function second() {
    console.log('second..');
    third();
}

function third() {
    console.log('third..');
}

first();







const promise = new Promise((resolve, reject) => {
    //do some async task
    setTimeout(() => {
        console.log('async task completed');
        resolve({ name: "prem", age: 48 });
        // reject('error thrown');
    }, 1000)
});

promise
    .then((user) => {
        console.log(user);
        return user.name;
    })
    .then((name) => {
        console.log('promise chaining')
        console.log(name);
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log('always runs doesnt wait for promises')
    });

console.log('non blocking code from global scope')
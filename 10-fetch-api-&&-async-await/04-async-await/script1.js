const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'john', age: 20 });
    }, 1000)
})

// promise.then(d => console.log(d))

async function getPromise() {
    const res = await promise;
    console.log(res)
}

//getPromise();

const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data)
}

getUsers();

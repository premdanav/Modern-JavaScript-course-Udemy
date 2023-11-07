function getData(endpoint) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText))
                } else {
                    reject('something went wrong')
                }
            }
        };

        xhr.open('GET', endpoint, true);

        setTimeout(() => {
            xhr.send();
        }, Math.floor(Math.random() * 3000) + 1000);
    }
    )
}

// getData('./movies.json')
//     .then((movies) => {
//         console.log(movies);
//         return getData('./actors.json')
//     })
//     .then((actors) => {
//         console.log(actors)
//         return getData('./directors.json')
//     })
//     .then((directors) => {
//         console.log(directors)
//     })

const moviePromise = getData('./movies.json')
const actorPromise = getData('./actors.json')
const direcotrPromise = getData('./directors.json')

const dummyPromise = new Promise((res, rej) => {
    res('hello world')
})

Promise.all([moviePromise, actorPromise, direcotrPromise, dummyPromise])
    .then((data) => {
        data.forEach(i => {
            if (!typeof i === 'function')
                i.forEach(e => console.log(e))
            else
                console.log(i)
        })
    })
    .catch((err) => {
        console.log(err)
    })
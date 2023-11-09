
function getData(endpoint) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText))
            }
        };

        xhr.open('GET', endpoint, true);

        setTimeout(() => {
            xhr.send();
        }, Math.floor(Math.random() * 3000) + 1000);
    })

}

// getData('./movies.json', (data) => {
//     console.log(data);
//     getData('./actors.json', (data) => {
//         console.log(data);
//         getData('./directors.json', (data) => {
//             console.log(data)
//         })
//     })
// });

async function getAllData() {
    const movies = await getData('./movies.json');
    const actors = await getData('./actors.json');
    const directors = await getData('./directors.json');
    console.log(movies, actors, directors)
}

async function getAllDataPromiseAll() {
    const [moviesRes, actorsRes, directorsRes] = await Promise.all([
        fetch('./movies.json'),
        fetch('./actors.json'),
        fetch('./directors.json')
    ]);
    const movies = await moviesRes.json();
    const actors = await actorsRes.json();
    const directors = await directorsRes.json();
    console.log(movies, actors, directors)
}

getAllDataPromiseAll();

// getAllData();
console.log(123)//this will work first as getAllData is async 
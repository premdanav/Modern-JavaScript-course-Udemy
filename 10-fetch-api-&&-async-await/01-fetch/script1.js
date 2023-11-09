

fetch('http://httpstat.us/404')
    .then(res => {
        if (res.status === 404)
            throw new Error('bad request')
    })
    .then(() => console.log('sucess'))
    .catch((e) => console.log(e))


//catch runs on a network error
// fetch('http://hello123.net')
//     .then(res => res)
//     .then(() => console.log('sucess'))
//     .catch((e) => console.log(e))
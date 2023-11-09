const getUsers = async () => {
    try {
        // const res = await fetch('https://jsonplaceholder.typicode.com/users/1');//comment to check error
        const res = await fetch('http://httpstat.us/500')
        if (!res.ok) {
            throw new Error('request failed')
        }
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// getUsers();


const getPosts = async () => {
    const res = await fetch('http://httpstat.us/500')
    if (!res.ok) {
        throw new Error('request failed')
    }
    const data = await res.json();
    console.log(data)
}

getPosts().catch(err => console.log(err))
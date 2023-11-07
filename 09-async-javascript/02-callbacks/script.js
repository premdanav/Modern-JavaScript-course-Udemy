// function toggle(e) {
//     e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

const posts = [
    { title: "post one", body: "this is post one" },
    { title: "post two", body: "this is post two" },
]

function createPost(post, cb) {
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 2000);
}


function getPosts() {
    setTimeout(() => {
        posts.forEach((post) => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        })
    }, 1000)
}

createPost({ title: "post three", body: "this is post three" }, getPosts);


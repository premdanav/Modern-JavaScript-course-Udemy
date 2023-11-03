let x;
const person = {
    name: "prem",
    age: 30,
    address: {
        ward: "awari",
        city: "wani",
        country: "india"
    },
    hobbies: ['cricket', 'cooking', 'chess'],
};
x = person['hobbies'][0];

x = person.name = 'John Doe';


//delete person.hobbies[2];
person.hasChildren = true;

person.greet = function () {
    console.log(`Hello ${this.name}`);
}

//x = person.greet();

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({ name: "helloassing" }, obj1, obj2);
x = Object.keys(obj1).length;
x = Object.entries(obj2);

//destructuring

const firstName = "premkumar";
const lastName = "danav";
const age = 30;

const boy = {
    firstName,
    lastName,
    age
}

const todo = {
    id: 1,
    title: "Take our the trash",
    user: {
        name: "John",
    },
}
const { id: todoId, title } = todo;

//console.log(todoId, title);

//destructuring arrays
const nums = [12, 34, 56, 78];
const [first, second, ...restOfAllElements] = nums;
//console.log(first, second, restOfAllElements)

const post = {
    id: 1,
    title: "post one",
    body: "this is the body"
}

//obj to json string
const str = JSON.stringify(post);
//console.log(str);

//json string to obj
const newPost = JSON.parse(str);
//console.log(newPost)


//object challenge
const library = [
    {
        title: "book1",
        author: "author1",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "book2",
        author: "author2",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "book3",
        author: "author3",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
]

for (let i = 0; i < library.length; i++) {
    library[i].status.read = true;
}

let { title: firstBook } = library[0];

const libStr = JSON.stringify(library);
console.log(firstBook)
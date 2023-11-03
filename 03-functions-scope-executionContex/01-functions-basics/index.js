function add(num1, num2) {
    return num1 + num2;
}

let x;
x = add(4, 5);
//console.log(x);

//default parameters
function registerUser(user = 'bot') {
    // if (!user)
    //     user = 'bot'
    return user + ' is registered';
}

x = registerUser();


//rest parameteres
function restparams(...nums) {
    let total = 0;
    for (const num of nums)
        total += num;
    return total;
}
x = restparams(1, 2, 3, 4, 5, 5);
//console.log(x)

//object as params
function loginUser(user) {
    return `the ${user.name} is registered with id ${user.id}`;
}

const user = {
    id: 1,
    name: "bhavik lode"
}

x = loginUser(user);
x = loginUser({
    id: 123,
    name: "sumit"
})

//arrays as params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
    return item;
}
x = getRandom([1, 2, 3, 4, 5, 6, 7,])
console.log(x);

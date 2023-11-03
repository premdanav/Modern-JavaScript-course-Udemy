const age = 20;

age >= 18 ? console.log('you can vote') : console.log('you can\'t vote');

const person = {
    name: 'John',
    age: 21,
    canVote: false,
}

const canVote = (person.age >= 20) ? true : false;
console.log(canVote);

let auth = false;
let redirect;

if (auth) {
    alert('welcome to dashboard');
    redirect = '/dashboard'
} else {
    alert('access denied');
    redirect = '/login';
}
redirect = auth ? (alert('welcome to dashboard'),
    redirect = '/dashboard') : (alert('access denied'),
        redirect = '/login')

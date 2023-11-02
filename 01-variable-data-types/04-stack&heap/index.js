let name = "john";
let age = 30;

let person = {
    name: "Brad",
    age: 45
}

let newName = name;
newName = "b";

let newPerson = person;
newPerson.name = "Johnthan";

console.log(person, newPerson);
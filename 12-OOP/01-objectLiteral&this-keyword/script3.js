class Person {
    constructor(fName, lName) {
        this._fName = fName;
        this._lName = lName;
    }

    get fName() {
        return this.capitaliseFirst(this._fName);
    }

    set fName(value) {
        this._fName = this.capitaliseFirst(value)
    }

    capitaliseFirst(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

}

let person1 = new Person("john", "doe");
console.log(person1)
console.log(person1.fName);
person1.fName = 'joe'
console.log(person1)
console.log(person1.fName);
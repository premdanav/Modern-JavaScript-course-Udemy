const { capitaliseFirstWord, capitaliseWords } = require('./utils')
const Person = require('./Person')

const str = 'john';
const cStr = capitaliseFirstWord(str);
console.log(cStr)

const str1 = 'prem danav';
const cStr1 = capitaliseWords(str1)
console.log(cStr1)

const newPerson = new Person('john', 30);
newPerson.greet();
console.log(newPerson)

/*
[[configuratble]] -if true, the propety can be deleted and these attributes can be modified otherwie not

[[Enumerable]] -if true, property will be returned in a for..in loop otherwise  not

[[Writable]] -if true, value of property can be changed otherwise not

[[Value]] - the value of the property

*/

Math.PI = 4;
console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
//console.log(descriptor)
// configurable:false
// enumerable:false
// value:3.141592653589793
// writable:false

const rectObj = {
    name: 'Rectangle 1',
    width: 40,
    height: 50
}



descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name')
// console.log(descriptor)

Object.defineProperty(rectObj, 'name', {
    writable: false,
    configurable: false,
    enumerable: false
})

descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name')
console.log(descriptor)
rectObj.name = 'rectangle 2';
console.log(rectObj.name)
delete rectObj.name;
console.log(rectObj.name)


for (let [key, value] of Object.entries(rectObj)) {
    console.log(`${key}: ${value}`)
}

console.log(Object.getOwnPropertyDescriptors(rectObj))
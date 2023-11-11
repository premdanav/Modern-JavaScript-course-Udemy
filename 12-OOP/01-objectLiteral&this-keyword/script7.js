//sealing-- prevents properties from being added or remvoed can still be changed

//freezing-not being added or removed or changed

//if freeze then it is sealed but not vice versa

const rectObj = {
    name: 'Rectangle 1',
    width: 40,
    height: 50
}


let descriptor = Object.getOwnPropertyDescriptors(rectObj)
//sealing the object
Object.seal(rectObj)
// rectObj.color = 'red';//false
// delete rectObj.name;//false
// rectObj.name = 'RECTANGLE 1'//true
console.log(rectObj)

//freezing the object
Object.freeze(rectObj);
rectObj.width = 30;//false
delete rectObj.height;//false
rectObj.color = 'red;'//false

descriptor = Object.getOwnPropertyDescriptors(rectObj)
console.log(descriptor)

console.log(Object.isSealed(rectObj))//true
console.log(Object.isFrozen(rectObj))//true
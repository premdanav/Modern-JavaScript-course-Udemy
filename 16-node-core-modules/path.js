const path = require('path')

const myFilePath = 'subfolder/anotherfolder/index.js'

//basename()
const base1 = path.basename(myFilePath)
const base2 = path.basename(myFilePath, '.js')
console.log(base1)
console.log(base2)

//extension name
const ext = path.extname(myFilePath);
console.log(ext)

//dirname()
const dir = path.dirname(myFilePath)
console.log(dir)

//join()
const myPath = path.join('subfolder', 'anotherfolder', 'index.js');
console.log(myPath)

//resolver()
const myPath1 = path.resolve('subfolder', 'anotherfolder', 'index.js');
console.log(myPath1)


//__dirname
console.log(__dirname)

//__filename
console.log(__filename)


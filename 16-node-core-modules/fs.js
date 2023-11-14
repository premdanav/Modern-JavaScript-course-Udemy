const fs = require('fs');
const fs1 = require('fs/promises');

// write to a file

//callbakc version
// fs.writeFile('file1.txt', 'Hello world', (err) => {
//     if (err) throw err;
//     console.log('file Created');
// });

//promise version
// fs1.writeFile('file2.txt', 'Hello world 2')
//     .then(() => console.log('file created'))
//     .catch((err) => console.log(err))


//sync version
// fs.writeFileSync('file3.txt', 'hello world 3');
// console.log('file created')

//async await
async function createFile(filename, content) {
    try {
        await fs1.writeFile(filename, content);
        console.log('file created');
    } catch (error) {
        console.log(error)
    }
}

// createFile('file4.txt', 'hello world 4')



//Read from a file
async function readFile(filename) {
    try {
        const data = await fs1.readFile(filename, 'utf8');
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// readFile('file1.txt');
// readFile('file2.txt');
// readFile('file3.txt');


//delete a file

async function deleteFile(filename) {
    try {
        await fs1.unlink(filename);
        console.log(`${filename} deleted`)
    } catch (error) {
        console.log(error)
    }
}

// deleteFile('file4.txt');

//rename a file
async function renameFile(oldName, newName) {
    try {
        await fs1.rename(oldName, newName);
        console.log(`${oldName} renamed to ${newName}`)
    } catch (error) {
        console.log(error);
    }
}

// renameFile('file1.txt', 'File1.txt');

//create a folder
async function createFolder(folderName) {
    try {
        await fs1.mkdir(folderName);
        console.log('folder created')
    } catch (error) {
        console.log(error)
    }
}

createFolder('folder1');
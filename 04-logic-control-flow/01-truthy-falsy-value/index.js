//falsy values

//-- false
//-- 0
//-- "" or '' (Empty string)
//-- null
//-- undefined
//-- NaN 


//truthy values

//-- everything other than falsy
//-- true
//-- '0 (0 in strng)
//-- " " (space)
//-- 'false'
//-- []
//-- {}
//-- function (){} 
const x = false;

if (x)
    console.log('this is the truthy value');
else
    console.log('this is falsy value');

console.log(Boolean(x));

//truthy falsy caveats
const children = 0;

if (!isNaN(children))
    console.log(`you have ${children}`);
else
    console.log(`please enter the children numbers `)

//checking for empty arrays
const posts = [];

if (posts.length > 0)
    console.log('Lists posts')
else
    console.log('no posts to list')

//checking for empty objects
const user = {};


if (Object.keys(user).length > 0)
    console.log('Not empty obj')
else
    console.log('empty obj')


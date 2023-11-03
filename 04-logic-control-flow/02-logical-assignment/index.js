// ||-->assigns the right side value only if the left is a falsy value

let a = 0;
// if (!a)
//     a = 30;

a = a || 30;
a ||= 30;

console.log(a);

// &&-->assigns the right side value only if the left is a truthy value

let b = 10;

b = b && 30;
b &&= 30;

console.log(b);

//??-->assigns the right side value only if the left is a null or undefine-->

let ab = undefined;

ab = ab ?? 30;
ab ??= 30;

console.log(ab);
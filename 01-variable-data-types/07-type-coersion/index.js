let x;

x = 5 + '5';
x = 5 + Number('5')
x = 5 * '5';
x = 5 + null;
x = 5 + undefined;
x = Number(null);
x = Number(true);
x = Number(false);
x = 5 + true//6
x = 5 + false;//5
x = 5 - true//4
console.log(x, typeof x)
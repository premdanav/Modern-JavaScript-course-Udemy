let x;

const num = new Number(5.478952);

x = num.toString().length;
x = num.toFixed(3);//5.478 string
x = num.toPrecision(3);//5.48
x = num.toExponential(2);

x = num.toLocaleString()
console.log(x, typeof x)
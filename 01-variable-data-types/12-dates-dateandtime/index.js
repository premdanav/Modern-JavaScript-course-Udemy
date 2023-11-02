let x;
d = new Date();

x = d.toString()
x = d.getTime();

x = d.getFullYear();
x = d.getMonth() + 1;//month are zero based so added one
x = d.getDay();//day of the week
x = d.getHours();
x = d.getMilliseconds();
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('en-US', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short' });
console.log(x)
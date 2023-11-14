const url = require('url')
const queryString = require('querystring')

//url.parse()
const myUrl = url.parse('https;//example.com/listing?id=1000&premium=true');
console.log(myUrl);

//url format
const myUrl2 = url.format({
    protocol: 'https',
    hostname: 'www.google.com',
    pathname: 'listing',
    query: {
        id: 1000,
        premium: true
    }
});

console.log(myUrl2)

//querystring.parse()
const myQs = 'year=2023&month=january&day=20';
const q = queryString.parse(myQs);
console.log(q)
console.log(q.month)

//querystring.stringify()
const obj = { year: 2023, month: 'January', day: 20 };
const myqs2 = queryString.stringify(obj)
console.log(myqs2)
const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        fs.readFile('index.html', (err, file) => {
            if (err) {
                res.writeHead(500, { 'content-type': 'text/html' })
                res.end('<h1>PageNotFound</h1>');
            } else {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.end(file);
            }
        })

    }
})

server.listen(5000, () => {
    console.log("listening on port 5000");
})
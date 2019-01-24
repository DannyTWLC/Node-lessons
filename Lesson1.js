const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);
    if (request.url === '/') {
        response.write('Hello');
        response.end();
    }
});

server.listen(3000);
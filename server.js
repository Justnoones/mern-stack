const http = require("http");

const server = http.createServer((req, res) => {
    console.log("request made from client.");

    res.setHeader('Content-Type', 'text/html');

    res.write("<h1>respond from server.</h1>")

    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log("server listening on localhost:3000");
})
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log("request made from client.");

    fs.readFile("./views/index.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    })
})

server.listen(3000, 'localhost', () => {
    console.log("server listening on localhost:3000");
})
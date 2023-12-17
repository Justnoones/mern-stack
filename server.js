const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log("request made from client.");
    let filename;
    switch (req.url) {
        case "/":
            filename = "home.html";
            break;
        case "/about":
            filename = "about.html";
            break;
        case "/contact":
            filename = "contact.html";
            break;
        default:
            filename = "404.html";
            break;
    }

    fs.readFile("./views/"+filename, (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    })
})

server.listen(3000, 'localhost', () => {
    console.log("server listening on localhost:3000");
})
const fs = require("fs");

// fs.readFile("contents/HelloWorld.txt", (err, data) => {
//      if (err) throw err;
//     console.log(data.toString());
// })

// if (fs.existsSync("contents/HelloMello.txt")) {
//     fs.unlink("contents/HelloMello.txt", err => {
//         if (err) throw err;
//         console.log("file deleted.");
//     });
// } else {
//     fs.writeFile("contents/HelloMello.txt", "Hello Mello", err => {
//         if (err) throw err;
//         console.log("writed contents.");
//     })
// }

// if (fs.existsSync("context")) {
//     fs.rmdir("context", err => {
//         if (err) throw err;
//         console.log("folder deleted.");;
//     })
// } else {
//     fs.mkdir("context", err => {
//         if (err) throw err;
//         console.log("folder created.");
//     })
// }
import { unlink, readFile, existsSync, writeFile, rmdir, mkdir } from "fs";

// readFile("contents/HelloWorld.txt", (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })

// if (existsSync("contents/HelloMello.txt")) {
//     unlink("contents/HelloMello.txt", err => {
//         if (err) throw err;
//         console.log("file deleted.");
//     });
// } else {
//     writeFile("contents/HelloMello.txt", "Hello Mello", err => {
//         if (err) throw err;
//         console.log("writed contents.");
//     })
// }

// if (existsSync("context")) {
//     rmdir("context", err => {
//         if (err) throw err;
//         console.log("folder deleted.");;
//     })
// } else {
//     mkdir("context", err => {
//         if (err) throw err;
//         console.log("folder created.");
//     })
// }
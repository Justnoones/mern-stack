const fs = require("fs");

const readStream = fs.createReadStream("./contents/Large.txt");
const writeStream = fs.createWriteStream("./contents/LargeWrite.txt");

// readStream.on("data", function (data) {
//     // console.log(data);
//     // console.log("--chunk--");
//     writeStream.write(data);
//     writeStream.write("--chunk--");
// })

readStream.pipe(writeStream);
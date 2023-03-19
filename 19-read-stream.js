const fs = require("fs");

const readStream = fs.createReadStream("../content/big_file.txt", { highWaterMark: 90000, encoding: "UTF8" });

readStream.on("data", (chunk) => {
  console.log(chunk);
});

readStream.on("error", (err) => {
  console.log(err);
});
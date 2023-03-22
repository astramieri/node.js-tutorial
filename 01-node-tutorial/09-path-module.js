const path = require("path");

console.log(path.sep);

let filePath = path.join("/content", "subfolder", "text.txt");

console.log(filePath);
console.log(path.basename(filePath));
console.log(path.resolve(__dirname, "content", "subfolder", "test.txt"));

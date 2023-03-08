// in Node.js there is no WINDOW (no browser)

// GLOBAL VARIABLES (anywhere in your application you can access them)
// __dirname    path to current directory
// __filename   filepath
// process      info about env where the program is being executed

console.log("dirname: " + __dirname);
console.log("filename: " + __filename);

setInterval(() => {
    console.log(new Date().getTime());
}, 1000);
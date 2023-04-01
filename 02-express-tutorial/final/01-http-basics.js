const http = require("http");
const fs = require("fs");

// get all files
const indexFile = fs.readFileSync("./basic-files/index.html");
const cssFile = fs.readFileSync("./basic-files/style.css");

const server = http.createServer(
  // this callback is invoked everytime the user hits our server
  (req, res) => {
    const url = req.url;

    console.log(`${req.method} : ${req.url}`);

    if (url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(indexFile);
      res.end(); // must be called on each respond
    } else if (url === "/style.css") {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(cssFile);
      res.end(); // must be called on each respond
    } else if (url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>about page</h1>");
      res.end(); // must be called on each respond
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>page not found</h1>");
      res.end(); // must be called on each respond
    }
  }
);

server.listen(3000);

const http = require("http");

const server = http.createServer(
  // this callback is invoked everytime the user hits our server
  (req, res) => {
    const url = req.url;
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>home page<h1>");
      res.end(); // must be called on each respond
    } else if (url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>about page<h1>");
      res.end(); // must be called on each respond
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>page not found<h1>");
      res.end(); // must be called on each respond
    }

    console.log(`${req.method} : ${req.url}`);
  }
);

server.listen(3000);

const http = require("http");

const server = http.createServer(
  // this callback is invoked everytime the user hits our server
  (req, res) => {
    console.log("user hit the server");
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.write("<h1>okay<h1>");
    res.end(); // must be called on each respond
  }
);

server.listen(3000);

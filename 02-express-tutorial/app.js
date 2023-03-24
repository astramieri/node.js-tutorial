const http = require("http");

const server = http.createServer(
  // this callback is invoked everytime the user hits our server
  (req, res) => {
    console.log("user hit the server");

    res.end("home page"); // must be called on each respond
  }
);

server.listen(3000);

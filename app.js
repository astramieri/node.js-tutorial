const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
    console.log("home page");
  } else if (req.url === "/about") {
    // a crappy blocking code
    for (let i = 0; i <= 100; i++) {
      for (let j = 0; j <= 100; j++) {
        console.log(`${i} - ${j}`);
      }
    }
    res.end("About Page");
    console.log("about page");
  } else {
    res.end("Error Page");
    console.log("error page");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000 ...");
});

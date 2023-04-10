const express = require("express");
const app = express();

// request => middleware => response

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // WARNING: 
  // you must pass it on to the next middleware
  // unless you are terminating the whole cycle (res.send)
  next(); 
};

app.get("/", logger, (req, res) => {
  res.send("Home page");
});

app.get("/about", logger, (req, res) => {
  res.send("About page");
});

app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});

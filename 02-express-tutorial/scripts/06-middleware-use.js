const express = require("express");
const morgan = require("morgan");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// request => middleware => response

// MIDDLEWARE
// option 1: specify in every route
// option 1: set a default with app.use

// WARN: app.use invokes logger function fon any route
// WARN: the order is important (here will be used for every GET)

//app.use(logger); // every path
//app.use('/api', logger); // every path AFTER /api
//app.use([authorize, logger]); //multiple use: executed in this order
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/api/products", (req, res) => {
  res.send("Products page");
});

app.get("/api/items", [authorize, logger], (req, res) => {
  res.send("Items page");
});

app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});

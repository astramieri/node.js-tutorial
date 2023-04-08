const express = require("express");
const app = express();
const logger = require("./logger");

// request => middleware => response

// WARN: app.use invokes logger function fon any route
// WARN: the order is important (here will be used for every GET)
//app.use(logger); // every path
app.use('/api', logger); // every path AFTER /api

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/api/products", (req, res) => {
  res.send("Products page");
});

app.get("/api/items", (req, res) => {
  res.send("Items page");
});

app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});

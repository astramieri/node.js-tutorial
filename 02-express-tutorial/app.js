const express = require("express");
const data = require("./resource/data.js");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const products = data.products.map((product) => {
    const { id, name, price } = product;
    return { id, name, price };
  });
  res.send(products);
});

app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});

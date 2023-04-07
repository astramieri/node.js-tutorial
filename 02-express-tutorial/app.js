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
  res.json(products);
});

// route parameter
app.get("/api/products/:productID", (req, res) => {
  console.log(req.params); // warn: productID is a string!
  const { productID } = req.params;
  const singleProduct = data.products.find(
    (product) => product.id === Number(productID)
  );
  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404).send("Product does not exist");
  }
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params); // { productID: '2', reviewID: '1' }
  res.json(req.params);
});


app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});

const express = require("express");
const data = require("./data.js");
const app = express();

app.get("/", (req, res) => {
  //res.json([{ name: "Peter" }, { name: "John" }]);
  res.json(data.people);
});

app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});

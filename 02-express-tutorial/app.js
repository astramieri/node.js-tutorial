const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([{ name: "Peter" }, { name: "John" }]);
});

app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});

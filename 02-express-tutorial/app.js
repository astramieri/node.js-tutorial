const express = require("express");
const app = express();
let data = require("./resource/data");

// static assets
app.use(express.static("./methods"));
// parse data
app.use(express.urlencoded({extended:false}));

app.get("/api/people", (req, res) => {
  res.status(200).json(data.people);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Login");
});
  


app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});

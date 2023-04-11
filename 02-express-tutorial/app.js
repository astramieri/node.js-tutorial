const express = require("express");
const app = express();
let data = require("./resource/data");

// static assets
app.use(express.static("./methods"));
// parse data (this is crucial in order to get data)
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json(data.people);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { firstname } = req.body; // de-structuring
  if (firstname) {
    return res.status(200).send(`Welcome ${firstname}`);
  }
  res.status(401).send("Please provide credentials");
});

app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});

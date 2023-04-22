const express = require("express");
const app = express();

const auth = require("./routes/auth")
const people = require("./routes/people");

// static assets
app.use(express.static("./methods"));
// parse data (this is crucial in order to get data)
app.use(express.urlencoded({ extended: false }));
// parse json data
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/people", people);

app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});

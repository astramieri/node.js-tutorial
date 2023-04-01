const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware
app.use(express.static("./public")); // tip: use PUBLIC or STATIC

// app.get("/", (req, res) => {
//   // ALTERNATIVES:
//   // 1) static files (./public)
//   // 2) SSR (server side rendering)
//   res.status(200).sendFile(path.resolve(__dirname, "./resource/index.html"));
// });

app.get("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});

const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  // WARN: app.use(express.urlencoded()) IS REQUIRED!!!
  const { firstname } = req.body; // de-structuring
  if (firstname) {
    return res.status(200).send(`Welcome ${firstname}`);
  }
  res.status(401).send("Please provide credentials");
});

module.exports = router;
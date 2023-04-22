const express = require("express");
const router = express.Router();

const {
  getPeople,
  insertPerson,
  updatePerson,
  deletePerson
} = require("../controllers/people");

// FIRST ALTERNATIVE
//router.get("/", getPeople);
//router.post("/", insertPerson);
//router.put("/:id", updatePerson);
//router.delete("/:id", deletePerson);

// SECOND ALTERNATIVE
router.route("/").get(getPeople).post(insertPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
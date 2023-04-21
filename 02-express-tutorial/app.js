const express = require("express");
const app = express();
let data = require("./resource/data");

// static assets
app.use(express.static("./methods"));
// parse data (this is crucial in order to get data)
app.use(express.urlencoded({ extended: false }));
// parse json data
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: data.people });
});

app.post("/api/people", (req, res) => {
  // WARN: app.use(express.json()) IS REQUIRED!!!
  const { name } = req.body; // de-structuring
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params; // WARN: it's a string! You need to cast!
  const { name } = req.body;
  const { age } = req.body;
  console.log(id, name, age);

  //const person = data.people.find((person) => person.id === Number(id)); // LAMBDA SYNTAX

  // OPTION 2:
  const person = data.people.find((person) => {
    return person.id === Number(id); // WARN: return clause!
  });

  if (!person) {
    return res
      .status(400)
      .json({ success: false, message: `no person with ID ${id}` });
  }

  const newPeople = data.people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
      person.age = age;
    }

    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
});

// app.get("/login", (req, res) => {
//   console.log(req.body);
//   // WARN: app.use(express.urlencoded()) IS REQUIRED!!!
//   const { firstname } = req.body; // de-structuring
//   if (firstname) {
//     return res.status(200).send(`Welcome ${firstname}`);
//   }
//   res.status(401).send("Please provide credentials");
// });

app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});

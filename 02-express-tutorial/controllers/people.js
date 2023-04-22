let data = require("../resource/data"); // WARN: check path!

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: data.people });
};

const insertPerson = (req, res) => {
  // WARN: app.use(express.json()) IS REQUIRED!!!
  const { name } = req.body; // de-structuring
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "please provide name value" });
  }
  data.people = [...data.people, req.body];
  res.status(201).json({ success: true, data: data.people });
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
  const { id } = req.params; // WARN: it's a string! You need to cast!

  const person = data.people.find((person) => {
    return person.id === Number(id); // WARN: return clause!
  });

  if (!person) {
    return res
      .status(400)
      .json({ success: false, message: `no person with ID ${id}` });
  }

  const newPeople = data.people.filter((person) => {
    if (person.id !== Number(id)) {
      return person;
    }
  });

  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
    getPeople,
    insertPerson,
    updatePerson,
    deletePerson
}
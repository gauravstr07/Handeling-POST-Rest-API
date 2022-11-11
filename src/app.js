const express = require("express");

require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = 5000;

app.use(express.json());

// Create a new student
app.post("/students", (req, res) => {
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});

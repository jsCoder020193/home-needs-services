const express = require("express");
const bodyParser = require("body-parser");

const mysqlConnection = require("./connection");
const userRoutes = require("./routes/user");

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Home Needs Services App!')
  });

app.use("/user", userRoutes);

app.listen(8000, () => {
  console.log('Node Back End app listening on port 8000.')
});
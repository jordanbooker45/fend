// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Start up an instance of app

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}!`));

// Get route
app.get("/", getData);

function getData(req, res) {
  res.send(projectData);
  console.log(projectData);
}

// Post route

app.post("/", postData);

function postData(req, res) {
  let newData = request.body;
  let newEntry = {
    temp: newData.temp,
    date: newData.date,
    userResponse: newData.user - response,
  };
  projectData.push(newEntry);
}

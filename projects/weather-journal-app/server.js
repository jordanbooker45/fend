// Setup empty JS object to act as endpoint for all routes
projectData = [{}];

// Require Express to run server and routes

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

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
app.get("/api", getData);

function getData(req, res) {
  res.send(projectData);
}

// Post route

app.post("/api", postData);

function postData(req, res) {
  let newData = req.body;
  let newEntry = {
    temp: newData.temp,
    date: newData.date,
    userResponse: newData.content,
  };
  projectData.push(newEntry);
}

// Bring in API key

dotenv.config();
console.log("the value of the api is: ", process.env.APIKEY);

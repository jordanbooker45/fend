// Bring in App and middleware
const app = require("./app");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

app.use(cors());

// Setup Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}!`));

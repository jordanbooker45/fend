var path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mockAPIResponse = require("./mockAPI.js");
const AYLIENTextAPI = require("aylien_textapi");
const dotenv = require("dotenv").config({ path: "../../.env" });

// Url build variables
const baseUrl = "https://api.aylien.com/api/v1/sentiment/?";
const mode = "mode=tweet&";
const text = "text=John+is+a+very+good+football+player";

const app = express();

/* Middleware*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cors for cross origin allowance

app.use(cors());

app.use(express.static("dist"));

console.log(__dirname);

var textapi = new AYLIENTextAPI({
  application_id: process.env.APP_ID,
  application_key: process.env.API_KEY,
});

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});

app.post("/api", function (req, res) {
  console.log("API called");

  /* //Use this to grab post req
  req.param('text') */

  res.json({ test: "test123" });
  //  console.log(mAr.body);
});

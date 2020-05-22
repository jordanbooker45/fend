var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const AYLIENTextAPI = require("aylien_textapi");
const dotenv = require("dotenv").config({ path: "../../.env" });

// Url build variables
const baseUrl = "https://api.aylien.com/api/v1/sentiment/?";
const mode = "mode=tweet&";
const text = "text=John+is+a+very+good+football+player";

const app = express();

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

app.get("/api", function (req, res) {
  console.log("Print to term");
  res.send(mockAPIResponse);
});

/* Global Variables */

const baseUrl = "https:/api.openweathermap.org/data/2.5/weather?zip=";
const key = "&units=imperial&appid=43b07db9231a7c3610cf20df9a5be3a8";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

const data = {
  date: newDate,
  temp: "",
  content: document.getElementById("feelings").value,
};

/* Function called by event listener */
const retrieveData = async () => {
  try {
    //Grab user input data
    const inputZip = document.getElementById("zip").value;
    const content = document.getElementById("feelings").value;

    //If zip is 5 digits and content is string & not empty then fetch Weather api
    if (
      inputZip <= 99999 &&
      inputZip >= 11111 &&
      typeof content === "string" &&
      content !== ""
    ) {
      const res = await fetch(baseUrl + inputZip + key);
      const weatherData = await res.json();

      //Add temperature and content to data object
      data.temp = weatherData.main.temp;
      data.content = content;

      //If statement is not truthy then throw error and ask user to input valid zip and their feelings
    } else {
      alert("Please enter a valid US zip and your feelings!");
      throw "Zip must be 5 numbers and feelings must be a string";
    }

    //After data is put into object run post request
    sendData();
  } catch (error) {
    console.log("error", error);
  }
};

// Post request to post data to server, then run update UI
const sendData = async () => {
  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  await fetch("http://localhost:5000/api", settings).then(updateUi());
};

//Updates UI by getting projectData object and setting the values to the corrosponding elements
const updateUi = async () => {
  try {
    const response = await fetch("http://localhost:5000/api");
    const data = await response.json();
    document.getElementById("date").innerHTML = data.date;
    document.getElementById("temp").innerHTML = data.temp;
    document.getElementById("content").innerHTML = data.content;
  } catch (error) {
    console.log("error", error);
  }
};

//Click event to trigger first event
document.getElementById("generate").addEventListener("click", retrieveData);

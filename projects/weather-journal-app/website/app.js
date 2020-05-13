/* Global Variables */

const baseUrl = "https:/api.openweathermap.org/data/2.5/weather?zip=";
const key = "&units=imperial&appid=43b07db9231a7c3610cf20df9a5be3a8";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

//Async GET
const data = {
  date: newDate,
  temp: "",
  content: document.getElementById("feelings").value,
};

const retrieveData = async () => {
  try {
    // GET weather Data
    const inputZip = document.getElementById("zip").value;
    const res = await fetch(baseUrl + inputZip + key);
    const weatherData = await res.json();

    if (weatherData) {
      data.temp = weatherData.main.temp;
    }
    const content = document.getElementById("feelings").value;
    if (content) {
      data.content = content;
      console.log(data);
    }
    sendData();
    //Post both weather data and user data to data object
  } catch (error) {
    console.log("error", error);
  }
};

const sendData = async () => {
  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  await fetch("http://localhost:5000/api", settings).then(updateUi(res.body));
};

const updateUi = document
  .getElementById("generate")
  .addEventListener("click", retrieveData);

//maybe use later

//await fetch("http://localhost:5000/api", settings);
// console.log(allData);

// For sure use later

/* document.getElementById("date").innerHTML = newDate;
    document.getElementById("temp").innerHTML = weatherData.main.temp;
    document.getElementById("content").innerHTML = document.getElementById(
      "feelings"
    ).value; */

//JSON.stringify(data)

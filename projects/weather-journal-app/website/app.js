/* Global Variables */

const baseUrl = "https:/api.openweathermap.org/data/2.5/weather?zip=";
const key = "&appid=43b07db9231a7c3610cf20df9a5be3a8";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

//Async GET

const settings = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const retrieveData = async () => {
  const inputZip = document.getElementById("zip").value;
  const res = await fetch(baseUrl + inputZip + key);
  try {
    const weatherData = await res.json();
    document.getElementById("date").innerHTML = newDate;
    document.getElementById("temp").innerHTML = weatherData.main.temp;
    document.getElementById("content").innerHTML = document.getElementById(
      "feelings"
    ).value;
  } catch (error) {
    console.log("error", error);
  }
};

document.getElementById("generate").addEventListener("click", retrieveData);

//maybe use later
//await fetch("http://localhost:5000/api", settings);
// console.log(allData);

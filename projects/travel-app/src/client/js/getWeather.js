async function getWeather() {
  /*   const dotenv = require("dotenv");
    
      console.log(process.env.USERNAME); */
  let long = localStorage.getItem("longitude");
  let lat = localStorage.getItem("latitude");
  let daysUntil = localStorage.getItem("daysUntil");

  if (daysUntil <= 16) {
    try {
      const res = await fetch("https:localhost:5000/geo");
      return res;
    } catch (error) {
      console.log("An error has occured", error);
    }
  } else {
    try {
      const res = await fetch("https:localhost:5000/geo");
      return res;
    } catch (error) {
      console.log("An error has occured", error);
    }
  }
}

export { getWeather };

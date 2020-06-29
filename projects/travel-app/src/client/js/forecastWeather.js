async function forecastWeather(x, y) {
  /*   const dotenv = require("dotenv");
  
    console.log(process.env.USERNAME); */

  console.log(x);
  try {
    const res = await fetch("https:localhost:5000/geo");
    return res;
  } catch (error) {
    console.log("An error has occured", error);
  }
}

export { forecastWeather };

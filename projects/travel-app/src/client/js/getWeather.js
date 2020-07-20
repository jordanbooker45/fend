function getWeather() {
  const wKey = process.env.WEATHERBIT_KEY;
  let long = localStorage.getItem("longitude");
  let lat = localStorage.getItem("latitude");
  let daysUntil = localStorage.getItem("daysUntil");

  async function fetchWeather(key, lo, la, du) {
    if (du <= 16) {
      try {
        const res = await fetch(
          `http://api.weatherbit.io/v2.0/forecast/daily?lat=${la}&lon=${lo}&units=I&key=${key}`
        );
        return res;
      } catch (error) {
        console.log("An error has occured", error);
      }
    } else {
      try {
        const res = await fetch(
          `http://api.weatherbit.io/v2.0/current?lat=${la}&lon=${lo}&units=I&key=${key}`
        );
        return res;
      } catch (error) {
        console.log("An error has occured", error);
      }
    }
  }

  fetchWeather(wKey, long, lat, daysUntil)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data.data[0].temp);
      localStorage.setItem("temp", data.data[0].temp);
      return data;
    });
}

export { getWeather };

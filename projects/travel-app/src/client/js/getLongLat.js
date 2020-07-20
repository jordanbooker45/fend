async function getLocation() {
  let location = localStorage.getItem("location");
  const username = process.env.USERNAME;

  async function getLongLat(loc, user) {
    try {
      const res = await fetch(
        `http://api.geonames.org/searchJSON?q=${loc}&maxRows=10&username=${user}`
      );
      return res;
    } catch (error) {
      console.log("An error has occured", error);
    }
  }

  getLongLat(location, username)
    .then((response) => response.json())
    .then(function (data) {
      localStorage.setItem("long", data.geonames[0].lng);
      localStorage.setItem("lat", data.geonames[0].lat);
      return data;
    });
}

export { getLocation };

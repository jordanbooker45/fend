function logTrip(event) {
  event.preventDefault();

  let arrival = document.getElementById("arrive").value;
  let depart = document.getElementById("depart").value;
  let location = document.getElementById("destination").value;
  let notes = document.getElementById("inputNotes").value;

  console.log("function starting");
  Client.checkInput(arrival, depart, location, notes);

  Client.tripDate(arrival, depart);
  console.log("tripDate called");

  Client.getLocation(location)
    .then(Client.getWeather())
    .then(Client.getPicture())
    .then(() => {
      //Grab HTML Elements to be updated
      // const picContainer = document.getElementById("pic");
      const arriveContainer = document.getElementById("arrive");
      const departContainer = document.getElementById("depart");
      const durationContainer = document.getElementById("duration");
      const daysUntilContainer = document.getElementById("daysUntil");
      const locationContainer = document.getElementById("location");
      const weatherContainer = document.getElementById("weather");
      const notesContainer = document.getElementById("notes");

      //Assign returned data to Elements
      // picContainer.innerHTML = localStorage.getItem("pic");
      arriveContainer.innerHTML = localStorage.getItem("arrive");
      departContainer.innerHTML = localStorage.getItem("depart");
      durationContainer.innerHTML = localStorage.getItem("duration");
      daysUntilContainer.innerHTML = localStorage.getItem("daysUntil");
      locationContainer.innerHTML = localStorage.getItem("location");
      weatherContainer.innerHTML = localStorage.getItem("weather");
      notesContainer.innerHTML = localStorage.getItem("notes");

      //Show Analysis
      analysisContainer.classList.remove("hide");
    });
}

export { logTrip };

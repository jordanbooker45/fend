function logTrip(event) {
  event.preventDefault();

  let arrival = document.getElementById("arrive").value;
  let depart = document.getElementById("depart").value;
  let location = document.getElementById("destination").value;

  Client.checkInput(arrival, depart, location);
 

  Client.getLocation(location)
    .then((res) => res.json())
    .then((data) => {
      //Grab HTML Elements to be updated
      const datesContainer = document.getElementById("dates");
      const durationContainer = document.getElementById("duration");
      const locationContainer = document.getElementById("location");
      const notesContainer = document.getElementById("notes");
      console.log(data);

      //Assign returned data to Elements
      datesContainer.innerHTML = data.dates;
      subjectivityResults.innerHTML = data.subjectivity;
      textResults.innerHTML = data.text;

      //Show Analysis
      analysisContainer.classList.remove("hide");
    });
    Client.tripDate(arrival, depart, long, lat);
}

export { logTrip };

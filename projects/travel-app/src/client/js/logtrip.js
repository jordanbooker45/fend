async function logTrip(event) {
  event.preventDefault();

  let arrival = document.getElementById("arrive").value;
  let depart = document.getElementById("depart").value;
  let location = document.getElementById("destination").value;
  let notes = document.getElementById("inputNotes").value;

  const apiCalls = [
    function () {
      Client.getLocation();
    },
    function () {
      Client.getWeather();
    },
    function () {
      Client.getPicture();
    },
    //function() {Client.updateUi()},
  ];

  Client.checkInput(arrival, depart, location, notes);
  Client.tripDate(arrival, depart);

  async function apiCallProcess(array) {
    for (let i = 0; i < array.length; i++) {
      let r = await array[i]();
    }
  }

  apiCallProcess(apiCalls).then(Client.updateUi(), function rejection(reason) {
    console.log("rejection happened", reason);
  });
}

export { logTrip };

const logTrip = () => {
  let arrival = document.getElementById("arrive").value;
  let depart = document.getElementById("depart").value;

  //use Date.parse() to convert date into milliseconds
  // Include a countdown feature to calculate how many days left until trip
  console.log(arrival);
};

export { logTrip };

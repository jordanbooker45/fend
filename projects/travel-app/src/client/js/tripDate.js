function tripDate(x, y, lo, la) {
  //use Date.parse() to convert date into milliseconds
  // Include a countdown feature to calculate how many days left until trip
  const oneDay = 1000 * 60 * 60 * 24;
  let long = lo;
  let lat = la;
  let arrive = Date.parse(x);
  let depart = Date.parse(y);
  let diff = depart - arrive;
  let days = diff / oneDay;
  console.log(days);
  if (days > 16) {
    //run weather forcast call 
  } else {
   // run current weather
  }
}

export { tripDate };

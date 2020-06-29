function tripDate(x, y) {
  const oneDay = 1000 * 60 * 60 * 24;

  let arrive = Date.parse(x);
  let depart = Date.parse(y);
  let diff = depart - arrive;
  let days = diff / oneDay;

  //maybe add in a nights counter in the future...
  if (days > 16) {
    Client.forecastWeather;
    return days;
  } else {
    Client.currentWeather;
    return days;
  }
}

export { tripDate };

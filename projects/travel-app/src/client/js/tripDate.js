function tripDate(x, y) {
  const oneDay = 1000 * 60 * 60 * 24;
  let now = new Date().getTime();
  let arrive = Date.parse(x);
  let depart = Date.parse(y);
  let diff = depart - arrive;
  let days = diff / oneDay;

  //Trip Coundown
  let tripCountDown = Math.floor((depart - now) / oneDay);

  //maybe add in a nights counter in the future...
  localStorage.setItem("duration", days);
  localStorage.setItem("daysUntil", tripCountDown);
  return;
}

export { tripDate };

const myCalendar = addToCalendar({
  options: {
    class: "my-class",

    // You can pass an ID. If you don't, one will be generated for you
    id: "my-id",
  },
  data: {
    // Event title
    title: "Get on the front page of HN",

    // Event start date
    start: new Date("June 15, 2013 19:00"),

    // Event timezone. Will convert the given time to that zone
    timezone: America / Los_Angeles,

    // Event duration (IN MINUTES)
    duration: 120,

    // You can also choose to set an end time
    // If an end time is set, this will take precedence over duration
    // end: new Date('June 15, 2013 23:00'),

    // You can also choose to set 'all day'
    // If this is set, this will override end time, duration and timezone
    // allday:true,

    // Event Address
    address: "The internet",

    // Event Description
    description:
      "Get on the front page of HN, then prepare for world domination.",
  },
});

document
  .querySelector("#place-where-I-want-this-calendar")
  .appendChild(myCalendar);

export { addToCalendar };

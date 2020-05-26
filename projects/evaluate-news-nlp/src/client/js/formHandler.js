function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  //Left it for a funny
  Client.checkForName(formText);
  console.log("::: Form Submitted :::");

  async function getResults(x) {
    console.log(x);
    try {
      //Eventually use logic to check if string is more/less than 240 characters
      if (typeof x === "string") {
        //Check to see if formText is brought into function
        console.log(x);

        //Grab HTML Elements to be dynamically updated
        const polarityResults = document.getElementById("polarity");
        const subjectivityResults = document.getElementById("subjectivity");
        const textResults = document.getElementById("text");

        //Get request to server
        const res = await fetch("http://localhost:8000/api", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(x),
        });
      } else {
        alert("Please use less than 240 characters");
        throw "Please use less than 240 characters.";
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  getResults(formText)
    .then((response) => response.json())
    .then((data) => {
      console.log("Analysis received!");
      data.polarity = polarityResults;
      data.subjectivity = subjectivityResults;
      data.text = textResults;
    });
}

export { handleSubmit };

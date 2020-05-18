function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  checkForName(formText);

  console.log("::: Form Submitted :::");

  async (formText) => {
    try {
      //Eventually use logic to check if string is more/less than 240 characters
      if (typeof content === "string") {
        //Check to see if formText is brought into function
        console.log(formText);

        //Grab HTML Elements to be dynamically updated
        const polarityResults = getElementById("polarity").innerHTML;
        const subjectivityResults = getElementById("subjectivity").innerHTML;
        const textResults = getElementById("text").innerHTML;

        //Get request to server
        const res = await fetch("http://localhost:8080", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formText),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Analysis received!");
            data.polarity = polarityResults;
            d;
            data.subjectivity = subjectivityResults;
            data.text = textResults;
          });
      } else {
        alert("Please use less than 240 characters");
        throw "Please use less than 240 characters.";
      }
    } catch (error) {
      console.log("error", error);
    }
  };
}

export { handleSubmit };

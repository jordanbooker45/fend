function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("name").value;

  //Checks if text is valid - if not throw error and display hint
  Client.textCheck(formText);

  async function getResults(x) {
    console.log(x);
    try {
      const settings = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ text: x }),
      };

      //POST request to server
      const res = await fetch("http://localhost:8000/api/", settings);
      return res;
    } catch (error) {
      console.log("An error has occured", error);
    }
  }
  getResults(formText)
    .then((res) => res.json())
    .then((data) => {
      //Grab HTML Elements to be updated
      const analysisContainer = document.getElementById("analysis");
      const polarityResults = document.getElementById("polarity");
      const subjectivityResults = document.getElementById("subjectivity");
      const textResults = document.getElementById("text");
      console.log(data);

      //Assign returned data to Elements
      polarityResults.innerHTML = data.polarity;
      subjectivityResults.innerHTML = data.subjectivity;
      textResults.innerHTML = data.text;

      //Show Analysis
      analysisContainer.classList.remove("hide");
    });
}

export { handleSubmit };

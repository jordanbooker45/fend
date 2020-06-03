function textCheck(inputText) {
  console.log("Making sure you entered something...", inputText);
  let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

  if (names.includes(inputText)) {
    alert("Welcome, Captain!");
  }
}

export { textCheck };

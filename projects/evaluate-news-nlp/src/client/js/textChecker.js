function textCheck(it) {
  let inputText = it;
  console.log(`Checking if ${inputText} valid...`);

  const hintContainer = document.querySelector(".hintCont");

  //Set RegExp to count accepted characters

  let re = new RegExp(/^\s*(?:\S\s*){1,280}$/i);
  let OK = re.exec(inputText);

  //If inputText does not match RegExp then throw / else remove hint and finish running formHandler.js
  if (!OK) {
    hintContainer.classList.add("is-active");
    throw "Please enter at least 1 character and less than 280 characters!";
  } else {
    hintContainer.classList.remove("is-active");
  }
}

export { textCheck };

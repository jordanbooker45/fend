function textCheck(it) {
  let inputText = it;
  console.log(`Is ${inputText} valid?`);

  const hintContainer = document.querySelector(".hintCont");

  //Fix regex

  let re = new RegExp(/^[a-z]{1,280}$/i);
  let OK = re.exec(inputText);

  if (!OK) {
    hintContainer.classList.add("is-active");
    throw "Please enter at least 1 character and less than 280 characters!";
  } else {
    hintContainer.classList.remove("is-active");
  }
}

export { textCheck };

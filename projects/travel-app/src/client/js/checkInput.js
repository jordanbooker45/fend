function checkInput(x, y, z, n) {
  let a = x;
  console.log(typeof a);
  let d = y;
  let loc = z;
  let inputNotes = n;
  const hint = document.getElementById("hintContainer");

  if (typeof arrival === "" && typeof depart === "" && typeof location === "") {
    hint.classList.remove("hide");
    throw "Please fill out arrival, departure and location fields";
  } else {
    hint.classList.add("hide");
    localStorage.clear();
    localStorage.setItem("arrive", a);
    localStorage.setItem("depart", d);
    localStorage.setItem("location", loc);
    localStorage.setItem("notes", inputNotes);
    return console.log("items set!");
  }
}

export { checkInput };

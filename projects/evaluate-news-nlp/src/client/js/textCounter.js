function textCountDown() {
  const charDis = document.getElementById("char");
  const fieldInput = document.getElementById("name").value;
  const count = fieldInput.length;

  function displayCount(cnt, x) {
    const charLeft = 280 - cnt;
    x.innerText = charLeft;
  }

  displayCount(count, charDis);
}

export { textCountDown };

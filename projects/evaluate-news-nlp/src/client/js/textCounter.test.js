describe("Filter function", () => {
  test("should count length length of entered text", () => {
    document.body.innerHTML = '<span id="char" ></span>';
    const cnt = 10;
    const char = document.body.innerHTML;

    //simulated keyup event
    const simulateClick = function (elem) {
      // Create event (with options)
      const evt = new KeyboardEvent("onkeyup", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
    };

    //expect(textCountDown(cnt, char).toBeCalled());
    // expect(char.innerText()).toEqual("270");
  });
});

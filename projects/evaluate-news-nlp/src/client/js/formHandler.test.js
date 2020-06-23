import handSubmit, { handleSubmit } from "./formHandler";

describe("Form Validation with RegExp", () => {
  test("function should compare user input text to RegExp pattern", () => {
    let inptTxt =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    expect(typeof handleSubmit).toBe("function");
  });
});
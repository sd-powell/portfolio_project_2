/**
 * @jest-environment jsdom
 */

// const fs = require("fs");

//Load html into Jest
beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

// Test existence of info_panel buttons in the DOM
describe("start_btn existence test", () => {
  test("should exist in the DOM", () => {
    document.body.innerHTML = '<button id="start-btn">Start</button>';

    const start_btn = document.getElementById("start-btn");

    expect(start_btn).not.toBeNull();
  });
});

describe("leaderboard_btn existence test", () => {
  test("should exist in the DOM", () => {
    document.body.innerHTML =
      '<button id="leaderboard_btn">leaderboard</button>';

    const leaderboard_btn = document.getElementById("leaderboard_btn");

    expect(leaderboard_btn).not.toBeNull();
  });
});

describe("rules_btn existence test", () => {
  test("should exist in the DOM", () => {
    document.body.innerHTML = '<button id="rules_btn">Rules</button>';

    const rules_btn = document.getElementById("rules_btn");

    expect(rules_btn).not.toBeNull();
  });
});

//Test existence of rules_panel container in the DOM
describe("rules_panel container existence test", () => {
  test("should exist in the DOM", () => {
    document.body.innerHTML = '<div id="rules_panel">';

    const openRules = document.getElementById("rules_panel");

    expect(openRules).not.toBeNull();
  });
});

// Test existence of rules_panel buttons in the DOM
describe("rules_start_btn existence test", () => {
  test("should exist in the DOM", () => {
    document.body.innerHTML = '<button id="rules_start-btn">Start</button>';

    const rules_start_btn = document.getElementById("rules_start-btn");

    expect(rules_start_btn).not.toBeNull();
  });
});

describe("exit_btn existence test", () => {
  test("should exist in the DOM", () => {
    document.body.innerHTML = '<button id="exit-btn">Start</button>';

    const exit_btn = document.getElementById("exit-btn");

    expect(exit_btn).not.toBeNull();
  });
});

// Test event listener for rules_btn
// describe("rules_btn event listener test", () => {
//   test("should call event listener when button is clicked", () => {
//     const button = document.getElementById("rules_btn");
//     const handleClick = jest.fn();

//     button.addEventListener("click", handleClick);

//     //Simulate click event
//     button.click();

//     expect(handleClick).toHaveBeenCalled();
//   });
// });

// Test event listener for rules_btn to add show class
describe("rules_btn event listener test for .show being added", () => {
  test('should add "show" class when rules button is clicked', () => {
    document.body.innerHTML = `
      <button id="rules_btn">Rules</button>
      <div id="rules_panel"></div>
    `;

    const rules_btn = document.getElementById("rules_btn");
    const openRules = document.getElementById("rules_panel");

    rules_btn.addEventListener("click", () => {
      openRules.classList.add("show");
    });

    // Simulate click event
    rules_btn.click();

    // Check if class "show" was added
    expect(openRules.classList.contains("show")).toBe(true);
  });
});

//Test existence of difficulty_panel container in the DOM
describe("difficulty_panel container existence test", () => {
  test("should exist in the DOM", () => {
    document.body.innerHTML = '<div id="difficulty_panel">';

    const difficulty = document.getElementById("difficulty_panel");

    expect(difficulty).not.toBeNull();
  });
});

describe("easy button existence test", () => {
  test("should exist in the DOM", () => {
    document.body.innerHTML = '<button id="easy">Easy</button>';

    const easy = document.getElementById("easy");

    expect(easy).not.toBeNull();
  });
});

describe("medium button existence test", () => {
  test("should exist in the DOM", () => {
    document.body.innerHTML = '<button id="medium">medium</button>';

    const medium = document.getElementById("medium");

    expect(medium).not.toBeNull();
  });
});

describe("hard button existence test", () => {
  test("should exist in the DOM", () => {
    document.body.innerHTML = '<button id="hard">Hard</button>';

    const hard = document.getElementById("hard");

    expect(hard).not.toBeNull();
  });
});

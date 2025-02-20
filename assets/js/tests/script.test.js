/**
 * @jest-environment jsdom
 */

const { default: expect } = require("expect");

// const fs = require("fs");

//Load html into Jest
beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();

  // load javaScript
  require("../script.js");
});

// Test existence of info_panel buttons in the DOM
describe("start_btn existence test", () => {
  test("start_btn exists in the HTML", () => {
    const startBtn = document.getElementById("start_btn");
    expect(startBtn).not.toBeNull();
  });
});

describe("leaderboard_btn existence test", () => {
  test(" leaderboard_btn should exist in the DOM", () => {
    const leaderboardBtn = document.getElementById("leaderboard_btn");
    expect(leaderboardBtn).not.toBeNull();
  });
});

describe("rules_btn existence test", () => {
  test("rules_btn should exist in the DOM", () => {
    const rulesBtn = document.getElementById("rules_btn");
    expect(rulesBtn).not.toBeNull();
  });
});

//Test existence of rules_panel container in the DOM
describe("rules_panel container existence test", () => {
  test("rules_panel should exist in the DOM", () => {
    const openRules = document.getElementById("rules_panel");
    expect(openRules).not.toBeNull();
  });
});

// Test existence of rules_panel buttons in the DOM
describe("rules_start_btn existence test", () => {
  test("rules_start_btn should exist in the DOM", () => {
    const rulesStartBtn = document.getElementById("rules_start_btn");
    expect(rulesStartBtn).not.toBeNull();
  });
});

describe("exit_btn existence test", () => {
  test("exit_btn should exist in the DOM", () => {
    const exitBtn = document.getElementById("exit_btn");
    expect(exitBtn).not.toBeNull();
  });
});

// Test event listener for rules_btn to add show class
describe("rules_btn event listener test for .show being added", () => {
  test("Clicking rules_btn adds 'show' class to openRules", () => {
    const rulesBtn = document.getElementById("rules_btn");
    const openRules = document.getElementById("rules_panel");

    // Ensure elements exist
    expect(rulesBtn).not.toBeNull();
    expect(openRules).not.toBeNull();

    // Simulate a click event
    rulesBtn.click();

    // Check if "show" class is added
    expect(openRules.classList.contains("show")).toBe(true);
  });
});

//Test existence of difficulty_panel container in the DOM
describe("difficulty_panel container existence test", () => {
  test("difficulty_panel should exist in the DOM", () => {
    const difficulty = document.getElementById("difficulty_panel");
    expect(difficulty).not.toBeNull();
  });
});

describe("easy button existence test", () => {
  test("should exist in the DOM", () => {
    const easy = document.getElementById("easy");
    expect(easy).not.toBeNull();
  });
});

describe("medium button existence test", () => {
  test("should exist in the DOM", () => {
    const medium = document.getElementById("medium");
    expect(medium).not.toBeNull();
  });
});

describe("hard button existence test", () => {
  test("should exist in the DOM", () => {
    const hard = document.getElementById("hard");
    expect(hard).not.toBeNull();
  });
});

// Test event listener for rules_btn to add show class
describe("start_btn event listener test for .show being added", () => {
  test('should add "show" class when start button is clicked', () => {
    const startBtn = document.getElementById("start_btn");
    const difficulty = document.getElementById("difficulty_panel");

    expect(startBtn).not.toBeNull;
    expect(difficulty).not.toBeNull;

    // Simulate click event
    start_btn.click();

    // Check if class "show" was added
    expect(difficulty.classList.contains("show")).toBe(true);
  });
});

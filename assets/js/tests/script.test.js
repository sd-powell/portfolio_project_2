/** @jest-environment jsdom */

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

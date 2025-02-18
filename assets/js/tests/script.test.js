/** @jest-environment jsdom */

const start_btn = document.getElementById("start-btn");
const leaderboard_btn = document.getElementById("leaderboard_btn");
const rules_btn = document.getElementById("rules_btn");

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

    const start_btn = document.getElementById("leaderboard_btn");

    expect(start_btn).not.toBeNull();
  });
});

describe("rules_btn existence test", () => {
  test("should exist in the DOM", () => {
    document.body.innerHTML = '<button id="rules_btn">Rules</button>';

    const start_btn = document.getElementById("rules_btn");

    expect(start_btn).not.toBeNull();
  });
});

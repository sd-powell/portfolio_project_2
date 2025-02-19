/**
 * @jest-environment jsdom
 */

import { rules_btn, openRules } from "../script";

// const { game } = require("../script");

//Load html into Jest
beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

// describe("game object contains correct keys", () => {
//   test("score key exists", () => {
//     expect("score" in game).toBe(true);
//   });
//   test("currentGame key exists", () => {
//     expect("currentGame" in game).toBe(true);
//   });
// });

// //Test existence of info_panel buttons in the DOM
// describe("start_btn existence test", () => {
//   test("should exist in the DOM", () => {
//     document.body.innerHTML = '<button id="start-btn">Start</button>';

//     const start_btn = document.getElementById("start-btn");

//     expect(start_btn).not.toBeNull();
//   });
// });

// describe("leaderboard_btn existence test", () => {
//   test("should exist in the DOM", () => {
//     document.body.innerHTML =
//       '<button id="leaderboard_btn">leaderboard</button>';

//     const leaderboard_btn = document.getElementById("leaderboard_btn");

//     expect(leaderboard_btn).not.toBeNull();
//   });
// });

// describe("rules_btn existence test", () => {
//   test("should exist in the DOM", () => {
//     document.body.innerHTML = '<button id="rules_btn">Rules</button>';

//     const rules_btn = document.getElementById("rules_btn");

//     expect(rules_btn).not.toBeNull();
//   });
// });

// //Test existence of rules_panel container in the DOM
// describe("rules_panel container existence test", () => {
//   test("should exist in the DOM", () => {
//     document.body.innerHTML = '<div id="rules_panel">';

//     const openRules = document.getElementById("rules_panel");

//     expect(openRules).not.toBeNull();
//   });
// });

//Test event listener for rules_btn
describe("rules_btn event listener test", () => {
  test('should add "show" class to openRules when clicked', () => {
    //check if openRules doesn't contain show class
    expect(openRules.classList.contains("show")).toBe(false);
    //Simulate click event
    rules_btn.click();
    //Check if openRules contains show class
    expect(openRules.classList.contains("show")).toBe(true);
  });
});

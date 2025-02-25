/**
 * @jest-environment jsdom
 */

beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("../index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

// const { beforeAll } = require("jest-circus");
// Import functions if using modules (Uncomment if needed)
const { parseHtmlEntities } = require("../script.js");

describe("parseHtmlEntities", () => {
  test("should convert HTML entities into normal characters", () => {
    expect(parseHtmlEntities("Hello &amp; World")).toBe("Hello & World");
    expect(parseHtmlEntities("5 &lt; 10")).toBe("5 < 10");
    expect(parseHtmlEntities("5 &gt; 2")).toBe("5 > 2");
    expect(parseHtmlEntities("&quot;Hello&quot;")).toBe('"Hello"');
    expect(parseHtmlEntities("&#39;Hi&#39;")).toBe("'Hi'");
  });
});

// describe("increaseScore", () => {
//   test("should increase score by 10 points", () => {
//     score = 0; // Reset score before test
//     increaseScore();
//     expect(score).toBe(10);

//     increaseScore();
//     expect(score).toBe(20);
//   });
// });

// describe("resetQuiz", () => {
//   test("should reset quiz variables", () => {
//     questionNum = 5;
//     questionCount = 6;
//     score = 50;
//     correctAnswer = "Old Answer";

//     resetQuiz();

//     expect(questionNum).toBe(0);
//     expect(questionCount).toBe(1);
//     expect(score).toBe(0);
//     expect(correctAnswer).toBeUndefined();
//   });
// });

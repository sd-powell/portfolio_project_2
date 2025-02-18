/**
 * @jest-environment jsdom
 */

const start_btn = document.getElementById("start-btn");

describe("start_btn existence test", () => {
  test("should exist in the DOM", () => {
    document.body.innerHTML = '<button id="start-btn">Start</button>';

    const start_btn = document.getElementById("start-btn");

    expect(start_btn).not.toBeNull();
  });
});

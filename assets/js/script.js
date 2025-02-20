//QUIZ API SETTINGS
const easyQuiz =
  "https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple";
const mediumQuiz =
  "https://opentdb.com/api.php?amount=5&category=12&difficulty=medium&type=multiple";
const hardQuiz =
  "https://opentdb.com/api.php?amount=5&category=12&difficulty=hard&type=multiple";

// Declare const variables for site interactivity
// info_panel buttons
const start_btn = document.getElementById("start_btn");
const leaderboard_btn = document.getElementById("leaderboard_btn");
const rules_btn = document.getElementById("rules_btn");

// info_panel container
const openRules = document.getElementById("rules_panel");

// rules_panel buttons
const exit_btn = document.getElementById("exit_btn");
const rules_start_btn = document.getElementById("rules_start_btn");

//Open Rules Panel - event listener
rules_btn.addEventListener("click", () => {
  openRules.classList.add("show");
});

//Exit Rules Panel - event listener
exit_btn.addEventListener("click", () => {
  openRules.classList.remove("show");
});

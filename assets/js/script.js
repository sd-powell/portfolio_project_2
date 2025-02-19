//QUIZ API SETTINGS
const easyQuiz =
  "https://opentdb.com/api.php?command=request&amount=5&category=12&difficulty=easy&type=multiple";
const mediumQuiz =
  "https://opentdb.com/api.php?command=request&amount=5&category=12&difficulty=medium&type=multiple";
const hardQuiz =
  "https://opentdb.com/api.php?command=request&amount=5&category=12&difficulty=hard&type=multiple";

// Declare const variables for site interactivity
// info_panel buttons
const start_btn = document.getElementById("start_btn");
const leaderboard_btn = document.getElementById("leaderboard_btn");
const rules_btn = document.getElementById("rules_btn");
// info_panel container
const openRules = document.getElementById("rules_panel");

// Declare game variables
let quizData = {};
let questionNum = 0;
let questionCount = 1;
let apiAddress;
let score = 0;

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

// rules_panel container
const openRules = document.getElementById("rules_panel");

// rules_panel buttons
const exit_btn = document.getElementById("exit_btn");
const rules_start_btn = document.getElementById("rules_start_btn");

// rules_panel container
const difficulty = document.getElementById("difficulty_panel");

// difficulty_panel buttons
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");

// quiz_panel container
const quizPanel = document.getElementById("quiz_panel");

// Add event listener to difficulty buttons
easy.addEventListener("click", apiCall);
medium.addEventListener("click", apiCall);
hard.addEventListener("click", apiCall);

// Open Rules Panel - event listener
rules_btn.addEventListener("click", () => {
  openRules.classList.add("show");
});

// Exit Rules Panel - event listener
exit_btn.addEventListener("click", () => {
  openRules.classList.remove("show");
});

// Open Difficulty Panel - event listener
start_btn.addEventListener("click", () => {
  difficulty.classList.add("show");
});

// API call function
// Researched methods on https://rapidapi.com/guides/fetch-api-async-await
async function apiCall() {
  const response = await fetch(apiAddress);
  if (response.status >= 200 && response.status <= 299) {
    data = await response.json();
    // Hide difficulty_panel
    hideDifficultyPanel();
    // Show quiz_panel
    showQuiz_panel();
    getQuestion(data);
  }
}

// Hide difficulty_panel function
function hideDifficultyPanel() {
  difficulty.classList.remove("show");
}

//Show quiz_panel function
function showQuiz_panel() {
  quizPanel.classList.add("show");
}

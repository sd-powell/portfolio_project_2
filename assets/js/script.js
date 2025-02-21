// Declare game variables
let quizData = {};
let questionNum = 0;
let questionCount = 1;
let score = 0;
let correctAnswer;
let selectedAnswer;
let acceptAnswers = true;
let scoreCount = document.getElementById("score_total");
let apiAddress;

// Quiz api settings
const quizAPIs = {
  easy: "https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple",
  medium:
    "https://opentdb.com/api.php?amount=5&category=12&difficulty=medium&type=multiple",
  hard: "https://opentdb.com/api.php?amount=5&category=12&difficulty=hard&type=multiple",
};

// Declare const variables for site interactivity
// info_panel buttons
const start_btn = document.getElementById("start_btn");
const leaderboard_btn = document.getElementById("leaderboard_btn");
const rules_btn = document.getElementById("rules_btn");
const openRules = document.getElementById("rules_panel");
const exit_btn = document.getElementById("exit_btn");
const rules_start_btn = document.getElementById("rules_start_btn");
const difficulty = document.getElementById("difficulty_panel");
const quizPanel = document.getElementById("quiz_panel");
const question = document.getElementById("question_title");
const answer_list = document.querySelector(".answer_list");
const next = document.getElementById("next_btn");

const answerBtns = document.getElementsByClassName("answer_btn");

const answer1 = document.getElementById("answerNo1");
const answer2 = document.getElementById("answerNo2");
const answer3 = document.getElementById("answerNo3");
const answer4 = document.getElementById("answerNo4");

// Get all answers from answer_list
const allAnswers = answer_list.children.length;

// Add event listener to difficulty buttons
// Event delegation method - https://www.freecodecamp.org/news/event-delegation-javascript/
document.getElementById("difficulty_panel").addEventListener("click", (e) => {
  if (e.target.matches("#easy, #medium, #hard")) {
    apiAddress = quizAPIs[e.target.id]; // Get correct API based on clicked button
    apiCall();
  }
});

// Event listeners for opening and closing panels
rules_btn.addEventListener("click", () => openRules.classList.add("show"));
exit_btn.addEventListener("click", () => openRules.classList.remove("show"));
start_btn.addEventListener("click", () => difficulty.classList.add("show"));

// API call function
// Researched methods on https://rapidapi.com/guides/fetch-api-async-await
async function apiCall() {
  const response = await fetch(apiAddress);
  // Check api response codes - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses
  if (response.status >= 200 && response.status <= 299) {
    data = await response.json();
    // Hide difficulty_panel
    hideDifficultyPanel();
    // Show quiz_panel
    showQuiz_panel();
    getQuestions(data);
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

// Decode special characters
// Based on suggested solutions from https://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it and  https://jsfiddle.net/Be2Bd/1/
function parseHtmlEntities(str) {
  return str.replace(/&#(\d+);/g, function (match, num) {
    return String.fromCharCode(num);
  });
}

// Score function
// Based on content from https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score
function increaseScore() {
  score += 10;
  scoreCount.innerText = `${score}`;
}

// Get question function
// https://stackoverflow.com/questions/72588081/working-on-a-javascript-quiz-app-and-having-an-issue-dynamically-generating-ques
function getQuestions(data) {
  next.classList.add("hide");
  // Check buttons are not disabled
  document
    .querySelectorAll(".answer_btn")
    .forEach((btn) => (btn.disabled = false));
  let results = data.results[questionNum];
  console.log(results);
  // Check no of questions and loop
  if (questionNum <= 5) {
    // Add question_title to UI
    question.innerHTML = results.question;
    correctAnswer = results.correct_answer;
    // Hold answers in array
    const answers = [...results.incorrect_answers, correctAnswer];
    // Add answers to buttons in UI
    answerNo1.innerHTML = `${answers[0]}`;
    answerNo2.innerHTML = `${answers[1]}`;
    answerNo3.innerHTML = `${answers[2]}`;
    answerNo4.innerHTML = `${answers[3]}`;

    // Checks for the correct answer and adds attribute
    for (let button of answerBtns) {
      if (button.innerHTML === parseHtmlEntities(correctAnswer)) {
        button.setAttribute("data-correct", "true");
      }
      // Add event listener to buttons for answer checking after click
      button.addEventListener("click", answerCheck);
    }
  }
}

// Function to check answer on a button click
// https://stackoverflow.com/questions/73310918/how-do-i-check-the-answer-of-a-clicked-button-to-see-if-it-matches-the-correct-a
// Custom data attributes researched here - https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
function answerCheck(a) {
  // Get ID of clicked answer
  selectedAnswer = a.target.getAttribute("id");

  // Check clicked answer is correct
  if (a.target.dataset.correct) {
    // Add correct button style
    document.getElementById(selectedAnswer).classList.add("correct");
    // Increase the score
    increaseScore();
    console.log("Correct Answer");
  } else {
    // Add incorrect button style
    document.getElementById(selectedAnswer).classList.add("incorrect");
    // Show correct answer to user
    let showCorrectAnswer = document.querySelector("[data-correct='true']");
    showCorrectAnswer.classList.add("correct");
    console.log("Wrong Answer");
  }
  // Disable answer buttons after user has made their selection
  document.querySelectorAll(".answer_btn").forEach((btn) => {
    btn.classList.add("disabled");
  });
  // Shows next button for user to proceed and adds event listener for click
  next.classList.remove("hide");
  //   next.addEventListener("click");
}

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
  easy: "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple",
  medium:
    "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple",
  hard: "https://opentdb.com/api.php?amount=10&category=12&difficulty=hard&type=multiple",
};

// Declare const variables for site interactivity
const start_btn = document.getElementById("start_btn");
const leaderboard_btn = document.getElementById("leaderboard_btn");
const rules_btn = document.getElementById("rules_btn");
const openRules = document.getElementById("rules_panel");
const exit_btn = document.getElementById("exit_btn");
const rules_start_btn = document.getElementById("rules_start_btn");
const difficulty = document.getElementById("difficulty_panel");
const quizPanel = document.getElementById("quiz_panel");
const question = document.getElementById("question_title");
const questionNo = document.getElementById("questionNo");
const answer_list = document.querySelector(".answer_list");
const next = document.getElementById("next_btn");
const resultsPanel = document.getElementById("results_panel");
const finalScore = document.getElementById("score_number");
const userName = document.getElementById("user_name");
const submitScore = document.getElementById("submit_score");
const quitQuiz = document.getElementById("quit_quiz");
const restartQuiz = document.getElementById("restart_quiz");
const highScore = document.getElementById("high_scores");
const leaderStart = document.getElementById("leaderboard_start");
const leaderQuit = document.getElementById("leaderboard_quit");

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
leaderboard_btn.addEventListener("click", () => showLeaderboard());
exit_btn.addEventListener("click", () => openRules.classList.remove("show"));
start_btn.addEventListener("click", () => difficulty.classList.add("show"));
rules_start_btn.addEventListener("click", () => {
  rules_panel.classList.remove("show");
  difficulty.classList.add("show");
});
leaderStart.addEventListener("click", () => {
  resetQuiz();
  resultsPanel.classList.remove("show");
  difficulty.classList.add("show");
});
leaderQuit.addEventListener("click", function () {
  leaderboard_panel.classList.remove("show");
  info_panel.classList.add("show");
  resetQuiz();
});

// Api call function
// Researched methods on https://rapidapi.com/guides/fetch-api-async-await
async function apiCall() {
  try {
    const response = await fetch(apiAddress);
    if (!response.ok) {
      throw new Error("Failed to fetch quiz data");
    }
    const data = await response.json();
    hideDifficultyPanel();
    showQuiz_panel();
    getQuestions(data);
  } catch (error) {
    console.error("Error fetching quiz data:", error);
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
  return str.replace(/&#(\d+);/g, (_, num) => String.fromCharCode(num));
}

// Score function
// Based on content from https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score
function increaseScore() {
  score += 10;
  scoreCount.innerText = score;
}

// Get question function
// https://stackoverflow.com/questions/72588081/working-on-a-javascript-quiz-app-and-having-an-issue-dynamically-generating-ques
function getQuestions(data) {
  if (data) {
    quizData = data;
  }

  next.classList.add("hide");

  if (questionNum >= quizData.results.length) {
    showResults();
    return;
  }

  // Enable all answer buttons
  document
    .querySelectorAll(".answer_btn")
    .forEach((btn) => (btn.disabled = false));

  let results = quizData.results[questionNum];

  question.innerHTML = results.question;
  correctAnswer = results.correct_answer;

  // Shuffle and assign answers to buttons dynamically
  let answers = [...results.incorrect_answers, correctAnswer].sort(
    () => Math.random() - 0.5
  );

  // Generate answer buttons dynamically
  answer_list.innerHTML = answers
    .map(
      (answer, index) =>
        `<button class="answer_btn" id="answerNo${
          index + 1
        }">${parseHtmlEntities(answer)}</button>`
    )
    .join("");

  // Remove old event listeners and add new to answer buttons
  answer_list.removeEventListener("click", answerCheck);
  answer_list.addEventListener("click", answerCheck);
}

// Function to check answer on a button click
// https://stackoverflow.com/questions/73310918/how-do-i-check-the-answer-of-a-clicked-button-to-see-if-it-matches-the-correct-a
// Custom data attributes researched here - https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
function answerCheck(event) {
  if (!event.target.matches(".answer_btn")) return; // Ensure a button was clicked

  selectedAnswer = event.target;
  let isCorrect = selectedAnswer.innerHTML === parseHtmlEntities(correctAnswer);

  // Disable answer buttons after user has made their selection
  document.querySelectorAll(".answer_btn").forEach((btn) => {
    btn.classList.add("disabled");
  });

  if (isCorrect) {
    selectedAnswer.classList.add("correct");
    selectedAnswer.dataset.correct = "true"; // Add FontAwesome tick via CSS
    increaseScore();
  } else {
    selectedAnswer.classList.add("incorrect");

    // Find the correct answer and highlight it
    let correctButton = [...document.querySelectorAll(".answer_btn")].find(
      (btn) => btn.innerHTML === parseHtmlEntities(correctAnswer)
    );

    if (correctButton) {
      correctButton.dataset.correct = "true";
      correctButton.classList.add("correct");
    }
  }

  // Shows next button for user to proceed and adds event listener for click
  next.classList.remove("hide");
  next.addEventListener("click", nextQuestion, { once: true });
}

// Next question function
function nextQuestion() {
  if (questionNum < quizData.results.length - 1) {
    questionNum++;
    questionCount++;
    questionNo.innerText = `${questionCount}`;
    getQuestions(quizData);
  } else {
    showResults();
    return;
  }

  // Remove correct and incorrect classes from selected answers
  let selectedButton = document.querySelector(
    ".answer_btn.correct, .answer_btn.incorrect"
  );
  if (selectedButton) {
    selectedButton.classList.remove("correct", "incorrect");
  }

  // Remove highlights from answers
  let displayCorrectAnswer = document.querySelector("[data-correct='true']");
  if (displayCorrectAnswer) {
    displayCorrectAnswer.classList.remove("correct");
    displayCorrectAnswer.removeAttribute("data-correct");
  }

  // Reset all buttons
  resetButtons();

  //Hide the next button until the user selects the answer
  next.classList.add("hide");
}

// Reset answer buttons function
function resetButtons() {
  document.querySelectorAll(".answer_btn").forEach((button) => {
    button.removeAttribute("data-correct");
    button.classList.remove("correct", "incorrect", "disabled");
    button.disabled = false;
  });
}

// Show results panel at end of quiz
function showResults() {
  resultsPanel.classList.add("show");
  quizPanel.classList.remove("show");

  finalScore.innerText = `${score} out of ${quizData.results.length * 10}`;
}

// Save high score function
function saveHighScore() {
  return new Promise((resolve) => {
    const playerName = userName.value.trim();
    if (!playerName) {
      alert("Please enter your name before submitting!");
      return;
    }

    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Create new score entry
    const newScore = { playerName, score };
    // Add new score to high scores array
    highScores.push(newScore);
    // Sort scores in descending order
    highScores.sort((a, b) => b.score - a.score);
    // Keep only top 10 scores
    highScores.splice(10);
    // Save updated scores back to localStorage
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Show leaderboard panel
    showLeaderboard();

    resolve();
  });
}

// Function to show leaderboard and populate scores
function showLeaderboard() {
  resultsPanel.classList.remove("show");
  leaderboard_panel.classList.add("show");

  const highScoresTable = document.querySelector("#high_scores tbody");
  highScoresTable.innerHTML = ""; // Clear existing scores

  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Loop through scores and create list items
  highScores.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${entry.playerName}</td>
      <td>${entry.score}</td>
    `;
    highScoresTable.appendChild(row);
  });
}

// Event listener for submit button
submitScore.addEventListener("click", function (event) {
  event.preventDefault();
  saveHighScore();
});

function resetQuiz() {
  questionNum = 0;
  questionCount = 1;
  score = 0;
  scoreCount.innerText = "0";
  finalScore.innerText = "0"; // Reset displayed score

  // Clear any existing questions and answers
  question.innerHTML = "";
  answer_list.innerHTML = "";

  // Reset button states
  next.classList.add("hide");

  // Remove any applied styles
  document.querySelectorAll(".answer_btn").forEach((btn) => {
    btn.classList.remove("correct", "incorrect", "disabled");
    btn.removeAttribute("data-correct");
    btn.disabled = false;
  });
  // Hide quiz and results panel
  quizPanel.classList.remove("show");
  resultsPanel.classList.remove("show");
  leaderboard_panel.classList.remove("show");
}

// Declare game variables (Track game state)
let quizData = {};
let questionNum = 0;
let questionCount = 1;
let score = 0;
let correctAnswer;
let selectedAnswer;
let scoreCount = document.getElementById("score_total");
let apiAddress;
let timerDisplay;
let timerInterval;
let quizTimerText;
let timeLine;

// Quiz API settings (Fetches quiz questions based on difficulty)
const quizAPIs = {
  easy: "https://opentdb.com/api.php?amount=2&category=12&difficulty=easy&type=multiple",
  medium:
    "https://opentdb.com/api.php?amount=2&category=12&difficulty=medium&type=multiple",
  hard: "https://opentdb.com/api.php?amount=2&category=12&difficulty=hard&type=multiple",
};

// Declare UI elements for interaction
const infoPanel = document.getElementById("info_panel");
const startBtn = document.getElementById("start_btn");
const leaderboard_btn = document.getElementById("leaderboard_btn");
const rulesBtn = document.getElementById("rules_btn");
const rulesPanel = document.getElementById("rules_panel");
const exitBtn = document.getElementById("exit_btn");
const rulesStartBtn = document.getElementById("rules_start_btn");
const difficultyPanel = document.getElementById("difficulty_panel");
const diffExitBtn = document.getElementById("diff_exit_btn");
const quizPanel = document.getElementById("quiz_panel");
const quizExitBtn = document.getElementById("quiz_exit_btn");
const question = document.getElementById("question_title");
const questionNo = document.getElementById("questionNo");
const answerList = document.querySelector(".answer_list");
const nextBtn = document.getElementById("next_btn");
const resultsPanel = document.getElementById("results_panel");
const finalScore = document.getElementById("score_number");
const userName = document.getElementById("user_name");
const submitScore = document.getElementById("submit_score");
const restartQuiz = document.getElementById("restart_quiz");
const leaderboardPanel = document.getElementById("leaderboard_panel");
const leaderStart = document.getElementById("leaderboard_start");
const leaderQuit = document.getElementById("leaderboard_quit");

// Add event listener to difficulty selection buttons
// Event delegation method - https://www.freecodecamp.org/news/event-delegation-javascript/
document.getElementById("difficulty_panel").addEventListener("click", (e) => {
  if (e.target.matches("#easy, #medium, #hard")) {
    apiAddress = quizAPIs[e.target.id]; // Get correct API based on clicked button
    apiCall();
  }
});

// Event listeners for opening and closing quiz panels
rulesBtn.addEventListener("click", () => rulesPanel.classList.add("show"));
leaderboard_btn.addEventListener("click", () => showLeaderboard());
exitBtn.addEventListener("click", quitToHome);
leaderQuit.addEventListener("click", quitToHome);
quizExitBtn.addEventListener("click", quitToHome);
diffExitBtn.addEventListener("click", quitToHome);
restartQuiz.addEventListener("click", startQuiz);
leaderStart.addEventListener("click", startQuiz);
rulesStartBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", startQuiz);

// Quit Quiz to Home
function quitToHome() {
  resetQuiz();
  leaderboardPanel.classList.remove("show");
  rulesPanel.classList.remove("show");
  resultsPanel.classList.remove("show");
  quizPanel.classList.remove("show");
  difficultyPanel.classList.remove("show");
  infoPanel.classList.add("show");
}

// Start quiz and show difficulty panel
function startQuiz() {
  resetQuiz();
  rulesPanel.classList.remove("show");
  resultsPanel.classList.remove("show");
  difficultyPanel.classList.add("show");
}

// API call function (Fetches quiz data from the selected difficulty)
// Researched methods on https://rapidapi.com/guides/fetch-api-async-await
async function apiCall() {
  try {
    questionCount = 1; // Reset question count when a new quiz starts
    questionNo.innerText = `${questionCount}`; // Update UI

    const response = await fetch(apiAddress);

    // Check if response is okay (status code 200-299)
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    // Check if the API returned quiz questions
    if (!data.results || data.results.length === 0) {
      throw new Error("No quiz data available");
    }
    // If API call is successful, show the quiz
    hideDifficultyPanel();
    showQuiz_panel();
    getQuestions(data);
  } catch (error) {
    console.error("Error fetching quiz data:", error);

    // Redirect user to a custom 500 error page
    window.location.href = "/500.html";
  }
}

// Hides the difficulty selection panel once a level is selected
function hideDifficultyPanel() {
  difficultyPanel.classList.remove("show");
}

// Shows the quiz panel when the game starts
function showQuiz_panel() {
  quizPanel.classList.add("show");
}

// Converts HTML entity codes to readable text (e.g., `&quot;` → `"`)
// Based on suggested solutions from https://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it and  https://jsfiddle.net/Be2Bd/1/
function parseHtmlEntities(str) {
  return str.replace(/&#(\d+);/g, (_, num) => String.fromCharCode(num));
}

// Updates the score when a correct answer is selected
// Based on content from https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score
function increaseScore() {
  score += 10;
  scoreCount.innerText = score;
}

// Retrieves and displays a new question from API data
// https://stackoverflow.com/questions/72588081/working-on-a-javascript-quiz-app-and-having-an-issue-dynamically-generating-ques
function getQuestions(data) {
  if (data) {
    quizData = data;
  }

  nextBtn.classList.add("hide"); // Hide "Next" button initially

  if (questionNum >= quizData.results.length) {
    showResults(); // End quiz if no more questions
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
  answerList.innerHTML = answers
    .map(
      (answer, index) =>
        `<button class="answer_btn" id="answerNo${
          index + 1
        }">${parseHtmlEntities(answer)}</button>`
    )
    .join("");

  // Remove old event listeners and add new to answer buttons
  answerList.removeEventListener("click", answerCheck);
  answerList.addEventListener("click", answerCheck);

  startTimer(15); // Start timer for the new question
}

// Handles answer selection and validation
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

  // Shows nextBtn button for user to proceed and adds event listener for click
  nextBtn.classList.remove("hide");
  nextBtn.addEventListener("click", nextQuestion, { once: true });
}

// Loads the next question in the quiz
function nextQuestion() {
  resetTimer(); // Reset timer FIRST to ensure UI updates immediately

  if (questionNum < quizData.results.length - 1) {
    questionNum++;
    questionCount++;
    questionNo.innerText = `${questionCount}`;
    getQuestions(quizData);
  } else {
    showResults();
    return;
  }

  let selectedButton = document.querySelector(
    ".answer_btn.correct, .answer_btn.incorrect"
  );
  if (selectedButton) {
    selectedButton.classList.remove("correct", "incorrect");
  }

  let displayCorrectAnswer = document.querySelector("[data-correct='true']");
  if (displayCorrectAnswer) {
    displayCorrectAnswer.classList.remove("correct");
    displayCorrectAnswer.removeAttribute("data-correct");
  }

  resetButtons();
  nextBtn.classList.add("hide");
}

// Resets answer buttons for a new question
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
}

// Function to show leaderboard and populate scores
function showLeaderboard() {
  resultsPanel.classList.remove("show");
  leaderboardPanel.classList.add("show");

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
  answerList.innerHTML = "";

  // Reset button states
  nextBtn.classList.add("hide");

  // Remove any applied styles
  document.querySelectorAll(".answer_btn").forEach((btn) => {
    btn.classList.remove("correct", "incorrect", "disabled");
    btn.removeAttribute("data-correct");
    btn.disabled = false;
  });
  // Hide quiz and results panel
  quizPanel.classList.remove("show");
  resultsPanel.classList.remove("show");
  leaderboardPanel.classList.remove("show");
}

// Timer function
function startTimer(time) {
  // Ensure elements are up to date (in case DOM has changed)
  timerDisplay = document.getElementById("timer_secs");
  quizTimerText = document.querySelector(".quiz_timer");
  timeLine = document.querySelector(".time_line");

  // Clear any existing timer before starting a new one
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  let totalTime = time;
  timeLine.style.width = "100%"; // Reset progress bar to full width

  timerInterval = setInterval(() => {
    timerDisplay.textContent = time;
    time--;

    if (time < 10) {
      timerDisplay.textContent = "0" + time;
    }

    let progressWidth = Math.max((time / totalTime) * 100, 0);
    timeLine.style.width = progressWidth + "%";

    if (time < 0) {
      clearInterval(timerInterval);
      quizTimerText.innerHTML = "Time's up!";

      document.querySelectorAll(".answer_btn").forEach((btn) => {
        btn.classList.add("disabled");
      });

      let correctButton = [...document.querySelectorAll(".answer_btn")].find(
        (btn) => btn.innerHTML === parseHtmlEntities(correctAnswer)
      );

      if (correctButton) {
        correctButton.classList.add("correct");
        correctButton.dataset.correct = "true";
      }

      nextBtn.classList.remove("hide");
      nextBtn.addEventListener(
        "click",
        () => {
          resetTimer();
          nextQuestion();
        },
        { once: true }
      );
    }
  }, 1000);
}

// Instantly resets the timer UI
function resetTimer() {
  timerDisplay = document.getElementById("timer_secs");
  quizTimerText = document.querySelector(".quiz_timer");
  timeLine = document.querySelector(".time_line");

  if (!timerDisplay || !quizTimerText || !timeLine) {
    console.error("Error: Timer elements not found during reset!");
    return;
  }

  // **Clear any previous interval to prevent overlaps**
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  // **Instantly reset the timer UI**
  quizTimerText.innerHTML = `Time: <span id="timer_secs">15</span>`;
  timerDisplay.textContent = "15";
  timeLine.style.width = "100%"; // Reset progress bar immediately
}

---

![DJ Silver Soul website shown in a variety of screen sizes](documentation/dj-silver-soul-responsive.webp)

Visit the deployed site here: [DJ Silver Soul](https://sd-powell.github.io/portfolio_project_1/)

---

## CONTENTS

- [AUTOMATED TESTING](#automated-testing)
  - [W3C Validator](#w3c-validation)
  - [W3C CSS Validator](#css-validation)
  - [Lighthouse](#lighthouse)
- [MANUAL TESTING](#manual-testing)
  - [Full Testing](#full-testing)
  - [Browser Compatibility](#browser)
  - [Responsiveness](#responsiveness)
  - [Accessibility](#accessibility)
  - [Testing User Stories](#testing-user)
  - [Features Testing](#features-test)
  - [Existing Features](#existing-features)
  - [Manual Features Testing](#manual-features-test)

Testing was conducted continuously throughout the development process to ensure a functional and user-friendly website. Chrome Developer Tools were extensively utilised during the build to identify and resolve issues promptly. Regular testing allowed for a smoother development process and ensured the final product met quality standards.

Throughout the development process, ChatGPT was utilised as a valuable resource for brainstorming ideas, refining content, and troubleshooting challenges. By offering alternative solutions and best practices, ChatGPT contributed significantly to the website’s overall quality and functionality.

Each page is tested using Chrome Developer Tools to ensure that it is responsive on a variety of different screen sizes and devices.

---

<a id=automated-testing></a>

## AUTOMATED TESTING

<a id=w3c-validation></a>

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website.

| Directory | File tested | Screenshot | Notes |
| --------- | ----------- | ---------- | ----- |
| documentation/testing-w3c-home.webp | index.html | ![screenshot](documentation/testing-w3c-home.webp) | no errors occurred when checking |
| documentation/testing-w3c-404.webp | 404.html | ![screenshot](documentation/testing-w3c-404.webp) | no errors occurred when checking |
| documentation/testing-w3c-500.webp | 500.html | ![screenshot](documentation/testing-w3c-500.webp) | no errors occurred when checking |

---

<a id=css-validation></a>

### CSS Validator

[CSS W3C Validator](https://jigsaw.w3.org/css-validator/) was used to validate my CSS file.

| Directory                                | File tested  | Screenshot                                              | Notes                            |
| ---------------------------------------- | ------------ | ------------------------------------------------------- | -------------------------------- |
| documentation/testing-w3css-home.webp | style.css    | ![screenshot](documentation/testing-w3css-home.webp) | no errors occurred when checking |

<a id=lighthouse></a>

### Lighthouse

I've tested my deployed project using the Lighthouse Audit tool to test the performance, accessibility, best practices and SEO of the website.

| Page    | Mobile                                                      | Desktop                                                      | Notes |
| ------- | ----------------------------------------------------------- | ------------------------------------------------------------ | ----- |

<a id=manual-features-test></a>

#### Manual Features Testing

`Home Page`

| Component | Expected Behavior | Testing Steps | Actual Result | Fix (if needed) |
| --- | --- | --- | --- | --- |
| **Rules** button | The **rules** panel should open, displaying instructions on how to play the quiz | Clicked on the **rules** button | The **rules** panel opened and displayed the instructions correctly | ✅ No fix needed |
| **Leaderboard** button | The **leaderboard** panel should open and display the top 10 scores, ranked by position, player name, and score | Clicked on the **leaderboard** button | The **leaderboard** panel opened and displayed the top 10 scores correctly | ✅ No fix needed |
| **Start** button | The **difficulty** panel should open, displaying three buttons that allow the user to choose between *Easy*, *Medium*, or *Hard* quiz questions | Clicked on the **Start** button | The **difficulty** panel opened and displayed the three difficulty buttons | ✅ No fix needed |
| **Rules** and **Leaderboard** buttons - hover effect | When hovered over, the **Rules** and **Leaderboard** buttons should change to a white background with light blue text | Hovered over the **Rules** and **Leaderboard** buttons | The **Rules** and **Leaderboard** buttons changed to a white background with light blue text when hovered over | ✅ No fix needed |
| **Start** button - hover effect | When hovered over, the **Start** button should change from dark blue text to white text | Hovered over the **Start** button | The **Start** button changed from dark blue text to white text when hovered over | ✅ No fix needed |

`Quiz Rules Page`

| Component | Expected Behavior | Testing Steps | Actual Result | Fix (if needed) |
| --- | --- | --- | --- | --- |
| **Exit** button | The **rules** panel should close, revealing the home page panel | Clicked on the **Exit** button | The **rules** panel closed, and the home page panel was revealed | ✅ No fix needed |
| **Start Quiz** button | The **difficulty** panel should open, displaying three buttons that allow the user to choose between *Easy*, *Medium*, or *Hard* quiz questions | Clicked on the **Start Quiz** button | The **difficulty** panel opened and displayed the three difficulty buttons | ✅ No fix needed |
| **Exit** button - hover effect | When hovered over, the **Exit** button should change to a white background with light blue text | Hovered over the **Exit** button | The **Exit** button changed to a white background with light blue text when hovered over | ✅ No fix needed |
| **Start Quiz** button - hover effect | When hovered over, the **Start** button should change from dark blue text to white text | Hovered over the **Start** button | The **Start** button changed from dark blue text to white text when hovered over | ✅ No fix needed |

`Leaderboard Page`

| Component | Expected Behavior | Testing Steps | Actual Result | Fix (if needed) |
| --- | --- | --- | --- | --- |
| **Exit** button | The **leaderboard** panel should close, revealing the **home page** panel | Clicked on the **Exit** button | The **leaderboard** panel closed, and the **home page** panel was revealed | ✅ No fix needed |
| **Restart Quiz** button | The **difficulty** panel should open, displaying three buttons that allow the user to choose between *Easy*, *Medium*, or *Hard* quiz questions | Clicked on the **Restart Quiz** button | The **difficulty** panel opened and displayed the three difficulty buttons | ✅ No fix needed |
| **Scores** are displayed | If the user achieves and submits a score that ranks within the top ten of previously submitted scores, it should be displayed in the  **leaderboard** table | Played the quiz and aimed to beat the lowest score in the current **leaderboard** | The highest scores in the top ten were successfully submitted and displayed in the **leaderboard** table | ✅ No fix needed |
| **Exit** button - hover effect | When hovered over, the **Exit** button should change to a white background with light blue text | Hovered over the **Exit** button | The **Exit** button changed to a white background with light blue text when hovered over | ✅ No fix needed |
| **Restart Quiz** button - hover effect | When hovered over, the **Restart Quiz** button should change from dark blue text to white text | Hovered over the **Restart Quiz** button | The **Restart Quiz** button changed from dark blue text to white text when hovered over | ✅ No fix needed |

`Difficulty Page`

| Component | Expected Behavior | Testing Steps | Actual Result | Fix (if needed) |
| --- | --- | --- | --- | --- |
| **Easy** button | The **difficulty** panel should close, revealing the **Quiz** panel. The API should be called using the easy quiz URL | Clicked on the **Easy** button | The **difficulty** panel closed, the **Quiz** panel opened. The API call was logged to the console ![screenshot](documentation/testing-manual-easyapi.webp) | ✅ No fix needed |
| **Medium** button | The **difficulty** panel should close, revealing the **Quiz** panel. The API should be called using the medium quiz URL | Clicked on the **Medium** button | The **difficulty** panel closed, the **Quiz** panel opened. The API call was logged to the console ![screenshot](documentation/testing-manual-mediumapi.webp) | ✅ No fix needed |
| **Hard** button | The **difficulty** panel should close, revealing the **Quiz** panel. The API should be called using the hard quiz URL | Clicked on the **Hard** button | The **difficulty** panel closed, the **Quiz** panel opened. The API call was logged to the console ![screenshot](documentation/testing-manual-hardapi.webp) | ✅ No fix needed |
| **Exit** button | The **difficulty** panel should close, revealing the **home page** panel | Clicked on the **Exit** button | The **difficulty** panel closed, and the **home page** panel was revealed | ✅ No fix needed |
| **Difficulty** buttons - hover effect | When hovered over, the **difficulty** buttons should change from a dark blue background to a light blue background | Hovered over each **difficulty** button | The **difficulty** buttons changed from a dark blue background to a light blue background when hovered over | ✅ No fix needed |
| **Exit** button - hover effect | When hovered over, the **Exit** button should change to a white background with light blue text | Hovered over the **Exit** button | The **Exit** button changed to a white background with light blue text when hovered over | ✅ No fix needed |

`⛔️ Negative Testing Scenarios`

| Component | Expected Behavior | Negative Test Performed | Actual Result | Fix (if needed) |
| --- | --- | --- | --- | --- |
| Corrupt API Data | The quiz should gracefully handle missing or broken data | Modified API url to return incomplete data and selected each difficulty button to activate API call | Quiz was redirected to 500 error page | ✅ No fix needed |

`Quiz Page`

| Component | Expected Behavior | Testing Steps | Actual Result | Fix (if needed) |
| --- | --- | --- | --- | --- |
| **Question no.** indicator | After the quiz begins, the **question no.** indicator should increment by 1 each time the **Next button** is clicked after a question is answered or when the timer expires  | Clicked the **Next button** after the quiz began | The **Question No.** indicator incremented by **1** when the **Next button** was clicked | ✅ No fix needed |
| **Timer** function | After the quiz begins, the **Timer** should count down from **15 to 0**. When the Timer reaches **0**, “Time’s up!” should be displayed. Upon clicking the **Next button**, the **Timer** should reset to “Time: 15” and start counting down again | Selected a **difficulty** level to start the quiz. Clicked the **Next** button to reset the **Timer** | The quiz began, and the **Timer** counted down from **15 to 0**. “Time’s up!” was displayed. After clicking the **Next** button, the **Timer** reset to “Time: 15” and restarted the countdown | ✅ No fix needed |
| **Time line** function | After the quiz begins, the Time Line should decrease in width by 1/15 for each second the timer decrements | Selected a **difficulty** level to start the quiz. Clicked the **Next** button to reset the **Timer** | The quiz began, and the **Time Line** decreased in width by 1/15 each second as the timer decremented | ✅ No fix needed |
| **Quiz questions** and **answers** | A new set of **quiz questions** and **answers** should be displayed each time the quiz begins or the **Next** button is clicked | Selected a **difficulty** level to start the quiz. Clicked the **Next** button to access the next question | A new set of **quiz questions** and **answers** was displayed each time | ✅ No fix needed |
| **Correct** and **Incorrect** answer indicators | When an answer is submitted: if it is **correct**, the border of the selected answer button should turn **green**, and a **green tick icon** should appear to the right of the answer text inside the button. If the answer is **incorrect**, the border of the selected answer button should turn **red**, and a **red cross icon** should appear to the right of the answer text inside the button. If the **timer expires**, the correct answer should be highlighted with a **green border** and a **green tick icon** | Selected both **correct** and **incorrect** answers. Allowed the timer to expire | When a **correct** answer was selected, the border turned **green**, and a **green tick icon** appeared. When an **incorrect** answer was selected, the border turned **red**, and a **red cross icon** appeared. When the **timer** expired, the **correct** answer was displayed with a **green** border and a **green tick icon** | ✅ No fix needed |
| **Score** function | When a question is answered correctly, the **score** should increment by **10**, up to a maximum of **100** for 10 correct answers | Answered **10** questions correctly | The **score** incremented by **10** for each correct answer, reaching a maximum of **100** for **10** correct answers | ✅ No fix needed |
| **Next** button | When an answer is selected or when the timer expires, revealing the correct and/or incorrect answers, the **Next** button should appear. Upon clicking the **Next** button, the **next question** should be displayed, the timer should reset, the **question number** should increment, and the **Next** button should disappear | Selected an answer and allowed the timer to expire | When an answer was selected or the timer expired, the correct and/or incorrect answers were displayed, and the **Next** button appeared. Upon clicking the **Next** button, the next question was shown, the timer reset, the question number incremented, and the **Next** button disappeared | ✅ No fix needed |
| **Exit** button | The **quiz** panel should close and the quiz should end, revealing the **home page** panel | Clicked on the **Exit** button | The **difficulty** panel closed and the quiz ended, and the **home page** panel was revealed | ✅ No fix needed |
| **Answer** buttons - hover effect | When hovered over, the **Answer** buttons should change from a dark blue background to a light blue background | Hovered over each **Answer** button | The **Answer** buttons changed from a dark blue background to a light blue background when hovered over | ✅ No fix needed |
| **Exit** button - hover effect | When hovered over, the **Exit** button should change to a white background with light blue text | Hovered over the **Exit** button | The **Exit** button changed to a white background with light blue text when hovered over | ✅ No fix needed |
| **Next** button - hover effect | When hovered over, the **Next** button should change from a green background to a white background | Hovered over the **Next** button | The **Next** button changed from a green background to a white background | ✅ No fix needed |

`⛔️ Negative Testing Scenarios`

| Component | Expected Behavior | Negative Test Performed | Actual Result | Fix (if needed) |
| --- | --- | --- | --- | --- |
| **Timer** Expiry | Should disable answer buttons when an answer is selected or when the time is up | Selected an answer and allowed timer to expire | Tried to click on each answer buttons | Answer buttons were disabled | ✅ No fix needed |
| Answering Questions Rapidly | Answering questions rapidly and clicking **Next** too fast should not break the quiz | Answered questions and clicked **next** rapidly | Questions were loaded and displayed as expected | ✅ No fix needed |
| Selecting Multiple Answers | Only one answer should be selected and all answer buttons should be disabled | Selected one answer | All answer buttons were disabled as expected | ✅ No fix needed |

`Results Page`

| Component | Expected Behavior | Testing Steps | Actual Result | Fix (if needed) |
| --- | --- | --- | --- | --- |
| **Score** display | The score achieved in the quiz should be correctly displayed as `You scored: x out of 100` | Completed the quiz and noted the score ![Screenshot](documentation/testing-results-scorestar.webp) | The score was displayed correctly ![Screenshot](documentation/testing-results-score.webp) | ✅ No fix needed |
| --- | --- | --- | --- | --- |
| **Exit** button | The **results** panel should close, revealing the **home page** panel | Clicked on the **Exit** button | The **results** panel closed and the **home page** panel was revealed | ✅ No fix needed |
| **Submit** button - hover effect | When hovered over, the **Submit** button should change from dark blue text to white text | Hovered over the **Submit** button | The **Submit** button changed from dark blue text to white text when hovered over | ✅ No fix needed |
| **Exit** button - hover effect | When hovered over, the **Exit** button should change to a white background with light blue text | Hovered over the **Exit** button | The **Exit** button changed to a white background with light blue text when hovered over | ✅ No fix needed |
| **Restart Quiz** button - hover effect | When hovered over, the **Restart Quiz** button should change from dark blue text to white text | Hovered over the **Restart Quiz** button | The **Restart Quiz** button changed from dark blue text to white text when hovered over | ✅ No fix needed |

`⛔️ Negative Testing Scenarios`

| Component | Expected Behavior | Negative Test Performed | Actual Result | Fix (if needed) |
| --- | --- | --- | --- | --- |
| **Leaderboard** Name Submission - blank | Clicking on the **Submit** button while the "Enter Your Name" field is empty should activate an alert reading `Please enter your name before submitting!` | Clicked the **Submit** button while the "Enter Your Name" field was empty | An alert reading `Please enter your name before submitting!` was displayed ![Screenshot](documentation/testing-results-submit.webp) | ✅ No fix needed |
| **Leaderboard** Name Submission - white space | Clicking on the **Submit** button while there is a blank space in the field should activate an alert reading `Please enter your name before submitting!` | Clicked the **Submit** button while there was a blank space in the field | An alert reading `Please enter your name before submitting!` was displayed ![Screenshot](documentation/testing-results-submit.webp) | ✅ No fix needed |
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

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| **Rules** button | The **rules** panel should open, displaying instructions on how to play the quiz | Clicked on the **rules** button | The **rules** panel opened and displayed the instructions correctly | **Pass** |
| **Leaderboard** button | The **leaderboard** panel should open and display the top 10 scores, ranked by position, player name, and score | Clicked on the **leaderboard** button | The **leaderboard** panel opened and displayed the top 10 scores correctly | **Pass** |
| **Start** button | The **difficulty** panel should open, displaying three buttons that allow the user to choose between *Easy*, *Medium*, or *Hard* quiz questions | Clicked on the **Start** button | The **difficulty** panel opened and displayed the three difficulty buttons | **Pass** |
| **Rules** and **Leaderboard** buttons - hover effect | When hovered over, the **Rules** and **Leaderboard** buttons should change to a white background with light blue text | Hovered over the **Rules** and **Leaderboard** buttons | The **Rules** and **Leaderboard** buttons changed to a white background with light blue text when hovered over | **Pass** |
| **Start** button - hover effect | When hovered over, the **Start** button should change from dark blue text to white text | Hovered over the **Start** button | The **Start** button changed from dark blue text to white text when hovered over | **Pass** |

`Quiz Rules Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| **Exit** button | The **rules** panel should close, revealing the home page panel | Clicked on the **Exit** button | The **rules** panel closed, and the home page panel was revealed | **Pass** |
| **Start Quiz** button | The **difficulty** panel should open, displaying three buttons that allow the user to choose between *Easy*, *Medium*, or *Hard* quiz questions | Clicked on the **Start Quiz** button | The **difficulty** panel opened and displayed the three difficulty buttons | **Pass** |
| **Exit** button - hover effect | When hovered over, the **Exit** button should change to a white background with light blue text | Hovered over the **Exit** button | The **Exit** button changed to a white background with light blue text when hovered over | **Pass** |
| **Start Quiz** button - hover effect | When hovered over, the **Start** button should change from dark blue text to white text | Hovered over the **Start** button | The **Start** button changed from dark blue text to white text when hovered over | **Pass** |

`Leaderboard Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| **Exit** button | The **leaderboard** panel should close, revealing the **home page** panel | Clicked on the **Exit** button | The **leaderboard** panel closed, and the **home page** panel was revealed | **Pass** |
| **Restart Quiz** button | The **difficulty** panel should open, displaying three buttons that allow the user to choose between *Easy*, *Medium*, or *Hard* quiz questions | Clicked on the **Restart Quiz** button | The **difficulty** panel opened and displayed the three difficulty buttons | **Pass** |
| **Scores** are displayed | If the user achieves and submits a score that ranks within the top ten of previously submitted scores, it should be displayed in the  **leaderboard** table | Played the quiz and aimed to beat the lowest score in the current **leaderboard** | The highest scores in the top ten were successfully submitted and displayed in the **leaderboard** table | **Pass** |
| **Exit** button - hover effect | When hovered over, the **Exit** button should change to a white background with light blue text | Hovered over the **Exit** button | The **Exit** button changed to a white background with light blue text when hovered over | **Pass** |
| **Restart Quiz** button - hover effect | When hovered over, the **Restart Quiz** button should change from dark blue text to white text | Hovered over the **Restart Quiz** button | The **Restart Quiz** button changed from dark blue text to white text when hovered over | **Pass** |

`Difficulty Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| **Easy** button | The **difficulty** panel should close, revealing the **Quiz** panel. The API should be called using the easy quiz URL | Clicked on the **Easy** button | The **difficulty** panel closed, the **Quiz** panel opened. The API call was logged to the console ![screenshot](documentation/testing-manual-easyapi.webp) | **Pass** |
| **Medium** button | The **difficulty** panel should close, revealing the **Quiz** panel. The API should be called using the medium quiz URL | Clicked on the **Medium** button | The **difficulty** panel closed, the **Quiz** panel opened. The API call was logged to the console ![screenshot](documentation/testing-manual-mediumapi.webp) | **Pass** |
| **Hard** button | The **difficulty** panel should close, revealing the **Quiz** panel. The API should be called using the hard quiz URL | Clicked on the **Hard** button | The **difficulty** panel closed, the **Quiz** panel opened. The API call was logged to the console ![screenshot](documentation/testing-manual-hardapi.webp) | **Pass** |
| **Exit** button | The **difficulty** panel should close, revealing the **home page** panel | Clicked on the **Exit** button | The **difficulty** panel closed, and the **home page** panel was revealed | **Pass** |
| **All** buttons - hover effect | When hovered over, the **difficulty** buttons should change from a dark blue background to a light blue background | Hovered over each **difficulty** buttons | The **difficulty** buttons changed from a dark blue background to a light blue background when hovered over | **Pass** |

`Quiz Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| **Question no.** indicator | After the quiz begins, the **question no.** indicator should increment by 1 each time the **Next button** is clicked after a question is answered or when the timer expires  | Clicked the **Next button** after the quiz began | The **Question No.** indicator incremented by **1** when the **Next button** was clicked | **Pass** |
| **Timer** function | After the quiz begins, the **Timer** should count down from **15 to 0**. When the Timer reaches **0**, “Time’s up!” should be displayed. Upon clicking the **Next button**, the **Timer** should reset to “Time: 15” and start counting down again | Selected a **difficulty** level to start the quiz. Clicked the **Next** button to reset the **Timer** | The quiz began, and the **Timer** counted down from **15 to 0**. “Time’s up!” was displayed. After clicking the **Next** button, the **Timer** reset to “Time: 15” and restarted the countdown | **Pass** |
| **Quiz questions** and **answers** | A new set of **quiz questions** and **answers** should be displayed each time the quiz begins or the **Next** button is clicked | Selected a **difficulty** level to start the quiz. Clicked the **Next** button to access the next question | A new set of **quiz questions** and **answers** was displayed each time | **Pass** |
| **Score** function | When a question is answered correctly, the **score** should increment by **10**, up to a maximum of **100** for 10 correct answers | Answered **10** questions correctly | The **score** incremented by **10** for each correct answer, reaching a maximum of **100** for **10** correct answers | **Pass** |
| **Correct** and **Incorrect** answer indicators | When an answer is submitted: if it is **correct**, the border of the selected answer button should turn **green**, and a **green tick icon** should appear to the right of the answer text inside the button. If the answer is **incorrect**, the border of the selected answer button should turn **red**, and a **red cross icon** should appear to the right of the answer text inside the button. If the **timer expires**, the correct answer should be highlighted with a **green border** and a **green tick icon** | Selected both **correct** and **incorrect** answers. Allowed the timer to expire | When a **correct** answer was selected, the border turned **green**, and a **green tick icon** appeared. When an **incorrect** answer was selected, the border turned **red**, and a **red cross icon** appeared. When the **timer** expired, the **correct** answer was displayed with a **green** border and a **green tick icon** | **Pass** |
| **Time line** function | After the quiz begins, the Time Line should decrease in width by 1/15 for each second the timer decrements | Selected a **difficulty** level to start the quiz. Clicked the **Next** button to reset the **Timer** | The quiz began, and the **Time Line** decreased in width by 1/15 each second as the timer decremented | **Pass** |
| **Exit** button | The **quiz** panel should close and the quiz should end, revealing the **home page** panel | Clicked on the **Exit** button | The **difficulty** panel closed and the quiz ended, and the **home page** panel was revealed | **Pass** |

`Results Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
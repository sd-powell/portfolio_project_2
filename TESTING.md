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
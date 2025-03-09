# <span style="color: #4f9aff">DJ Silver Soul Pop Quiz</span>

---

![DJ Silver Soul's Pop Quiz shown in a variety of screen sizes](documentation/testing-responsive-devices.webp)

Visit the deployed site here: [DJ Silver Soul's Pop Quiz](https://sd-powell.github.io/portfolio_project_2/)

## Introduction

**DJ Silver Soul Pop Quiz** is an interactive, disco-themed music trivia game designed to test and entertain players with questions about popular music from past to present.

**The aim and purpose of the site** is to provide an engaging and competitive platform for music lovers to challenge their knowledge while enjoying a fun, fast-paced gaming experience. By blending entertainment with learning, the quiz enhances memory, supports cognitive development, and encourages critical thinking.

**The goal of the site** is to create an immersive and enjoyable quiz experience that keeps players coming back for more. By incorporating time-based challenges, a leaderboard system, and a variety of music-related questions, the game fosters a sense of excitement and accomplishment.

Music quizzes enhance memory, support learning, and sharpen critical thinking. They also trigger dopamine release, improving mood and reducing stress. They help keep the brain sharp, making them both fun and beneficial.

The game features a fast-paced multiple-choice format where players race against the clock to answer questions and secure a spot on the leaderboard. This competitive element encourages replayability, motivating players to return and beat their own high scores.

**The target audience is music enthusiasts of all ages** who enjoy trivia, competition, and testing their knowledge of popular music history. The quiz is designed for casual players looking for quick entertainment, as well as dedicated music fans eager to prove their expertise.

---

<a id=contents></a>

## CONTENTS

- [User Experience](#ux)

  - [User Stories](#user-stories)

- [Design](#Design)
  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
  - [Site Functionality Flow Diagram](#siteflow)
  - [Game Logic Overview](#gameplay)
  - [Wireframes](#wireframes)
    - [Mobile Wireframes](#mobile-frames)
    - [Tablet Wireframes](#tablet-frames)
    - [Desktop Wireframes](#desktop-frames)
      - [Features](#features)
      - [The Home Page](#home-page-features)
      - [The Rules Page](#rules-page-features)
      - [The Leaderboard Page](#leaderboard-page-features)
      - [The Difficulty Page](#difficulty-page-features)
      - [The Quiz Page](#quiz-page-features)
      - [The Results Page](#results-page-features)
      - [The 404 Page](#404-page-features)
      - [The 500 Page](#500-page-features)
      - [Future Implementations](#future-implementation)

* [Technologies Used](#technologies)

  - [Languages Used](#languages)
  - [Frameworks, Libraries & Programs Used](#frameworks)

* [Deployment & Local Development](#deployment-development)

  - [Deployment](#development)
  - [Local Development](#local-development)
    - [How to Fork](#fork)
    - [How to clone](#clone)

* [Testing](#testing-readme)

  - [Solved Issues & Bugs](#solved-issues)
  - [Know Issues & Bugs](#known-issues)

* [Credits & Inspiration](#credits&inspiration)
  - [Content](#content)
  - [Media](#media)
  - [Acknowledgement](#acknowledgement)

---

<a id=ux></a>

## User Experience (UX)

The quiz is built with the player in mind, offering an engaging and immersive experience. Designed for music enthusiasts of all ages, from casual listeners to die-hard fans, it provides an interactive challenge tailored to their knowledge levels. Below are the key user-centric principles that make the game fun, intuitive, and rewarding for all music lovers:

1. **Engaging & Fun Experience** – The quiz is designed to be entertaining, immersive, and enjoyable for all music lovers
2. **Easy-to-Use Interface** – A clean, intuitive UI ensures seamless navigation and accessibility for players of all skill levels
3. **Responsive & Fast-Paced Gameplay** – Players answer multiple-choice questions against the clock, keeping the game dynamic and exciting
4. **Competitive & Replayable** – A leaderboard system encourages users to return, improve their scores, and challenge friends
5. **Interactive Feedback** – Instant response to answers (correct/incorrect) enhances the learning experience and player satisfaction
6. **Mobile-Friendly Design** – Optimized for desktop and mobile play to ensure accessibility anytime, anywhere
7. **Encourages Learning & Memory Recall** – Combining music knowledge with trivia boosts memory retention and cognitive skills

<br>
<hr>

<a id=user-stories></a>

### User Stories

#### New Site Users

- As a new site user, I want to have a clear and accessible way to navigate through different sections, so that I can explore the quiz, rules, and leaderboard without difficulty.
- As a new site user, I want to understand the game rules quickly, so that I can start playing without confusion.
- As a new site user, I want to start my first quiz easily, so that I can jump straight into the fun.
- As a new site user, I want to play against a timer, so that I feel a sense of challenge and excitement while answering questions quickly.
- As a new site user, I want to see my score and progress, so that I feel motivated to improve and replay.
- As a new site user, I want to receive feedback on my answer choices, so that I can learn from my mistakes and improve my knowledge.

#### Returning Site Users

-  As a returning site user, I want the quiz experience to be consistent and function correctly across different devices, so that I can enjoy playing whether I’m on desktop, tablet, or mobile.
- As a returning site user, I want to select the difficulty level of quiz questions, so that I can tailor the challenge to my knowledge and skill level.
- As a returning site user, I want to easily restart the quiz, so that I can immediately try again if I want to improve my score.

#### Frequent Visitor Goals

- As a frequent site user, I want to see a leaderboard of top quiz scores, so that I can compare my performance with others and stay motivated to improve.
- As a frequent site user, I want to have a fair scoring system where I earn points based on correct answers, so that I feel rewarded for my knowledge and accuracy.

---

<a id=Design></a>

## Design

<a id=colour-scheme></a>

### Colour Scheme

The site's color scheme draws inspiration from the vibrant neon lights of a 1970s disco, featuring bold, electrifying hues that evoke the energy, excitement, and retro-futuristic aesthetics of the era. The glowing, high-contrast palette enhances the immersive experience, creating a visually dynamic atmosphere reminiscent of classic dance floors, shimmering reflections, and the iconic nightlife of the time.

The primary colours for the site are:
- `#1d1a21` (Dark Blue) – This deep, dark shade is used as the **main background color**, evoking the feeling of a dimly lit **disco or nightclub**. It provides a strong contrast against brighter elements, enhancing visibility and making interactive components stand out. The dark blue **reduces eye strain** and creates a sense of depth, immersing players in the quiz experience.
- `#252733` (Blue-Gray) – Inspired by **dark mode UI design**, this color serves as a **secondary background and panel color**, ensuring that content remains clearly distinguishable. It enhances readability while maintaining the **futuristic, neon-lit aesthetic** associated with music and nightlife culture.

To boost user engagement and draw attention to key areas, I selected distinct highlight colors that complemented the background visuals. These colors were defined as root variables in my CSS file, allowing for effortless adjustments across the site.

- `4f9aff` (Bright Blue): Used to emphasize key UI elements, drawing user focus to interactive components.
- `e83c5a` (Red): Clearly signals an incorrect answer, creating an instant visual cue for mistakes.
- `4eb738` (Green): Indicates a correct answer, reinforcing success with a positive color association.
- `f59527` (Gold): Represents the user’s score, evoking achievement and reward with a warm, celebratory tone.

This color scheme enhances clarity, feedback, and user experience while maintaining a cohesive, vibrant aesthetic.

<details>
<summary>- Toggle the arrow to view the colour swatches</summary>

![Hex swatch palette](documentation/hex-swatches.webp)

</details>

<br>
<hr>

<a id=typography></a>

### Typography

Google Fonts was used to import the selected fonts for the site, ensuring high-quality and easily accessible typography.

- **h1, h2 and h3 headings** The font [Roboto](https://fonts.google.com/specimen/Roboto?preview.text=Think%20you%20know%20your%20music%3F) was chosen because it offers a clean, modern, and highly readable design that enhances user experience while maintaining a professional and contemporary look.

![Roboto Font Example](documentation/type-roboto.webp)

- **paragraph elements:** The font [Inter](https://fonts.google.com/specimen/Inter) was chosen as a font pairing for Roboto because its geometric yet friendly design complements Roboto’s modern aesthetic, ensuring a harmonious and highly readable typography combination for my site.

![Inter Font Example](documentation/type-inter.webp)

- **social media icons:** [Font Awesome](https://fontawesome.com/) library icons were used throughout the site because they provide a versatile, scalable, and visually consistent icon set that enhances usability and complements the clean, modern aesthetic of my typography.

<br>
<hr>

<a id=imagery></a>

### Imagery

I chose neon imagery for my site because it’s a pop quiz, and I wanted to reflect the fun, energetic vibe of an ’80s neon disco theme. The vibrant glow and retro-futuristic aesthetic create an engaging, nostalgic atmosphere that makes the quiz experience feel exciting and immersive. All images were sourced from [Adobe Stock](https://stock.adobe.com/)

<br>
<hr>

<a id=siteflow></a>

### Site Functionality Flow Diagram

The diagram below illustrates the overall functionality of the site, including user interactions, quiz progression, and system responses. It provides a structured view of how different components, such as API calls, score calculations, and navigation, integrate to deliver a seamless quiz experience.

![Flow Diagram](documentation/features-functionality-diagram.webp)

<br>
<hr>

<a id=gameplay></a>

## Game Logic Overview

The quiz game follows a structured flow to ensure an engaging and fair experience for players. It begins with the user selecting a difficulty level, which determines the set of ten questions fetched from an online API. Once the game starts, players must answer multiple-choice questions within a time limit. 

Each question presents four possible answers, and players must select one before the timer of 15 seconds runs out. If a correct answer is chosen, their score increases by 10 points. If an incorrect answer is selected (or the timer expires), the correct answer is highlighted before moving to the next question and the player gets no points.

The game continues until all questions are answered, at which point the player's final score is displayed (maximum 100 points). Players can then submit their score to a leaderboard, where high scores are stored locally in the players browser and ranked. They can choose to restart the game or exit at any point.

Below is a flowchart illustrating the complete game logic:

![Quiz Game Flowchart](documentation/features-functionality-pseudo.webp)

<br>
<hr>

<a id=wireframes></a>

### Wireframes

Using [Balsamiq](https://balsamiq.com/), wireframes were developed for mobile, tablet, and desktop views. These wireframes played a crucial role in outlining the site’s structure and layout, ensuring a smooth user experience across different devices. The design process prioritized responsive adjustments to create an intuitive interface that adapts seamlessly to various screen sizes.

<br>
<hr>

<a id=mobile-frames></a>

#### Mobile Wireframes

<details>
<summary> Click here to see the Mobile Wireframes </summary>

|                Home page wireframe                |                Rules page wireframe                 |                   Leaderboard page wireframe                    |
| :-----------------------------------------------: | :-------------------------------------------------: | :-------------------------------------------------------------: |
| ![Home](documentation/mobile-wireframe-info.webp) | ![Rules](documentation/mobile-wireframe-rules.webp) | ![Leaderboard](documentation/mobile-wireframe-leaderboard.webp) |

|                   Difficulty page wireframe                   |                Quiz page wireframe                |                 Results page wireframe                  |
| :-----------------------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------------: |
| ![Difficulty](documentation/mobile-wireframe-difficulty.webp) | ![Quiz](documentation/mobile-wireframe-quiz.webp) | ![Results](documentation/mobile-wireframe-results.webp) |

|               404 page wireframe                |               500 page wireframe                |
| :---------------------------------------------: | :---------------------------------------------: |
| ![404](documentation/mobile-wireframe-404.webp) | ![500](documentation/mobile-wireframe-500.webp) |

</details>

<a id=tablet-frames></a>

#### Tablet Wireframes

<details>
<summary> Click here to see the Tablet Wireframes </summary>

|                Home page wireframe                |                Rules page wireframe                 |
| :-----------------------------------------------: | :-------------------------------------------------: |
| ![Home](documentation/tablet-wireframe-info.webp) | ![Rules](documentation/tablet-wireframe-rules.webp) |

|                   Leaderboard page wireframe                    |                   Difficulty page wireframe                   |
| :-------------------------------------------------------------: | :-----------------------------------------------------------: |
| ![Leaderboard](documentation/tablet-wireframe-leaderboard.webp) | ![Difficulty](documentation/tablet-wireframe-difficulty.webp) |

|                Quiz page wireframe                |                 Results page wireframe                  |
| :-----------------------------------------------: | :-----------------------------------------------------: |
| ![Quiz](documentation/tablet-wireframe-quiz.webp) | ![Results](documentation/tablet-wireframe-results.webp) |

|               404 page wireframe                |               500 page wireframe                |
| :---------------------------------------------: | :---------------------------------------------: |
| ![404](documentation/tablet-wireframe-404.webp) | ![500](documentation/tablet-wireframe-500.webp) |

 </details>

<a id=desktop-frames></a>

#### Desktop Wireframes

<details>
<summary> Click here to see the Desktop Wireframes </summary>

- Home page wireframe

![Home](documentation/desktop-wireframe-info.webp)

- Rules page wireframe

![Rules](documentation/desktop-wireframe-rules.webp)

- Leaderboard page wireframe

![Leaderboard](documentation/desktop-wireframe-leaderboard.webp)

- Difficulty page wireframe

![Difficulty](documentation/desktop-wireframe-difficulty.webp)

- Quiz page wireframe

![Quiz](documentation/desktop-wireframe-quiz.webp)

- Results page wireframe

![Success](documentation/desktop-wireframe-results.webp)

- 404 page wireframe

![404](documentation/desktop-wireframe-404.webp)

- 500 page wireframe

![500](documentation/desktop-wireframe-500.webp)

 </details>

<a id=features></a>

### Features

The website consists of a home page featuring a series of game panels that are dynamically shown or hidden based on the quiz stage, controlled by button interactions. Additionally, a 404 page manages invalid links, while a 500 error page is displayed if the API encounters a failure.

All Pages on the website are responsive and have:

- A favicon in the browser tab.

<details>
<summary> Click here to view the favicon </summary>

![favicon](documentation/features-home-favicon.webp)

</details>

<a id=home-page-features></a>

#### The Home Page

<details>
<summary> Click here to view the home page </summary>

![Pop quiz home page shown in a variety of screen sizes](documentation/features-responsive-home.webp)

</details>

---

The DJ Silver Soul Pop Quiz homepage is designed to provide an engaging and interactive experience for music trivia enthusiasts. Below is a breakdown of its key features and what they offer to the user:

- What it does:
  - Welcomes the user with a call-to-action: “Hit Start & Test Your Music Knowledge!”
  - Briefly explains the game’s theme and objective.
  - Encourages users to challenge themselves and aim for the leaderboard.
- User Benefits:
  - Sets an engaging and exciting tone for the quiz.
  - Clearly communicates the purpose of the game.
  - Provides a simple, intuitive starting point.
- Interactive Elements:
  - Rules Button: Allows users to read the quiz rules before playing.
  - Leaderboard Button: Gives access to the leaderboard, showing top scores.
  - Start Button: Begins the quiz immediately.

The homepage effectively sets the stage for an exciting trivia experience. With intuitive navigation, dynamic difficulty selection, and interactive quiz panels, it provides an engaging, competitive, and replayable game that caters to all music fans.

<a id=rules-page-features></a>

#### The Rules Page

<details>
<summary> Click here to view the rules page </summary>

![Pop quiz rules page shown in a variety of screen sizes](documentation/features-responsive-rules.webp)

</details>

---

- What it does:
  - Displays quiz rules in a modal window.
  - Explains gameplay mechanics, such as difficulty selection, time limits, and scoring.
  - Provides two options: Exit (back to home) or Start Quiz.
- User Benefits:
  - Ensures users understand the game mechanics before playing.
  - Helps prevent confusion about time limits and scoring.
  - Provides an easy way to return to the homepage.
- Interactive Elements:
  - Start Quiz Button: Begins the quiz immediately.
  - Exit Button: Returns the user to the home page.

<a id=leaderboard-page-features></a>

#### The Leaderboard Page

<details>
<summary> Click here to view the leaderboard page </summary>

![Pop quiz leaderboard page shown in a variety of screen sizes](documentation/features-responsive-leaderboard.webp)

</details>

---

- What it does:
  - Displays the Top 10 Highest Scores.
  - Dynamically updates as new scores are submitted.
  - Provides two options:
    - Exit Button: Returns to the home page.
    - Restart Quiz Button: Starts a new quiz session.
- User Benefits:
  - Encourages competition and replayability.
  - Gives users a goal to aim for.
  - Creates an engaging social aspect by comparing scores.
- Interactive Elements:
  - Exit Button: Returns the user to the home page.
  - Restart Quiz Button: Starts a new quiz session.

<a id=difficulty-page-features></a>

#### The Difficulty Page

<details>
<summary> Click here to view the difficulty page </summary>

![Pop quiz difficulty page shown in a variety of screen sizes](documentation/features-responsive-difficulty.webp)

</details>

---

- What it does:
  - Allows users to select their preferred difficulty level.
  - Offers three themed difficulty levels:
    - 🎧 Easy: “The Warm-Up”
    - 🔥 Medium: “Peak Time Questions”
    - 🚀 Hard: “After Hours – For True Fans”
  - Includes an Exit Button to return to the home page.
- User Benefits:
  - Lets players customise their experience based on their skill level.
  - Adds variety and replayability.
  - Clearly explains the differences between difficulty levels.
- Interactive Elements:
  - Easy Button: Offers users easier level questions.
  - Medium Button: Offers users medium level questions.
  - Hard Button: Offers users hard level questions.
  - Exit Button: Returns the user to the home page.

<a id=quiz-page-features></a>

#### The Quiz Page

<details>
<summary> Click here to view the quiz page </summary>

![Pop quiz page shown in a variety of screen sizes](documentation/features-responsive-quiz.webp)

</details>

---

- What it does:
  - Displays trivia questions dynamically from the API.
  - Shows:
    - Question number & total questions
    - Countdown timer and visual time line indicator (15 seconds per question)
    - Four multiple-choice answer options
  - Users select an answer, and responses are immediately processed.
  - Score is updated dynamically.
- User Benefits:
  - Fast-paced, interactive gameplay keeps users engaged.
  - The countdown timer and visual time line indicator adds a challenge.
  - Immediate feedback enhances the experience.
  - The exit option ensures users have control over their session.
- Navigation buttons:
  - Exit Button: Allows users to leave at any time.
  - Next Question Button: Moves to the next question (when an answer has been selected or the timer has ended).

<a id=results-page-features></a>

#### The Results Page

<details>
<summary> Click here to view the results page </summary>

![Pop quiz results page shown in a variety of screen sizes](documentation/features-responsive-results.webp)

</details>

---

- What it does:
  - Displays the user’s final score.
  - Encourages players to submit their name to the Top 10 Leaderboard.
- User Benefits:
  - Provides a satisfying conclusion to the quiz.
  - Creates motivation for users to improve their scores.
  - Allows users to replay instantly without navigating away.
- Navigation buttons:
  - Exit Button: Returns the user to the home page.
  - Restart Quiz Button: Starts a new quiz session.

<a id=404-page-features></a>

#### The 404 Error Page

<details>
<summary> Click here to view the 404 page </summary>

![Pop quiz 404 page shown in a variety of screen sizes](documentation/features-responsive-404.webp)

</details>

---

- What it does:
  - The 404 page displays a clear and engaging message to inform users that the requested page is unavailable or does not exist.
- Navigation link:
  - A link is provided to redirect the user back to the home page.

The purpose of the 404 page is to capture any broken link errors and guide the user back to the home page.

<a id=500-page-features></a>

#### The 500 Error Page

<details>
<summary> Click here to view the 500 page </summary>

![Pop quiz 500 page shown in a variety of screen sizes](documentation/features-responsive-500.webp)

</details>

---

- What it does:
  - The 500 error page appears when there is an issue retrieving data from the Open Trivia Database API. It displays a message informing the user of the problem and provides a link to the home page, allowing them to reload the quiz.
- Navigation link:
  - A link is provided to redirect the user back to the home page.

The purpose of the 500 page is to capture any issues with API access and guide the user back to the home page.

---

<a id=future-implementation></a>

#### Future Implementations

To ensure the website remains engaging and functional for users, in future implementations I would like to:

1. **Night & Day Mode (Manual & System-Integrated)** – Introduce a toggle feature that allows users to manually switch between light and dark mode, while also offering an auto mode that adapts based on the user’s system settings. This ensures a comfortable viewing experience in any environment, reduces eye strain, and enhances accessibility for users who prefer high-contrast or low-light displays.
2. **Lifelines / Power-Ups** – Add options like “50/50” (removes two incorrect answers), “Extra Time” (adds 5 seconds), or “Skip Question” for a more strategic experience.
3. **Additional Question Categories** – Allow users to choose different music genres (e.g., Pop, Rock, Hip-Hop, 80s Hits) instead of a single general quiz.
4. **Personalized Music Recommendations** – Based on quiz performance, suggest songs or playlists (e.g., “You scored high on Rock – check out this playlist!”).
5. **Badges & Achievements** – Reward users with unlockable badges (e.g., “Pop Quiz Champion,” “Rock Guru”) for reaching milestones.
6. **Shareable Results & Social Media Integration** – Let users share their scores on Twitter, Instagram, or Facebook.
7. **Live Leaderboard** – Introduce a live leaderboard (rather than a locally stored version) to keep competition fresh and exciting. Allowing users to compete against each other.

---

<a id=technologies></a>

## Technologies Used

<a id=languages></a>

### Languages Used

HTML, CSS, JavaScript

<a id=frameworks></a>

### Frameworks, Libraries & Programs Used

- [Balsamiq](https://balsamiq.com/) - Used to create wireframes.

- [Adobe Illustrator](https://www.adobe.com/uk/products/illustrator.html) - Used to design the logo and create visuals.

- [Adobe Photoshop](https://www.adobe.com/uk/products/photoshop.html) - Used to crop, resize, edit and save images to webp format.

- [Git](https://git-scm.com/) - For version control.

- [Github](https://github.com/) - To save and store the files for the website.

- [Visual Studio Code](https://code.visualstudio.com/) - Code editor used to create the site.

- [Mobile First Plugin](https://www.webmobilefirst.com/en/) - Chrome plug-in used to test responsiveness of the site on different devices.

- [Responsinator](http://www.responsinator.com/) - To show the website UI on a range of devices.

- [Am I Responsive?](http://ami.responsivedesign.is/) - Another site to show the website UI on a range of devices.

- [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.

- [Font Awesome](https://fontawesome.com/) - Icon library toolkit for social media icons.

- [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and styling.

- [Aria DevTools](https://github.com/ziolko/aria-devtools) - Used to view the website the way screen readers present it to visually impaired users.

- [Webpage Spell-Check](https://chrome.google.com/webstore/detail/webpage-spell-check/mgdhaoimpabdhmacaclbbjddhngchjik/related) - a google chrome extension that allows you to spell check your webpage. Used to check the site and the readme for spelling errors.

---

<a id=deployment-development></a>

## Deployment & Local Development

<a id=development></a>

### Deployment

The site is deployed using GitHub Pages - [Dj Silver Soul's Pop Quiz](https://sd-powell.github.io/portfolio_project_2/).

To Deploy the site using GitHub Pages:

1. Login (or sign up) to Github.
2. Go to the repository for this project, [sd-powell/portfolio_project_2](https://github.com/sd-powell/portfolio_project_2).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

<a id=local-development></a>

### Local Development

<a id=fork></a>

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [sd-powell/portfolio_project_2](https://github.com/sd-powell/portfolio_project_2).
3. Click the Fork button in the top right corner.

<a id=clone></a>

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [sd-powell/portfolio_project_2](https://github.com/sd-powell/portfolio_project_2).
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

---

<a id=testing-readme></a>

## Testing

> [!NOTE]
> Please refer to [TESTING.md](TESTING.md) file for all testing carried out.

<a id=solved-issues></a>

### Solved Issues & Bugs

| No | Bug Description | Solution | Screenshot |
| :- | :------------- | :-------- | :--------- |
| 1  | When testing the HTML code with the W3C validator, it flagged an issue with trailing slashes (e.g., `<br />`). This was caused by the formatter in VS Code. | I disabled "Format on Save" in VS Code to resolve the issue and re-tested my HTML code. | ![Screenshot](documentation/testing-fix-slash.webp) |
| 2 | Initially, I was unable to correctly highlight selected answers using the API data for each question. I wanted to assign correct and incorrect values to the buttons so they could be visually indicated to the user with a tick or a cross. | I implemented a function to parse the API data and dynamically assign a custom `data-correct="true"` attribute to the correct answer button. This ensured that both correct and incorrect answers could be properly styled after a button was selected. | ![Screenshot](documentation/testing-fix-tick.webp) |
| 3  | When a user leaves the name field blank or enters only spaces before submitting, Chrome displays its default alert: `"Please enter your name before submitting!"`. My mentor suggested replacing this with a JavaScript alert using [SweetAlert2](https://sweetalert2.github.io/). | I installed the SweetAlert2 CDN link and implemented a custom alert modal. | ![Screenshot](documentation/testing-fix-modal.webp) |
| 4  | When testing the site on small screens (320px wide), part of the main panel was cropped by the viewport. | I added a media query `@media screen and (max-width: 320px) and (max-height: 568px)`, which removed the background image and repositioned the panel at the top of the screen. | ![Screenshot](documentation/testing-fix-320px.webp) |
| 5  | In my first project, I realised that I didn't implement ARIA labels for my background images. | I researched how to add ARIA labels to the `<header>` element, ensuring they appeared correctly in the ARIA testing tool I used. | ![Screenshot](documentation/testing-fix-aria.webp) |
| 6 | Whilst testing the site using [Aria DevTools](https://github.com/ziolko/aria-devtools), I noticed that the home panel (`info_panel`) remained visible to screen readers, even though it was hidden in the UI when other panels were displayed. Additionally, when manually resizing the site to test responsiveness, the ease effect caused brief glimpses of the home panel beneath other elements. | I researched the best way to fully hide content from screen readers and found that `visibility: hidden;` was the most effective approach. I added this rule to the CSS and created a JavaScript function to add and remove the `.hidden` class, ensuring that the `info_panel` is properly hidden both visually and from assistive technologies when other panels are displayed. | ![Screenshot](documentation/testing-fix-hidden.webp) |
| 7 | On screens smaller than 368px, the tick and cross icons on the answer buttons were positioned too close to the border. | I added a rule to the 368px media query to adjust their positioning to 40px from the right. | ![Screenshot](documentation/testing-fix-tick.webp) |

---

<a id=known-issues></a>

### Known Issues & Bugs

| No | Bug Description | Screenshot |
| :- | :------------- | :--------- |
| 1 |	I have noticed that when the keyboard appears on mobile devices while a user is submitting their name in the form field, the panel is nudged up the screen, slightly obscuring the header background image. A tutor advised me that this shouldn’t be a concern. | ![Screenshot](documentation/testing-bugs-keyboard.webp) |

---

<a id=credits&inspiration></a>

## Credits & Inspiration

- This [YouTube tutorial](https://www.youtube.com/watch?v=xZXW5SnCiWI&t=2918s) was incredibly helpful in shaping the key features of my quiz. It provided valuable insights into concepts like hiding and displaying panels, implementing a timer, and showing correct and incorrect answers after a response. These elements not only enhanced my understanding but also gave me the confidence to develop my own features.

- I wanted a simple way to save high scores without using a database, and local storage seemed like a feasible option. After extensive research and referencing the following tutorials, I successfully implemented a function for my site.
  - This [YouTube tutorial](https://youtu.be/DFhmNLKwwGw?si=_Ccj6qyp0WI2XPuf) taught me how to save the name and score as an object, store it in an array within local storage, and sort the array in descending order based on the score.

- Additionally, I watched [This YouTube tutorial](https://www.youtube.com/watch?v=UY6AeR_M_dU) to learn how to use the [Open Trivia API](https://opentdb.com/) in my project.

- I drew inspiration from [MyFitnessPal](https://www.myfitnesspal.com/) for the site’s color scheme and interface design.

- This post on [Stack Overflow](https://stackoverflow.com/questions/24127507/is-it-possible-to-center-tables-in-a-markdown-file) helped me to understand markdown tables and positioning.

<a id=content></a>

### Content

Every question on my site was sourced via the API from [The Open Trivia Database](https://opentdb.com/).

All other content for the site is written by myself.

<a id=media></a>

### Media

- [Adobe Stock](https://stock.adobe.com/) - Used to source royalty free imagery for the site.

<a id=acknowledgement></a>

### Acknowledgments

I would like to acknowledge the following people:

- [Jubril Akolade](https://github.com/Jubrillionaire) - My Code Institute Mentor.

- Ax de Klerk, Jordan Acomba & Robert Lewis - My fellow Code Institute cohort, who helped each other over the course of our milestone projects.

- The quiz fans in my family for helping me test my site.

- The Code Institute Slack channel Peer Code Review - Thank you to everyone who took the time to view my site and look over the code.

<br><hr>
[🔼 Back to top](#contents)
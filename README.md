# Gaming Trivia

![Device Mockups]()

## Project Objective
To create a browser based trivia game that challanges the users knowledge of video games, keeps record of the score, and is responsive on all media viewport widths. This game should be attractive to look at, easy to navigate, simple to control, and of course fun to play. The browser game will be built using HTML, CSS, and Javascript code. This project will also make use of the opentdb.com API and Bootstrap framework.

## Table of Contents

## UX

### Website Design Goals
- An attractive landing page that invites the user to take interest in the game
- A color palette that is easy on the eyes if the user is playing for extented periods
- The game area being easy to view the questions, submit answers, and to generally navigate
- An end of game section which tallies the score and provides words of congratulations
- A website that works seamlessly on mobile, tablet and desktop devices
- Social media links for if the user wishes to share with friends

### User Stories

- As a user, I want to be invited to play by an attractive and fun landing page
- As a user, I want to click a button that starts the trivia game
- As a user, I want the game to have 20 questions and be multiple choice
- As a user, I want the game to notify me if I have gotten the answer right or wrong
- As a user, I want the game to keep tabs on how many questions have been asked and answered
- As a user, I want a final tally of my score
- As a user, I want to see some kind of leaderboard functionality
- As a user, I want randomly selected questions to be pulled from a database to improve replayability
- As a user, I want the user interface to be bug free and easy to navigate

### User Requirements and Expectations

#### Requirements

- A landing page that explains what the website is and what is involved with the game
- All the buttons and links on the page function properly
- The website is easy to navigate
- That the game doesn't display the same question twice
- The game tallies my end score so I can see how I did

#### Expectations

- The questions are fun, challenging and diverse
- The game gives me a variety of choices per question
- The game will keep track of my score
- I can add my final score to a leaderboard

### Design Choices

For overall design, I went will a classic arcade game look. The styling is minimalist and reminiscent of old video game backgrounds. I aim to make it appealing to classic and modern video game fans. I have opted for a dark background with all of the interactible elements being bright variants of red, green and blue.

#### Fonts

I went with Roboto Mono and monospace for my font as it has a classic video game program look to it. I also think it looks attractive as a white text on dark background. Since the website isn't very text heavy I feel the spaced out characters have a good appearance. It also adds extra emphasis to special characters and similar character types, adding extra edges, dashes or curves to maximise readability. I acquired this font on [Google Fonts](https://fonts.google.com/specimen/Roboto+Mono?query=roboto+mo#glyphs).

#### Icons

I used the free icons available on [Font Awesome](https://fontawesome.com/icons?d=gallery&p=2) to enhance and draw attention to certain sections of the page. The appropriate icons coincide with the topic being discussed in the text, such as using a gamepad and star icon for the 'Lets Play!' and 'Highscores' buttons on the landing page. Soical media icons are used instead of urls for asthetic enhancement. These icons are also styled alongside all other elements of the page so they blend seemlessly without sticking out.

#### Colors

For colors I went for high contrast colors that provide the user clear signals as to how the game is progressing. I will elaborate on what colors are to be used where below.

![Trivia Game Color Pallete](https://github.com/JMuckian94/MSP2-Gaming-Trivia-Browser-Game/blob/master/wireframes/Gaming%20Trivia%20Color%20Pallete.png)

- #111111 Rich Black: This charcoal color will be used for the background, allowing all visual elements to pop out
- #4381C1 Steel Blue: This will be used as a highlight and background color for certain elements on the page
- #71B340 Green RYB: This will be used to signal when the user has answered correctly
- #DB222A Amaranth Red: This will be used to signal when the user has answered incorrectly
- #FFFFFF White: This will be used for all text elements on the page

#### Structure

For adaptive structure on all screen widths I opted for Bootstrap layout controls. This will keep all content in their respective rows and columns on the page. Positioning and sizing was based on the mobile first approach. The html will be assigned to a single page with the Javascript scripts showing and hiding the appropriate content once the user initiated the game or finishes it.

## Wireframes

Here are the links to my wireframes:

### [Desktop Wireframe Folder](https://github.com/JMuckian94/MSP2-Gaming-Trivia-Browser-Game/tree/master/wireframes/desktop-wireframes)

### [Tablet Wireframe Folder](https://github.com/JMuckian94/MSP2-Gaming-Trivia-Browser-Game/tree/master/wireframes/tablet-wireframes)

### [Mobile Wireframe Folder](https://github.com/JMuckian94/MSP2-Gaming-Trivia-Browser-Game/tree/master/wireframes/mobile-wireframes)

## Features

### Intro Section

The Intro Section is there to welcome the user and provide information on what kind of game they are playing and how it works. Users will be asked a series of 20 questions related to the video game industry. Each of these questions will have between 2 and 4 possible answers to choose from depending on the difficulty. Correct answers will be tallied by the scoreboard. Users are encouraged to aim for high scores and to share the game with friends via social links at the bottom. 

### Lets Play/High Scores Buttons

These buttons will control css operations to hide the intro section and show the relevant section depending on which was clicked. The 'Lets Play' button and the 'High Scores' buttons are different colours and have FontAwsome icons to distinguish them from each other.

### Game Section

The game section will fetch data from opentdb.com's database in order to populate the question and answer area. I have created js functions to randomise the answers for each question and opentdb keeps track of the number of questions answered. A progress bar will also provide visual feedback to the user to see how many question are left.

## Features to be Implemented

### Timer

I want to limit the amount of time the user has to answer questions by implementing a timer set to 10 seconds. This will put pressure on the player but should enhance enjoyment levels by increasing the challenge.

### Right / Wrong Feedback

I want to have the option buttons change color to give the player feedback whether they got the right or wrong answer.

### Different Final Score Responces

I want to implement different messages to appear depending on how well the player did.

## Technologies Used

### Languages

- HTML
- CSS
- Javascript

### Framworks & External Liberaries

- [Bootstrap 4.6.0](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [Open Trivia Database](https://opentdb.com/)
- [jQuery Core 3.6.0 slim](https://code.jquery.com/)

### Tools

- [Git](https://github.com/)
- [Gitpod](https://gitpod.io/workspaces)
- [Balsamiq](https://balsamiq.com/)
- [W3C HTML & CSS Validation Service](https://validator.w3.org/)
- [Coolors](https://coolors.co/)

## Testing of Interactive Elements

### Plan
Invite the user to play the game using an attractive and fun landing page.

### Implementation
I used high contrasting colors and a mono font to give that classic arcade feel. Structure is laid out using Bootstrap. The title pops out with a red box and beneath is the introductory "How to Play" section explaining how the game works. This is then followed by the "Lets Play" and "High Scores" buttons colored appropriately to differenciate them. Finally, the footer has the exclamation statement and links to popular social media sites.

### Test
All style elements appearing as intended. Layout matches wireframe designs.

### Verdict
Working as intended.
<br/>
### Plan
Clicking the "Lets Play" button starts the trivia game.

### Implementation
Bootstrap elements were used to link the buttons with different sections of the page. When the page is fisrt loaded up the game is loaded to, however, it is hidden from view until the user clicks the "Lets Play" button. The game then trades places with the intro section and the footer, becoming the only thing on screen. The ".collapsing" class was edited to remove visual errors when transitioning.

### Test
All style elements appearing as intended. Layout matches wireframe designs. "Lets Play" button working as intended. All elements hiding/showing as intended.

### Verdict
Working as intended.
<br/>
### Plan
The game will have 20 questions and mulitple choice answers.

### Implementation
I used the opentdb api to populate the questions and answers section of my trivia game. I simply had to go onto the website and choose how many questions I want, the topic, the difficulty (of which I picked any), and if I want multiple choice. The website then generates the API url which I then fetch using JSON. From the JSON file I extract the data I need to populate the question and answer section.

### Test
Questions and answers section is populated as intended. Each answer clicked moves the player to the next question. API data is being used by the program as intended.

### Verdict
Working as intended. However, visual feedback needs to be added for user experience.
<br/>
### Plan
The game will notify the player if they have gotten the answer right or wrong

### Implementation
I programmed the game to randomise the order the answers appear and to know which answers are correct/incorrect, based on the JSON file data, and to keep score for the player.

### Test
Score increases with right answers. One issue is there is no visual feedback whether the answer was right or wrong other than the score counter.

### Verdict
Visual feedback will assist the player to know when the answer is wrong or right without having to look at the score counter each time. This will be implemented in future versions of the game.
<br/>
### Plan
The game keeps tabs on how many questions have been asked and answered

### Implementation
The game keeps track of how many questions have been asked and answered using the getNewQuestion() function. This function will keep tabs on the number of questions asked, incrementing a "Question 1/20" progress text section of the game as well as a progress bar to give the user feedback on how they are progressing through the game. Once 20 questions have been answered the game will pass the player to the finalscore screen where they can see their final score and enter in a username to be saved.

### Test
Questions being counted by counter successfully. Progress bar working as intended. Game finishes on last question answered as intended.

### Verdict
All tested elements working as intended.
<br/>
### Plan
Questions will be randomised for each playthrough.

### Implementation
In the getNewQuestion function I have include a Math.floor(Math.random) object to select data at random from the API's JSON file so that each time the game is loaded the questions will appear in a different order. It will also keep track of which questions have already been asked so that the same question wont appear twice. 

### Test
Played through the game a few times. No duplicate questions have appeared so far. The game cannot be brute forced by playing multiple times. The players knowledge is being tested as intended.

### Verdict
Elements working as intended.
<br/>
### Plan

### Implementation

### Test

### Verdict
### Plan

### Implementation

### Test

### Verdict

## Deployment

This project was deployed via GitHub by executing the following steps. After writing the code, committing and pushing it to GitHub:

###### 1. Navigate to the repository on github and click Settings.
###### 2. From there, go to the Source section within the Github Pages section.
###### 3. Select master branch on the dropdown menu, and click save.
###### 4. Now the website is live.

Any time commits and pushes are sent to Github, the Github Pages site should update shortly after.

### To run the project locally:

###### 1. Click the green Clone or Download button on the Github Repository
###### 2. Using the Clone with HTTPS option, copy the link displayed.
###### 3. Open your IDE, and ensure the Git Terminal is open.
###### 4. Change the working directory to the location where the cloned directory is to go.
###### 5. Use the "git clone" command and paste the url copied in the second step.

## Credits

### Content / Media
Open Trivia DB is created and maintained by the good folks at [PIXELTAIL GAMES LLC](https://www.pixeltailgames.com/). Huge credit to them for creating a very user-friendly API. My game would have been more tedious to play and to create if not for them.

A big thanks to the [Bootstrap team](https://getbootstrap.com/docs/5.0/about/team/). The screen scaling grid system that Bootstrap provides really cuts out a lot of headaches for scaling content to each individual screen size and has been a huge help to me in the projects I have worked on so far.

Also, a thank you to the guys at [FontAwesome](https://fontawesome.com/) for providing great icons free to use. These have really helped visually enhance my projects.

### Acknowledgements

I want to thank and give credit to [James Q Quick](https://github.com/jamesqquick) for his helpful tutorial walkthrough on how to create a quiz app. All his videos are available for free on [YouTube](https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw). I couldn't have completed this project in time without his contribution to the coding community. 

I also want to give thanks to [Simen Daehlin](https://github.com/Eventyret/eventyret/commits?author=Eventyret) for taking the time to explore key concepts with me and review my work, providing the valuable feedback I needed to produce a grade worthy project.


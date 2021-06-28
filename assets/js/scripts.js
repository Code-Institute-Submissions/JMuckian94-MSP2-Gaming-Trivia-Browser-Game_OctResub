const question = document.querySelector("#question");
const options = Array.from(document.getElementsByClassName("option-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let availableQuestions = [];
let questions = [];
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;

// Fetches question and answer data from api database
fetch("https://opentdb.com/api.php?amount=20&category=15&type=multiple")
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question
            };
            const answerOptions = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerOptions.splice(
                formattedQuestion.answer - 1, 0,
                loadedQuestion.correct_answer
            );
            answerOptions.forEach((option, index) => {
                formattedQuestion['option' + (index + 1)] = option;
            });
            return formattedQuestion;
        });
        startGame();
    })

const maximumQuestions = 20;
// Start Game Function

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};
// Get New Question Function
const getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= maximumQuestions) {
        localStorage.setItem('mostRecentScore', score);
        //go to the final score page
        return window.location.assign('/finalscore.html');
    }
    questionCounter++;
    progressText.innerHTML = `Question ${questionCounter}/${maximumQuestions}`;

    progressBarFull.style.width = `${(questionCounter / maximumQuestions) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    options.forEach((option) => {
        const number = option.dataset.number;
        option.innerHTML = currentQuestion['option' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

options.forEach((option) => {
    option.addEventListener('click', (e) => {
        if (!acceptingAnswers);

        acceptingAnswers = false;
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset.number;

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(1);
        }

        selectedOption.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

const incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};
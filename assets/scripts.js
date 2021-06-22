// Constants
const question = document.querySelector('#question');
const options = document.querySelector('.option-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

const apiUrl = "https://opentdb.com/api.php?amount=20&category=15";

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = 20

// Fetches question and answer data from api database
function opentdbData(){
fetch(apiUrl)
.then(res => res.json())
.then(data => extractData(data.results))
.then(results => console.log(results))
}
opentdbData()
function extractData(listOfQuestions){
    return listOfQuestions.map(item => {
        return {
            difficulty: item.difficulty,
            question: item.question,
            correctAnswer : item.correct_answer,
            answers: [...item.incorrect_answers,item.correct_answer]
        }
    });
}
// Used to populate question section of game

function useAPIData(item) {
    $("#question").innerHTML = `question: ${item.results[0].question}`
  }

// Used to populate answers section of game
function createAnswers(listOfAnswers){
    var answers = [];
    for(i = 0; i < answers; i++) {
        var button = document.createElement('button');
        button.innerhtml = answers[i];
        button.className = "btn btn-outline-primary btn-lg";
        var buttonDiv = document.getElementById("buttons");
        buttonDiv.appendChild(button);
    }
    console.log(listOfAnswers)
    listOfAnswers.forEach(answer => {
        console.log(`<a href="#" class="option-text btn btn-outline-primary btn-lg">${answer.correctAnswer}</a>`)
    });
}

// Toggle intro function

$(letsplayBtn).toggle(function () {
    $(intro-section).addClass("hidden");
}, function () {
    $(intro-section).removeClass("hidden");
});
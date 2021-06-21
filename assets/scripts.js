const baseURL = "https://opentdb.com/api.php?amount=20&category=15";

const question = document.querySelector('#question');
const options = document.querySelector('.option-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = 20

function opentdbData(){
fetch(baseURL)
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

function createAnswers(listOfAnswers){
    var answers = [0,1,2,3];
    for(i = 0; i < 4; i++) {
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
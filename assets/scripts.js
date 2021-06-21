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

let letsplayBtn = document.getElementById("letsplay-btn");

letsplayBtn.onclick = startGame();

function startGame() {
    var gameStart = document.getElementsByClassName("home-page");
    if (x.style.display === "block") {
        gameStart.style.display = "none";
    } else {
        gameStart.style.display = "block";
    }
  }

function opentdbData(){
fetch("https://opentdb.com/api.php?amount=20&category=15")
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

function useAPIData(item) {
    document.querySelector("#question").innerHTML = `Question : ${item.results[0].question}`
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
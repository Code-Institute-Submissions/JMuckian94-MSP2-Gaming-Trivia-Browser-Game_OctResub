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

function getData(cb) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", );
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function writeToDocument(type) {
    getData(type, function() {
        document.getElementById('data').innerHTML = data;
    });
}

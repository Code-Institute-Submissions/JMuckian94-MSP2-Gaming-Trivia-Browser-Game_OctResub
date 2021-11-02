const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {return `<li><h2>${score.name} - ${score.score}</h2></li>`;}).join("");
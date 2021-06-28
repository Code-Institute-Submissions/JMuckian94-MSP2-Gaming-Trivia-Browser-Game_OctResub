const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#save-btn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = `Congrats! You got ${mostRecentScore}. See if you can get the top score!`;

username.addEventListener('keyup', () => {
	saveScoreBtn.disabled = !username.value;
});

// Author: jamesqquick
const saveHighScore = (e) => {
	e.preventDefault();

	const score = {
		score: mostRecentScore,
		name: username.value,
	};
	highScores.push(score);
	highScores.sort((a, b) => b.score - a.score);
	highScores.splice(5);

	localStorage.setItem('highScores', JSON.stringify(highScores));
	window.location.assign('/');
};
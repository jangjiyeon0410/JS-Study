const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScoreVal = 0;

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

// 잠시 보이기
document.querySelector('.number').textContent = secretNumber;

btnCheck.addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	if (!guess) {
		displayMessage('❌ No Number!');
	} else if (guess === secretNumber) {
		displayMessage('Correct Number!');
		document.querySelector('body').style.background = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		currentScore > highScoreVal
			? (highScore.textContent = currentScore)
			: highScore;
	} else {
		if (currentScore > 1) {
			currentScore--;
			score.textContent = currentScore;
			displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
		} else {
			score.textContent = 0;
			displayMessage('You lost!');
		}
	}
});

btnAgain.addEventListener('click', function () {
	document.querySelector('body').style.background = '#222';
	document.querySelector('.number').style.width = '15rem';
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	currentScore = 20;
	score.textContent = currentScore;
});

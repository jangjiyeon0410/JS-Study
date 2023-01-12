'use strict';

/*
1. 초기설정
    - 주사위 삭제
    - 플레이어 점수 초기화
2. 롤다이스 설정
  - 롤다이스 -> 랜덤 숫자 표시%주사위 이미지 연결
      커렌트점수에 등록 & 주사위1이면 커렌트 점수 초기화
3. 어떤 플레이어가 사용중인가?
  - 플레이어 0으로 시작-> 주사위값1 이거나 홀드하면 turn 바뀜
4. 홀드 -> 현재 점수 총점에 저장하고 현재점수는 0, turn 바꿈
5. 이니셜라이즈
*/

const diceEl = document.querySelector('.dice');
const scoreEl = document.querySelectorAll('.score');
const currentEl = document.querySelectorAll('.current-score');
const player = document.querySelectorAll('.player');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let currentScore, currentPlayer, score, playing;

const initialize = function () {
	currentScore = 0;
	currentPlayer = 0;
	score = [0, 0];
	playing = true;
	scoreEl[0].textContent = '0';
	scoreEl[1].textContent = '0';
	currentEl[0].textContent = currentScore;
	currentEl[1].textContent = currentScore;
	diceEl.classList.add('hidden');
	player[0].classList.remove('player--winner');
	player[1].classList.remove('player--winner');
	player[0].classList.add('player--active');
	player[1].classList.remove('player--active');
};

const switchPlayer = function () {
	currentScore = 0;
	currentEl[currentPlayer].textContent = currentScore;
	currentPlayer = currentPlayer === 0 ? 1 : 0;
	player[0].classList.toggle('player--active');
	player[1].classList.toggle('player--active');
};

// Initiolize
initialize();

btnRoll.addEventListener('click', function () {
	if (playing) {
		const dice = Math.trunc(Math.random() * 6) + 1;
		diceEl.classList.remove('hidden');
		diceEl.src = `dice-${dice}.png`;
		if (dice != 1) {
			currentScore += dice;
			currentEl[`${currentPlayer}`].textContent = currentScore;
		} else {
			switchPlayer();
		}
	}
});

btnHold.addEventListener('click', function () {
	if (playing) {
		score[currentPlayer] += currentScore;
		scoreEl[currentPlayer].textContent = score[currentPlayer];
		if (score[currentPlayer] >= 20) {
			player[currentPlayer].classList.add('player--winner');
			player[currentPlayer].classList.remove('player--active');
			playing = false;
		} else {
			switchPlayer();
		}
	}
});

btnNew.addEventListener('click', initialize);

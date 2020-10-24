'use strict';
/*
const message = document.querySelector('.message');
console.log(message.textContent);
message.textContent = 'correct number!';
console.log(message.textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 11;

document.querySelector('.guess').value = 11;
console.log(document.querySelector('.guess'));
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const btnCheck = document.querySelector('.check');
const inputGuess = document.querySelector('.guess');
const btnsAgain = document.querySelectorAll('.again');

console.log(document.querySelector('.modal'));

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const inputEnable = function () {
  inputGuess.disabled = false;
  btnCheck.disabled = false;
};

const showModal = function () {
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
  document.querySelector('.modal__highscore').textContent =
    'Highscore: ' + highScore;
};

const closeModal = function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
};

const inputDisable = function () {
  inputGuess.disabled = true;
  btnCheck.disabled = true;
};

const inputDisable = function () {
  inputGuess.disabled = true;
  btnCheck.disabled = true;
};

const gameLogic = function () {
  const guess = Number(inputGuess.value);
  console.log(secretNumber);
  // When there is no input
  if (!guess) {
    displayMessage('No Number!');
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      inputDisable();
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;

    showModal();
    inputDisable();
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
};

btnCheck.addEventListener('click', gameLogic);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    gameLogic();
  }
});

for (let i = 0; i < btnsAgain.length; i++) {
  btnsAgain[i].addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = 20;
    displayMessage('Start guessing...');
    inputEnable();
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    inputGuess.value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    closeModal();
    inputEnable();
  });
}

document.querySelector('.overlay').addEventListener('click', closeModal);

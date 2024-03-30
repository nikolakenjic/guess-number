'use strict';

let ranNum = Math.ceil(Math.random() * 20);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

const setWidthAndText = (width, text) => {
  let numberElement = document.querySelector('.number');

  numberElement.style.width = width;
  numberElement.textContent = text;
};

// Run game on Check button***************************************************
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number selected!');
  } else if (guess === ranNum) {
    displayMessage('You right!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    setWidthAndText('30rem', ranNum);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== ranNum) {
    if (score > 1) {
      displayMessage(guess > ranNum ? 'Too High!' : 'Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lose, try again!');
      displayScore(0);
    }
  }
});

// Reset *****************************************************************
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  ranNum = Math.ceil(Math.random() * 20);
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  setWidthAndText('15rem', '?');
  document.querySelector('.guess').value = '';
});

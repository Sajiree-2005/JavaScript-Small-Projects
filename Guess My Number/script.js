'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // state variable to keep track of the score
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input, the value of guess will be 0, which is falsy. So we can use !guess to check if there is no input.
  if (!guess) {
    displayMessage('⛔ No number!');
  }
  // When the guess is correct, we display a success message. We also want to change the background color of the page to green and increase the width of the secret number box to make it more visually appealing.
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    // When the guess is too high or too low, we check if the score is greater than 1. If it is, we display a message indicating whether the guess was too high or too low and decrease the score by 1. If the score is not greater than 1, it means the player has lost the game, so we display a message indicating that and set the score to 0.
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // If the input is not a number, we display an error message.
  if (Number.isNaN(guess)) {
    displayMessage('💥 Invalid input!');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  // Reset the game state
  score = 20; // Reset the score to the initial value
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Reset the UI
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // Reset the styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

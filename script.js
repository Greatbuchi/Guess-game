'use strict';

const guess = document.querySelector('.guess');
const highScore = document.querySelector('.highscore');
const playAgain = document.querySelector('.again');
const checkGuess = document.querySelector('.check');
const score = document.querySelector('.score');
const numberGuessed = document.querySelector('.number');
const message = document.querySelector('.message');

let numberToGuess = Math.floor(Math.random() * 20);

checkGuess.addEventListener('click', () => {
  let userGuess = Number(guess.value);
  if (typeof userGuess != 'number') return;

  handleWinOrFailedGuesses(userGuess, numberToGuess);
});

playAgain.addEventListener('click', () => {
  numberGuessed.innerHTML = '?';
  guess.value = '';
  score.innerHTML = 20;
  document.body.style.backgroundColor = '#222';
  numberToGuess = Math.floor(Math.random() * 20);
  playAgain.style.visibility = 'hidden';
});

function handleWinOrFailedGuesses(userGuess, numberToGuess) {
  if (userGuess === numberToGuess) handleWin(userGuess);
  if (userGuess < numberToGuess) displayFailedResult(userGuess);
  if (userGuess > numberToGuess) displayFailedResult(userGuess);
}

function displayFailedResult(userGuess) {
  score.innerHTML = Number(score.innerHTML) - 1;
  guess.value = '';
  numberGuessed.innerHTML = userGuess;
  setMeassge(userGuess);
}

function setMeassge(userGuess) {
  if (userGuess > numberToGuess) message.innerHTML = '📉 Too High!';
  if (userGuess < numberToGuess) message.innerHTML = '📈 Too low!';
  if (userGuess === numberToGuess) message.innerHTML = '🎉Correct Number!';
}

function handleWin(userGuess) {
  setMeassge(userGuess);
  document.body.style.backgroundColor = '#60b347';
  guess.disableb = true;
  checkGuess.disableb = true;
  highScore.innerHTML = userGuess;
  playAgain.style.visibility = 'visible';
}

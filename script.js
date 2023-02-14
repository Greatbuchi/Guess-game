'use strict';

const guess = document.querySelector('.guess');
const highScore = document.querySelector('.highscore');
const playAgain = document.querySelector('.again');
const checkGuess = document.querySelector('.check');
const score = document.querySelector('.score');
const numberGuessed = document.querySelector('.number');
const message = document.querySelector('.message');

const numberToGuess = Math.floor(Math.random() * 30);

checkGuess.addEventListener('click', () => {
  let userGuess = Number(guess.value);
  if (typeof userGuess != 'number') return;

  handleWinOrFailedGuesses(userGuess, numberToGuess);
});

function handleWinOrFailedGuesses(userGuess, numberToGuess) {
  if (userGuess === numberToGuess) handleWin();
  if (userGuess < numberToGuess) displayFailedResult(userGuess);
  if (userGuess > numberToGuess) displayFailedResult(userGuess);
}

function displayFailedResult(userGuess) {
  score.innerHTML = Number(score.innerHTML) - 1;
  guess.value = '';
  numberGuessed.innerHTML = userGuess;
}

function handleWin() {
  console.log('Won');
}

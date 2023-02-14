'use strict';

const guess = document.querySelector('.guess');
const highScore = document.querySelector('.highscore');
const playAgain = document.querySelector('.again');
const checkGuess = document.querySelector('.check');
const score = document.querySelector('.score');

const numberToGuess = Math.floor(Math.random() * 30);

checkGuess.addEventListener('click', () => {
  let userGuess = Number(guess.value);
  if (typeof userGuess != 'number') return;

  if (userGuess === numberToGuess) handleWin();
  handleFailedGuesses(userGuess, numberToGuess);
});

function handleFailedGuesses(userGuess, numberToGuess) {
  if (userGuess < numberToGuess) {
    console.log('Number is too low');
  } else if (userGuess > numberToGuess) {
    console.log('Number is too high');
  }
}

function handleWin() {
  console.log('Won');
}

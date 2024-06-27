const randomNo = Math.round(Math.random() * 10 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');
const remRes = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid Number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number that lie in the range between 1 and 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNo}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNo) {
    displayMessage(`You guesses it right `);
    endGame();
  } else if (guess < randomNo) {
    displayMessage(`Number is too Low`);
  } else if (guess > randomNo) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess() {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}`;
  numGuess++;
  remRes.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //all the dom Manipulation comes here

  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {}

function endGame() {}

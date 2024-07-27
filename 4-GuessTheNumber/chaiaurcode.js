let random = parseInt(Math.random() * 100 + 1);
console.log(random);

const submit = document.querySelector('#subt');
const Userinput = document.querySelector('#guessField');
const GuessSlot = document.querySelector('.guesses');
const remining = document.querySelector('.lastResult');
const lowerNum = document.querySelector('.lowOrHi');
const starOverr = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(Userinput.value);
    console.log(guess);
    validatGuess(guess);
  });
}

function validatGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage('You won this game!');
    endGame();
  } else if (guess < random) {
    displayMessage('Number is too low');
  } else if (guess > random) {
    displayMessage('Number is too high');
  }
}

function displayGuess(guess) {
  Userinput.value = '';
  GuessSlot.innerHTML += `${guess} `;
  numGuess++;
  remining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowerNum.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  Userinput.value = '';
  Userinput.setAttribute('game is closs', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  starOverr.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    GuessSlot.innerHTML = '';
    remining.innerHTML = `${11 - numGuess}`;
    Userinput.removeAttribute(`disabled`);
    starOverr.removeChild(p);
    playGame = true;
  });
}

let randomNumber = parseInt(Math.random() * 100 + 1);
let submit = document.querySelector("#subt");
let userInput = document.querySelector(".guessField");
let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please! Enter A Valid Number.`);
  } else if (guess < 1) {
    alert(`Please! Enter A Number More Than 0.`);
  } else if (guess > 100) {
    alert(`Please! Enter A Number Less than 100.`);
  } else {
    prevGuess.push(guess);
    if (numGuess == 10) {
      displayGuess(guess);
      displayMsg(`GameOver. Random Number Was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
      displayGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg("You Guessed Right Number.");
    endGame();
  } else if (guess < randomNumber) {
    displayMsg(`Number Is Too Low.`);
  } else if (guess > randomNumber) {
    displayMsg("Number Is Too High.");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}    `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}
function displayMsg(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = 'newGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  let newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    displayMsg("");
    playGame = true;
  });
}

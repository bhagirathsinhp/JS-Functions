const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_SELECTION = ROCK;

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER WINS";
const RESULT_COMP_WIN = "COMPUTER WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice! We chose ${DEFAULT_SELECTION} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_SELECTION) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WIN
    : RESULT_COMP_WIN;

// const getWinner = function (cChoice, pChoice) {
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WIN;
//   } else {
//     return RESULT_COMP_WIN;
//   }
// };

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting!");

  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(playerSelection || DEFAULT_SELECTION); // we get undefined in the place where we write wrong value, therefore default value of rock...
  console.log(computerSelection);

  // let winner;
  // if (playerSelection) {
  //   winner = getWinner(computerSelection, playerSelection);
  // } else {
  //   winner = getWinner(computerSelection);
  // }

  // we don't need the if check when we take pchoice as default argument.. We did it for understanding the error section in the lecture of DA..

  const winner = getWinner(computerSelection, playerSelection);
  console.log(winner);

  let message = `You picked ${
    playerSelection || DEFAULT_SELECTION
  }, computer picked ${computerSelection}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + "had a draw.";
  } else if (winner === RESULT_PLAYER_WIN) {
    message = message + "won.";
  } else {
    message = message + "lost.";
  }
  alert(message);

  gameIsRunning = false;
});

// not related to game but related to functions.

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};
combine(
  showResult.bind(this, "The result after adding all numbers is:"),
  "ADD",
  2,
  5,
  3,
  6,
  -78,
  -10,
  -555,
  48,
  752
);
combine(
  showResult.bind(this, "The result after adding all numbers is:"),
  "ADD",
  -10,
  55,
  4,
  72
);
combine(
  showResult.bind(this, "The result after subtracting all numbers is:"),
  "SUB",
  700,
  -800,
  10,
  5,
  2,
  3
);

// const subUp = function (resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum -= num;
//   }
//   resultHandler(sum);
// };

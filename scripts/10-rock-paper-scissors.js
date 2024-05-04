let score = JSON.parse(localStorage.getItem
  ("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

updateScoreElement();


function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === "rock") {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else {
      result = 'You win.';
    }

  } else if (playerMove === "paper") {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else {
      result = 'You lose.';
    }

  } else {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else {
      result = 'Tie.';
    }
  }

  if (result === "You win.") {
    score.wins++;
  } else if (result === "You lose.") {
    score.loses++;
  } else {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
  displayResult(result, playerMove, computerMove);
}

function displayResult(result, playerMove, computerMove) {
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves")
    .innerHTML = `You
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png" class="move-icon">
      Computer`;
}

function updateScoreElement() {
  document.querySelector(".js-score")
    .innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;

}


function pickComputerMove(playerMove) {
  let computerMove;

  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}

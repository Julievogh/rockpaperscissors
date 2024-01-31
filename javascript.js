const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissors");

const texts = document.getElementById("texts");

const win = document.getElementById("win");
const lose = document.getElementById("lose");
const draw = document.getElementById("draw");

let computerPlays = "";

  function resetGame() {
    win.classList.add("hidden");
    lose.classList.add("hidden");
    draw.classList.add("hidden");
  }

function computerRPS() {
  let computerNumber = Math.floor(Math.random() * 3);

  if (computerNumber === 0) {
    computerPlays = "rock";
  } else if (computerNumber === 1) {
    computerPlays = "paper";
  } else if (computerNumber === 2) {
    computerPlays = "scissors";
  }
}

function chooseRPS(choice) {
  resetGame();

  player1.classList.add("shake");
  player2.classList.add("shake");

  setTimeout(function() {
    player1.classList.remove("shake");
    player2.classList.remove("shake");

    player1.classList.remove("rock", "paper", "scissors"); 
    player1.classList.add(choice); 

    player2.classList.remove("rock", "paper", "scissors");

    computerRPS();

    player2.classList.remove(choice);
    player2.classList.add(computerPlays);

    if (choice === computerPlays) {
      draw.classList.remove("hidden");
    } else if (
      (choice === "rock" && computerPlays === "scissors") ||
      (choice === "paper" && computerPlays === "rock") ||
      (choice === "scissors" && computerPlays === "paper")
    ) {
      win.classList.remove("hidden");
    } else {
      lose.classList.remove("hidden");
    }
  }, 1800);
}

rockBtn.addEventListener("click", function () {
  chooseRPS("rock");
});

paperBtn.addEventListener("click", function () {
  chooseRPS("paper");
});

scissorBtn.addEventListener("click", function () {
  chooseRPS("scissors");
});


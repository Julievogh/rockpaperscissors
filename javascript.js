const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissors");

function chooseRPS(choice) {
  player1.classList.add("shake");
  player2.classList.add("shake");

  setTimeout(() => {
    player1.classList.remove("shake");

    player1.classList.remove("rock", "paper", "scissors");

    if (choice === "rock") {
      player1.classList.add("rock");
    } else if (choice === "paper") {
      player1.classList.add("paper");
    } else if (choice === "scissors") {
      player1.classList.add("scissors");
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

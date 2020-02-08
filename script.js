let Rock = document.getElementById("rock").addEventListener("click", compareChoices);
let Paper = document.getElementById("paper").addEventListener("click", compareChoices);
let Scissors = document.getElementById("scissors").addEventListener("click", compareChoices);

let playerChoice;
let computerChoice;

function compareChoices(e, playerChoice) {
    e.preventDefault();
    playerChoice = playerSelection();
    computerChoice = computerSelection();
    switch (playerChoice + " " + computerChoice) {
        case "Rock Scissors":
        case "Paper Rock":
        case "Scissors Paper":
            won();
            break;

        case "Rock Paper":
        case "Paper Scissors":
        case "Scissors Rock":
            console.log("Player Lost!!");
            break;

        case "Rock Rock":
        case "Paper Paper":
        case "Scissors Scissors":
            console.log("It is a draw!!");
            break;
    }
    resetGame();
} 

function playerSelection() {
    const button = document.querySelector("button");
    button.addEventListener("click", function(e) {
    button = e.target.textContent;
    return button;
});
}


function computerSelection() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomSelection = Math.floor(Math.random() * 3);
    return choices[randomSelection];
}

function won(playerSelection) {
    if(playerSelection() == "Rock"){
        Rock.classList.add("rock-btn-won");
    } else if(playerSelection() == "Paper") {
        Paper.classList.add("paper-btn-won");
    } else if(playerSelection() == "Scissors") {
        Scissors.classList.add("scissors-btn-won");
    }
    console.log("Player Wins!!");
}

function lost() {

}

function draw() {

}


function resetGame(e) {
    const inputSpace = document.getElementById("reset-game");
    const button = document.createElement("button");
    button.type = "reset";
    button.className = "play-again";
    button.textContent = "Play Again?";
    inputSpace.appendChild(button);
    button.addEventListener("click", function() {
        window.location.reload();
    });
    return inputSpace;
}

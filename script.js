let Rock = document.getElementById("rock").addEventListener("click", compareChoices);
let Paper = document.getElementById("paper").addEventListener("click", compareChoices);
let Scissors = document.getElementById("scissors").addEventListener("click", compareChoices);

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

function computerSelection() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomSelection = Math.floor(Math.random() * 3);
    return choices[randomSelection];
}


function compareChoices(e) {
    e.preventDefault();
    playerChoice = e.target.textContent;
    computerChoice = computerSelection();
    console.log(playerChoice + " " + computerChoice);
    switch (playerChoice + " " + computerChoice) {
        case "Rock Scissors":
        case "Paper Rock":
        case "Scissors Paper":
            won();
            break;

        case "Rock Paper":
        case "Paper Scissors":
        case "Scissors Rock":
            lost();
            console.log("Player Lost!!");
            break;

        case "Rock Rock":
        case "Paper Paper":
        case "Scissors Scissors":
            console.log("It is a draw!!");
            break;
    }
    resetGame();
    return playerChoice;
} 



function won(playerChoice) {
    if(playerChoice == "Rock"){
        document.getElementById("rock").classList.add("rock-btn-won");
    } else if(playerChoice == "Paper") {
        document.getElementById("paper").classList.add("paper-btn-won");
    } else if(playerChoice == "Scissors") {
        document.getElementById("scissors").classList.add("scissors-btn-won");
    }
    console.log("Player Wins!!");
}

function lost() {
    if(computerChoice == "Paper"){
        document.getElementById("rock").classList.add("rock-btn-lost");
    } else if(computerChoice == "Scissors") {
        document.getElementById("paper").classList.add("paper-btn-lost");
    } else if(computerChoice == "Rock") {
        document.getElementById("scissors").classList.add("scissors-btn-lost");
    }
    console.log("Player Lost!!");
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

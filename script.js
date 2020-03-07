let playerScore = 0;
let computerScore = 0;
let tie = 0;
document.getElementById("rock").addEventListener("click", compareChoices);
document.getElementById("paper").addEventListener("click", compareChoices);
document.getElementById("scissors").addEventListener("click", compareChoices);

function compareChoices(e) {
    e.preventDefault();
    let playerChoice = e.target.textContent;
    let computerChoice = getComputerSelection();

    disableBtn();
    createResetGameButton();
    createQuitGameButton();

    if (playerChoice === computerChoice) {
        draw();
        return;
    }

    switch (playerChoice) {
        case "Scissors":
            if(computerChoice === "Rock") {
                return computerWins(computerChoice, playerChoice);
            }
            break;

        case "Rock":
            if(computerChoice === "Paper") {
                return computerWins(computerChoice, playerChoice);
            }
            break;

        case "Paper":
            if(computerChoice === "Scissors") {
                return computerWins(computerChoice, playerChoice);
            }
            break;
    }
    playerWins(playerChoice, computerChoice);
} 

function getComputerSelection() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomSelection = Math.floor(Math.random() * 3);
    return choices[randomSelection];
}

function disableBtn() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function  playerWins(playerChoice, computerChoice) {
    playerScore++;
    document.getElementById("player_score").innerHTML = playerScore;

    document.getElementById(`${playerChoice.toLowerCase()}`).classList.add(`${playerChoice.toLowerCase()}-btn-won`);
    document.getElementById("game-outcome").innerHTML = `Player Wins!! You chose ${playerChoice} against Computers choice of ${computerChoice}!`;
}

function computerWins(computerChoice, playerChoice) {
    computerScore++;
    document.getElementById("computer_score").innerHTML = computerScore;

    document.getElementById(`${playerChoice.toLowerCase()}`).classList.add(`${playerChoice.toLowerCase()}-btn-lost`);
    document.getElementById("game-outcome").innerHTML = `Computer Wins!! Computer chose ${computerChoice} against your choice of ${playerChoice}!`;
}

function draw() {
    tie++;
    document.getElementById("tie_score").innerHTML = tie;
    document.getElementById("game-outcome").innerHTML = "The game is a Draw!! You both chose the same thing!!"
}

function createResetGameButton(e) {
    const inputSpace = document.getElementById("reset-game");
    const button = document.createElement("button");
    button.type = "reset";
    button.className = "play-again";
    button.textContent = "Play Again?";
    inputSpace.appendChild(button);
    button.addEventListener("click", function() {
        const rockButton = document.getElementById("rock");
        rockButton.className = "rock-btn";
        rockButton.disabled = false;

        const paperButton = document.getElementById("paper");
        paperButton.className = "paper-btn";
        paperButton.disabled = false;

        const scissorsButton = document.getElementById("scissors"); 
        scissorsButton.className = "scissors-btn";
        scissorsButton.disabled = false;

        inputSpace.removeChild(button);
        const removeBtn = document.getElementById("game-over");
        const parentEl = removeBtn.parentNode;
        parentEl.removeChild(removeBtn);

        document.getElementById("game-outcome").innerHTML = ""
    });
}

function createQuitGameButton() {
    const quitBtn = document.getElementById("quit-game");
    const button = document.createElement("button");
    button.type = "reset";
    button.id = "game-over";
    button.className = "quit-game";
    button.textContent = "Quit Game";
    quitBtn.appendChild(button);
    button.addEventListener("click", function() {
        if(playerScore > computerScore && playerScore > tie || playerScore == tie && playerScore > computerScore){
            document.getElementById("game-outcome").innerHTML = "Thank You For Playing!! You win with a score of " + 
            playerScore + " to the machine's score of  " + computerScore + "!";
        } else if(computerScore > playerScore && computerScore > tie || computerScore == tie && computerScore > playerScore) {
            document.getElementById("game-outcome").innerHTML = "Thank You For Playing!! The machine beat you with a score of  " + 
            computerScore + " to your score of  " + playerScore + "!";
        } else if(tie > playerScore && tie > computerScore || playerScore == computerScore && tie == playerScore && tie == computerScore) {
            document.getElementById("game-outcome").innerHTML = "Thank You For Playing!! You played a good game, but you and the machine are equal players today!";
        } 
        document.getElementById("rock").className = "rock-btn-won";
        document.getElementById("paper").className = "paper-btn-won";
        document.getElementById("scissors").className = "scissors-btn-won";

        playerScore = 0;
        computerScore = 0;
        tie = 0;

        document.getElementById("player_score").innerHTML = "0";
        document.getElementById("computer_score").innerHTML = "0";
        document.getElementById("tie_score").innerHTML = "0";
    }); 
}
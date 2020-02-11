let Rock = document.getElementById("rock").addEventListener("click", compareChoices);
let Paper = document.getElementById("paper").addEventListener("click", compareChoices);
let Scissors = document.getElementById("scissors").addEventListener("click", compareChoices);

let playerScore = 0;
let computerScore = 0;
let tie = 0;
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
    switch (playerChoice + " " + computerChoice) {
        case "Rock Scissors":
        case "Paper Rock":
        case "Scissors Paper":
            won(playerChoice);
            break;

        case "Rock Paper":
        case "Paper Scissors":
        case "Scissors Rock":
            lost();
            break;

        case "Rock Rock":
        case "Paper Paper":
        case "Scissors Scissors":
            draw();
            break;
    }
    disableBtn();
    resetGame();
    quitGame();
} 

function disableBtn() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}


function won() {
    playerScore++;
    document.getElementById("player_score").innerHTML = playerScore;
    if(playerChoice == "Rock"){
        document.getElementById("rock").classList.add("rock-btn-won");
        document.getElementById("game-outcome").innerHTML = "Player Wins!! You chose Rock against Computers choice of Scissors!"
    } else if(playerChoice == "Paper") {
        document.getElementById("paper").classList.add("paper-btn-won");
        document.getElementById("game-outcome").innerHTML = "Player Wins!! You chose Paper against Computers choice of Rock!"
    } else if(playerChoice == "Scissors") {
        document.getElementById("scissors").classList.add("scissors-btn-won");
        document.getElementById("game-outcome").innerHTML = "Player Wins!! You chose Scissors against Computers choice of Paper!"
    }
}

function lost() {
    computerScore++;
    document.getElementById("computer_score").innerHTML = computerScore;
    if(computerChoice == "Paper"){
        document.getElementById("rock").classList.add("rock-btn-lost");
        document.getElementById("game-outcome").innerHTML = "Computer Wins!! The Computer chose Paper against Your choice of Rock!"
    } else if(computerChoice == "Scissors") {
        document.getElementById("paper").classList.add("paper-btn-lost");
        document.getElementById("game-outcome").innerHTML = "Computer Wins!! The Computer chose Scissors against Your choice of Paper!"
    } else if(computerChoice == "Rock") {
        document.getElementById("scissors").classList.add("scissors-btn-lost");
        document.getElementById("game-outcome").innerHTML = "Computer Wins!! The Computer chose Rock against Your choice of Scissors!"
    }
    
}

function draw() {
    tie++;
    document.getElementById("tie_score").innerHTML = tie;
    document.getElementById("game-outcome").innerHTML = "The game is a Draw!! You both chose the same thing!!"
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
        document.querySelectorAll("button").disabled = false;
    });
    return inputSpace;
}

function quitGame() {
    const quitBtn = document.getElementById("quit-game");
    const button = document.createElement("button");
    button.type = "reset";
    button.className = "quit-game";
    button.textContent = "Quit Game";
    quitBtn.appendChild(button);
    button.addEventListener("click", function() {
        document.getElementById("game-outcome").innerHTML = "Thank You For Playing!!"
    });
    return quitBtn;
}
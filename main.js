
// Function - Computer Choice - Math.random
// Player choices = button textcontent - calls play round function
// Function playround
// Function - keepscore - 5 pts wins
// Function reset game

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie!`
    } else if (playerSelection === "rock" && computerSelection === "scissors" 
        || playerSelection === "paper" && computerSelection === "rock" 
        || playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return `You win ${playerSelection} beats ${computerSelection}`; 
    } else {
        computerScore++
        return `You lose ${computerSelection} beats ${playerSelection};`
    }
};

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    scoreDisplay.textContent = `Player: ${playerScore}, CPU: ${computerScore}`
    gameResult.textContent = "";
}

const scoreDisplay = document.querySelector(".score");
function keepscore() {
    scoreDisplay.textContent = `Player: ${playerScore}, CPU: ${computerScore}`;
    if (playerScore === 5) {
        alert(`You win!`);
        resetGame();
    } else if (computerScore === 5) {
        alert(`You lose!`);
        resetGame();
    }
};

const gameResult = document.getElementById("result");

const rockButton = document.getElementById("rock");
rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('rock', computerChoice);
    gameResult.textContent = result;
    keepscore();
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('paper', computerChoice);
    gameResult.textContent = result;
    keepscore();
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('scissors', computerChoice);
    gameResult.textContent = result;
    keepscore();
});
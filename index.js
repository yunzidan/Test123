const optionBtn = document.querySelectorAll(".optionBtn");
var playerScore = document.querySelector('#playerScore');
var computerScore = document.querySelector('#computerScore');
const roundResults = document.querySelector('#roundResults');
const resetBtn = document.querySelector('#reset');
var playerSelection = document.querySelector('#playerSelection');
var computerSelection = document.querySelector('#computerSelection');
let player;
let computer;
let result;
let computerPoints = 0;
let playerPoints = 0;


function getComputerChoice() {
    var options = ["Rock", "Paper", "Scissors"];
    let computerChoice = options[Math.floor(Math.random() * options.length)]
    computerSelection.textContent = `${computerChoice}`;
    return computerChoice;
}

optionBtn.forEach(button => {button.addEventListener("click", getPlayerChoice)});
    
    
function getPlayerChoice() {
    player = optionBtn.textContent;
    playRound();
}

function playRound() {
    var computer = getComputerChoice();
    playerSelection.textContent = `${player}`;
    console.log(checkWinner());
    console.log(player);
    console.log(computer);
    computerScore.textContent = `${computerPoints}`;
    playerScore.textContent = `${playerPoints}`;
    // if (computerPoints = 5 || playerPoints = 5) {
    //     return declareWinner();
    // }
}


function checkWinner() {
    if (player == computer) {
        return "Draw!";
    } else if (computer === "Rock" && player === "Paper") {
        playerScore.textContent = ++ playerPoints;

        return "You Win!";
    } else if (computer === "Paper" && player === "Scissors") {
        playerScore.textContent = ++ playerPoints;
        return "You Win!";
    } else if (computer === "Scissors" && player === "Rock") {
        playerScore.textContent = ++ playerPoints;
        return "You Win!";
    } else {
        computerScore.textContent = ++ computerPoints; 
        return "You Lose!";
    }
}

function declareWinner() {
    optionBtn.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
        });
    if (computerPoints > playerPoints) {
        return "You lost the game! Play again?";
    } else if (playerPoints > computerPoints) {
        return "You won the game!!";
    } }
  
 
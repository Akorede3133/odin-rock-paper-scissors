let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const rand = Math.floor(Math.random() * choice.length);
    return choice[rand];
}
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    let winner = '';
    if (playerChoice === computerChoice) {
        winner =   `tie`;
    }else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        //winner = `You won! ${playerChoice} beats ${computerChoice}`;
        winner = 'player';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        //winner = `You won! ${playerChoice} beats ${computerChoice}`;
        winner = 'player';

    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        //winner = `You won! ${playerChoice} beats ${computerChoice}`;
        winner = 'player';
    } else {
        //winner = `You Lost! ${computerChoice} beats ${playerChoice}`;
        winner = 'computer';
    }
    return winner;
}
function game() {
    choices = ['rock', 'paper', 'scissors'];
    let playerChoice = prompt('Please choice one of rock, paper, or scissors?');
    let computerChoice = getComputerChoice();
    if (choices.includes(playerChoice.toLowerCase())) {
        let result = playRound(playerChoice, computerChoice);
        if (result === 'player') {
            playerScore++;
        } else if (result === 'tie') {
            playerScore = playerScore;
            computerScore = computerScore;
        } else {
            computerScore++;
        }
    }
    else {
        alert('Enter a valid option');
        game();
    }
}
function displayCurrentWinner() {
    console.log(`PlayerScore: ${playerScore} ComputerScore: ${computerScore}`);
}
function decideWinner() {
    if (playerScore > computerScore) {
        console.log(`You won!`);
    } else if (playerScore === computerScore) {
        console.log('tie!');
    }
    else {
        console.log('You lost!');
    }
}
for (i = 0; i < 5; i++) {
    game();
    displayCurrentWinner();
}

decideWinner();

//const playerSelection = "PAPer";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
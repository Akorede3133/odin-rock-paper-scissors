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
        winner =   `It's a tie!`;
    }else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        winner = `You won! ${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        winner = `You won! ${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        winner = `You won! ${playerChoice} beats ${computerChoice}`;
    } else {
        winner = `You Lost! ${computerChoice} beats ${playerChoice}`;
    }
    return winner;
}
//const playerSelection = "PAPer";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
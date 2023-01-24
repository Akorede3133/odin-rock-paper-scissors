/****** --- Variable Declarations --- ******/
let playerScore = 0;
const displayPage = document.querySelector('.display');
const choicePage = document.querySelector('.choices');
const playerSide = document.querySelector('.choices .player');
const computerSide = document.querySelector('.choices .computer');
const playerImage = document.querySelector('.player img');
const computerImage = document.querySelector('.computer img');
const displayImages = document.querySelectorAll('.display section');
const declareWinnerText = document.querySelector('.decide h1');
const decideContainer = document.querySelector('.decide');
const playAgainBtn = document.querySelector('.decide button');
const count = document.querySelector('.count');
const closeModalBtn = document.querySelector('.fa-close');
const ruleOverlay = document.querySelector('.rule-overlay');
const ruleBtn = document.querySelector('.rules');
/****** --- End of Variable Declarations --- ******/


/****** --- Event Listeners --- ******/
window.addEventListener('DOMContentLoaded', ()=> {
    playerScore = getLocalStorage();
    count.textContent = playerScore;
})
displayImages.forEach(item=> {
    item.addEventListener('click', (e)=> {
        const id = e.currentTarget.dataset.id;
        const computerId = getComputerChoice();
        console.log(computerId);
        displayPage.style.display = 'none';
        choicePage.style.display = 'flex';
        createElements(id, playerSide);
        setTimeout(()=> {
            createElements(computerId, computerSide);
        }, 2000);
        setTimeout(()=> {
            let winner = playRound(id, computerId);
            game(winner);
            count.textContent = playerScore;
            setLocalStorage();
            decideContainer.classList.remove('hide-decide');
        }, 2500);
    })
})
playAgainBtn.addEventListener('click', ()=> {
    restartGame();
})
ruleBtn.addEventListener('click', ()=> {
    ruleOverlay.classList.remove('hide-overlay');
})
closeModalBtn.addEventListener('click', ()=> {
    ruleOverlay.classList.add('hide-overlay');
})
/***** ---- End of Event Listeners ---- ******/


/****** --- Helper Functions ----******/
function restartGame() {
    displayPage.style.display = 'flex';
    choicePage.style.display = 'none';
    const articles = choicePage.querySelectorAll('.img-container');
    articles.forEach(item => {
        item.remove();
    })
    decideContainer.classList.add('hide-decide');
}

function createElements(id, parentElement) {
    const elem = document.createElement('section');
    const imgTag = document.createElement('img');
    elem.classList.add('img-container', id);
    imgTag.src = `images/icon-${id}.svg`;
    elem.append(imgTag);
    parentElement.prepend(elem);
}

function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const rand = Math.floor(Math.random() * choice.length);
    return choice[rand].toLocaleLowerCase();
}
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection;
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
function game(winner) {
    if (winner === 'player') {
        playerScore++;
        declareWinnerText.textContent = `YOU WIN`;
        playAgainBtn.classList.add('win-btn');
        playAgainBtn.classList.remove('lose-btn');

    } else if (winner === 'tie') {
        playerScore = playerScore;
        declareWinnerText.textContent = 'TIE';
        playAgainBtn.classList.remove('win-btn');
        playAgainBtn.classList.remove('lose-btn');
    } else {
        playerScore--;
        declareWinnerText.textContent = 'YOU LOSE';
        playAgainBtn.classList.remove('win-btn');
        playAgainBtn.classList.add('lose-btn');

    }
}
function setLocalStorage() {
    localStorage.setItem('score', JSON.stringify(playerScore));
}
function getLocalStorage() {
    let score = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : 0;
    return +score;
}
/****** --- End of Helper Functions ----******/


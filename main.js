const playerOutcome = document.getElementById('playerOutcome');
const cpuOutcome = document.getElementById('cpuOutcome');
const playerChoices = Array.from(document.querySelectorAll('.player'));
const playerSelections = Array.from(document.querySelectorAll('.playerSelection'));
const Tally = document.getElementById('tally');
const reset = document.getElementById('reset');


let win = 0;
let draw = 0;
let lose = 0;

console.log(playerChoices);

const pick = (event) => {
    const selection = event.target;
        if (selection == playerChoices[0]) {
            playerOutcome.textContent = 'Rock';
        }
        else if (selection == playerChoices[1]) {
            playerOutcome.textContent = 'Paper';
        }
        else if (selection == playerChoices[2]) {
            playerOutcome.textContent = 'Scissors';
        }

    cpuChoice();
    checkWinner();
}

const cpuChoice = () => {
    const number = (Math.floor(Math.random() *3)) +1;
        if (number == 1) {
            cpuOutcome.textContent = 'Rock';
            document.getElementById('computerRock').style.boxShadow = "0px 0px 20px white";
            document.getElementById('computerPaper').style.boxShadow = "0px 0px 20px transparent";
            document.getElementById('computerScissors').style.boxShadow = "0px 0px 20px transparent";
        }
        else if (number == 2) {
            cpuOutcome.textContent = 'Paper';
            document.getElementById('computerPaper').style.boxShadow = "0px 0px 20px white"
            document.getElementById('computerRock').style.boxShadow = "0px 0px 20px transparent";
            document.getElementById('computerScissors').style.boxShadow = "0px 0px 20px transparent";
        }
        else if (number == 3) {
            cpuOutcome.textContent = 'Scissors';
            document.getElementById('computerScissors').style.boxShadow = "0px 0px 20px white"
            document.getElementById('computerPaper').style.boxShadow = "0px 0px 20px transparent";
            document.getElementById('computerRock').style.boxShadow = "0px 0px 20px transparent";
        }
}

const checkWinner = () => {
    if (playerOutcome.textContent == 'Rock' && cpuOutcome.textContent == 'Scissors' || playerOutcome.textContent == 'Paper' && cpuOutcome.textContent == 'Rock' || playerOutcome.textContent == 'Scissors' && cpuOutcome.textContent == 'Paper') {
        console.log('Player Wins!');
        win++;
    }
    else if (cpuOutcome.textContent == 'Rock' && playerOutcome.textContent == 'Scissors' || cpuOutcome.textContent == 'Paper' && playerOutcome.textContent == 'Rock' || cpuOutcome.textContent == 'Scissors' && playerOutcome.textContent == 'Paper') {
        console.log('CPU Wins!');
        lose++;
    }
    else {
        console.log('Draw');
        draw++;
    } 
    updateTally(win,lose,draw);
}
    
const updateTally = (win, Lose, Draw) => {
    tally.textContent = `Wins: ${win}  Draws: ${draw}  Losses: ${lose}`
}

reset.addEventListener('click', () => {
    win = 0;
    lose = 0;
    draw = 0;
    playerOutcome.textContent = '-';
    cpuOutcome.textContent = '-';
    updateTally(win,lose,draw);
})

playerChoices.forEach(choice => choice.addEventListener('click', pick));

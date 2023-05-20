function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const scoreElement1 = document.getElementById('player-score');
const scoreElement2 = document.getElementById('computer-score');
const scoreElement3 = document.getElementById('result');

let playerScore = 0;
let computerScore = 0; 
let optext = '';

function playGame(playerSelection, computerSelection){

    if (playerSelection === computerSelection){
        optext = 'Tie';
    }

    if (playerSelection === 'Rock'){
        if(computerSelection === 'Paper'){
            computerScore++;
            optext = 'You Lose, Paper beats Rock';
        }
        else{
            playerScore++;
            optext = 'You Win, Rock beats Scissors';
        }
    }

    if(playerSelection === 'Paper'){
        if(computerSelection === 'Rock'){
            playerScore++;
            optext = 'You Win, Paper beats Rock';
        }
        else{
            computerScore++;
            optext = 'You Lose, Scissors beats Paper';
        }
    }

    if(playerSelection === 'Scissors'){
        if(computerSelection === 'Rock'){
            computerScore++;
            optext = 'You Lose, Rock beats Scissors';
        }
        else{
            playerScore++;
            optext = 'You Win, Scissors beats Paper';
        }
    }
}

function game(){

        rockButton.addEventListener('click', function(){
            const computerChoice = getComputerChoice();
            const result = playGame('Rock', computerChoice);
            console.log(result);
            scoreElement1.textContent = playerScore;
            scoreElement2.textContent = computerScore;
            scoreElement3.textContent = optext;
            checkResult();
        });

        paperButton.addEventListener('click', function(){
            const computerChoice = getComputerChoice();
            const result = playGame('Paper', computerChoice);
            console.log(result);
            scoreElement1.textContent = playerScore;
            scoreElement2.textContent = computerScore;
            scoreElement3.textContent = optext;
            checkResult();
        });

        scissorsButton.addEventListener('click', function(){
            const computerChoice = getComputerChoice();
            const result = playGame('Scissors', computerChoice);
            console.log(result);
            scoreElement1.textContent = playerScore;
            scoreElement2.textContent = computerScore;
            scoreElement3.textContent = optext;
            checkResult();
        });

        function checkResult(){
            if(playerScore === 5){
                optext = 'You win!';
                scoreElement3.textContent = optext;
                resetScore();
            }
            else if(computerScore === 5){
                optext = 'You lose!';
                scoreElement3.textContent = optext;
                resetScore();
            }   
        };

        function resetScore(){
            playerScore = 0;
            computerScore = 0;
            scoreElement1.textContent = playerScore;
            scoreElement2.textContent = computerScore;
        }
}

game();


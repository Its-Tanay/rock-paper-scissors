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
let playerScore = 0;
let computerScore = 0; 

function playGame(playerSelection, computerSelection){

    if (playerSelection === computerSelection){
        return 'Tie';
    }

    if (playerSelection === 'Rock'){
        if(computerSelection === 'Paper'){
            computerScore++;
            return 'You Lose! Paper beats Rock';
        }
        else{
            playerScore++;
            return 'You Win! Rock beats Scissors';
        }
    }

    if(playerSelection === 'Paper'){
        if(computerSelection === 'Rock'){
            playerScore++;
            return 'You Win! Paper beats Rock';
        }
        else{
            computerScore++;
            return 'You Lose! Scissors beats Paper';
        }
    }

    if(playerSelection === 'Scissors'){
        if(computerSelection === 'Rock'){
            computerScore++;
            return 'You Lose! Rock beats Scissors';
        }
        else{
            playerScore++;
            return 'You Win! Scissors beats Paper';
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
            checkResult();
        });

        paperButton.addEventListener('click', function(){
            const computerChoice = getComputerChoice();
            const result = playGame('Paper', computerChoice);
            console.log(result);
            scoreElement1.textContent = playerScore;
            scoreElement2.textContent = computerScore;
            checkResult();
        });

        scissorsButton.addEventListener('click', function(){
            const computerChoice = getComputerChoice();
            const result = playGame('Scissors', computerChoice);
            console.log(result);
            scoreElement1.textContent = playerScore;
            scoreElement2.textContent = computerScore;
            checkResult();
        });

        function checkResult(){
            if(playerScore === 5){
                alert('You win!');
                resetScore();
            }
            else if(computerScore === 5){
                alert('You lose!');
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


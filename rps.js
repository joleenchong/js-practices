//this function returns Rock, paper, scissors randomly
function getComputerChoice()
{
    const choicelist =  ["rock", "paper", "scissors"]
    let choice = array[Math.floor(Math.random() * choicelist.length)]
    return choice;

}

function playRound(playerSelection, computerSelection)
{
    let playerWin = false;
    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));
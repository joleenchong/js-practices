function getComputerChoice()
{
    const choicelist =  ["rock", "paper", "scissors"]
    let choice = choicelist[Math.floor(Math.random() * choicelist.length)]
    return choice;

}

function playRound(playerSelection, computerSelection)
{
    let playerWin = false;
    let winLoseText;

    //rock beats scissors, scissors beats paper, paper beats rock
    if (playerSelection == computerSelection)
    {
        playerWin = null;
    }
    else
    {
        if (playerSelection == "rock")
        {
            playerWin = computerSelection == "scissors" ? true : false
        }
        else if (playerSelection == "paper")
        {
            playerWin = computerSelection == "rock" ? true : false
        }
        else if (playerSelection == "scissors")
        {
            playerWIn = computerSelection == "paper" ? true : false
        }
        else
        {
            window.alert("Invalid input")
        }
    }
    if (playerWin)
    {
        winLoseText = "You win, " + playerSelection + " beats " + computerSelection;
    }
    else if (playerWin == null)
    {
        winLoseText = "Draw."
    }
    else
    {
        winLoseText = "You lose, " + computerSelection + " beats " + playerSelection;
    }
    window.alert(winLoseText)
    
    return playerWin;

}

function game()
{
    let playerScore = 0;
    let computerScore = 0;
    let checkWin, playerSelection;
    for (let i = 0; i < 5; i++)
    {
        playerSelection = prompt("Enter choice: ", "rock")
        checkWin = playRound(playerSelection.toLowerCase(), getComputerChoice())
        checkWin ? playerScore++ : computerScore++
    }
    playerScore > computerScore ? window.alert("Congrats! You win") : window.alert("You lose. Game Over.")
}

game();
function computerPlay(){

    let cpuNum = Math.floor(Math.random() * (3 - 0));
    let computerSelection;
    if (cpuNum === 0){
        computerSelection = 'rock';
    }
    else if (cpuNum === 1){
        computerSelection = 'paper';
    }
    else if (cpuNum === 2){
        computerSelection = 'scissors';
    }
    return computerSelection;
}



function playRound(playerSelection,computerSelection) {
  
    let tie;
    let playerWin;
    let cpuWin;
    
    if (playerSelection === 'rock') {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log(`Tie! You Have Both Chosen ${playerSelection}.`);
        tie = 1;
        return tie;
    }
    else if (playerSelection === 'rock' && computerSelection !== 'paper') {
        console.log(`You Win! Rock beats ${computerSelection}.`);
        playerWin = 1;
        return playerWin;

    }
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        
    }
    }
    if (playerSelection === 'paper'){

    if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('Tie! You have Both Chosen Paper.');
        
    }
    if (playerSelection === 'paper' && computerSelection != 'scissors') {
        console.log(`You Win! Paper beats ${computerSelection}.`);
        
    }
    else {
        console.log(`You Lose! ${computerSelection} Beats Paper.`);
        
    }
}  
    if (playerSelection === 'scissors'){
    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('Tie! You Have Both Chosen Scissors.');
    }
    else if (playerSelection === 'scissors' && computerSelection != 'rock') {
        console.log(`You Win! Scissors Beat ${computerSelection}.`);
        
    }
    else {
         console.log(`You Lose! ${computerSelection} Beats ${playerSelection}.`);
        
    }
}
}
function game() { 
    let winner;
    for (i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = 'rock';
        console.log(playRound(playerSelection,computerSelection));
    }

}

game();



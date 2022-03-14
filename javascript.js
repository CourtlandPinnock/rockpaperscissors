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


let cpuScore = 0;
let playerScore = 0;

function playRound(playerSelection,computerSelection) {
  
    
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log(`Tie! You Have Both Chosen ${playerSelection.toUpperCase()}.`);
        
    }
    else if (playerSelection === 'rock' && computerSelection !== 'paper') {
        console.log(`You Win! Rock beats ${computerSelection.toUpperCase()}.`);
        playerScore ++;
        
        

    }
    else {
        console.log(`You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`);
        cpuScore ++;

        
    }
    }
    if (playerSelection === 'paper'){

    if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('Tie! You have Both Chosen Paper.');
         
    }

    else if (playerSelection === 'paper' && computerSelection != 'scissors') {
        console.log(`You Win! Paper beats ${computerSelection.toUpperCase()}.`);
        playerScore ++;
        
        
    }
    else {
        console.log(`You Lose! ${computerSelection.toUpperCase()} Beats Paper.`);
        cpuScore++;
        
        
    }
}  
    if (playerSelection === 'scissors'){
    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('Tie! You Have Both Chosen Scissors.');
        
        
    }
    else if (playerSelection === 'scissors' && computerSelection != 'rock') {
        console.log(`You Win! Scissors Beat ${computerSelection.toUpperCase()}.`);
        playerScore ++;
        
    }
    else {
         console.log(`You Lose! ${computerSelection.toUpperCase()} Beats ${playerSelection.toUpperCase()}.`);
        cpuScore ++;
    }
    
}


}
function game() { 
    let lose;
    let win;

    for (i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = prompt('Enter You Choice', '');
        console.log(playRound(playerSelection,computerSelection));
        
        
    }
    console.log(playerScore);
    if (cpuScore > playerScore){
        lose = console.log(`You lose! \n${cpuScore} - ${playerScore}`);
         
    }
    else if (cpuScore < playerScore){
        win = console.log(`You Win \n${playerScore} - ${cpuScore}`);
    }   
}

game();



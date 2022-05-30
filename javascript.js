let currentTime = new Date();

function computerPlay(){
    // Randomize cpu selection, using math random.
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

let logMsg;
let cpuScore = 0;
let playerScore = 0;
let round = 1;

updateScore();

function playRound(playerSelection,computerSelection) {
  
    // Logic to determine who has one the round. We increment either playerScore or cpuScore depending on who wins. This are global variables.
    // Determine if game is a tie. 
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        logMsg = `Tie! You Have Both Chosen ${playerSelection.toUpperCase()}.`;
        
    }
    // Determine if you have one. Rock beats everything that is not paper.
    else if (playerSelection === 'rock' && computerSelection !== 'paper') {
        logMsg = `You Win! Rock beats ${computerSelection.toUpperCase()}.`;
        playerScore ++;
        
        

    }
    // Logic for loss. If you have not won, and you have not tie'd the game, you have lost.
    else {
        logMsg = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
        cpuScore ++;

        
    }
    }
    // Logic for player selection, paper. Determine if tie, then win, finally if loss.
    if (playerSelection === 'paper'){

    if (playerSelection === 'paper' && computerSelection === 'paper') {
        logMsg = 'Tie! You have Both Chosen Paper.';
         
    }

    else if (playerSelection === 'paper' && computerSelection != 'scissors') {
        logMsg = `You Win! Paper beats ${computerSelection.toUpperCase()}.`;
        playerScore ++;
        
        
    }
    else {
        logMsg = `You Lose! ${computerSelection.toUpperCase()} Beats Paper.`;
        cpuScore++;
        
        
    }
}  
    // Logic for players selection scissors. Determine if tie first, then if win, finally if loss.
    if (playerSelection === 'scissors'){
    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        logMsg = 'Tie! You Have Both Chosen Scissors.';
        
        
    }
    else if (playerSelection === 'scissors' && computerSelection != 'rock') {
        logMsg = `You Win! Scissors Beat ${computerSelection.toUpperCase()}.`;
        playerScore ++;
        
    }
    else {
         logMsg = `You Lose! ${computerSelection.toUpperCase()} Beats ${playerSelection.toUpperCase()}.`;
        cpuScore ++;
    }
    
}
console.log('cpuscore: ' ,cpuScore);
console.log('userscore: ' ,playerScore);


}
// Logic to run an entire game.
function game() { 
    let lose;
    let win;
    // Play 5 rounds

    
    // Run the computerPlay() function and store the computers choice in computerSelection.
        //const computerSelection = computerPlay();
        //console.log('cpu Selection: ', computerSelection);
    
    // Prompt the user for their selection, store in var playerSelection.

    //const playerSelection = prompt('Enter You Choice', '');
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        const computerSelection = computerPlay();
        console.log('cpu Selection: ', computerSelection);
        console.log(playRound('rock',computerSelection));
        
        round ++;
        updateScore();
        winlog();
        console.log('round: ', round);
        endGame();
    });

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        const computerSelection = computerPlay();
        console.log('cpu Selection: ', computerSelection);
        console.log(playRound('scissors',computerSelection));
        
        round ++;
        updateScore();
        winlog();
        console.log('round: ', round);
        endGame();

    })
    
    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        const computerSelection = computerPlay();
        console.log('cpu Selection: ', computerSelection);
        console.log(playRound('paper',computerSelection));
        
        round ++;
        updateScore();
        winlog();
        console.log('round: ', round);
        endGame();


    })
    
   


        // Console.log the playRound function.
        //console.log(playRound(playerSelection,computerSelection));
    

    // Compare scores and print the winner.
    
        
        
     
      
}

function whoWon() {
    document.body.innerHTML = ''
    body = document.querySelector('body');
    if (cpuScore > playerScore){
        lose = `You lose! \n${cpuScore} - ${playerScore}`;
        loser = document.createElement('h1');
        loser.textContent = lose;
        body.appendChild(loser);
        
        //log.appendChild(loser);

        
    }
    else if (cpuScore < playerScore){
        win = `You Win \n${playerScore} - ${cpuScore}`;
        winner = document.createElement('h1');
        winner.textContent = win;
        body.appendChild(winner);
        
        //log.appendChild(winner);

       }
    else {
        const tied = document.createElement('h1');
        tied.textContent = `You tie! ${cpuScore} - ${playerScore}`;
        //log.appendChild(tied);
        body.appendChild(tied);
    }
    reset = document.createElement('button');
    reset.textContent = 'Play Again';
    reset.addEventListener('click', () => {
        location.reload(true);
    });
    body.appendChild(reset);
}

function endGame() {
    if (round == 6) {
        rock.disabled = true;
        scissors.disabled = true;
        paper.disabled = true;
        document.getElementById('rnd').innerHTML = '5';
        whoWon();
    }
}

function updateScore() {
    document.getElementById('rnd').innerHTML = '';
    document.getElementById('rnd').innerHTML += round;
    const cpuLive = document.querySelector('#cScore');
    cpuLive.innerHTML = '';
    cpuLive.innerHTML += cpuScore;
    const playerLive = document.querySelector('#pScore');
    playerLive.innerHTML = '';
    playerLive.innerHTML += playerScore;
}



function winlog() {
    const log = document.querySelector('#log')
    const chatLog = document.createElement('p')
    chatLog.innerHTML = currentTime.toLocaleTimeString() + ': ' + logMsg + '\n';
    log.appendChild(chatLog)
}
game();



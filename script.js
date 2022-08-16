let compChoice;
let playerInput;
let outcomeText="";
let compScore=0;
let playerScore=0;
let roundCounter=1;
let playerTotalWins=0;
let compTotalWins=0;

const score=document.querySelector('.score')
const decisionOutcome=document.querySelector('.decisionOutcome')
const choices=document.querySelector('.choices')
const resultElementCreation=document.querySelector('.results')
decisionOutcome.style.cssText='color:rgb(46, 255, 175)'

function createRestart(){
    const roundWinCounter=document.createElement('p')
    resultElementCreation.appendChild(roundWinCounter)
    roundWinCounter.classList.add('roundWinCounter')
    roundWinCounter.innerHTML=`Total Round Wins<br/><br/>You: ${playerTotalWins} ${'\xa0'.repeat(20)} Computer: ${compTotalWins}`
    const restartButton=document.createElement('button')
    restartButton.textContent="Go Again?"
    restartButton.classList.add('restartButton')
    resultElementCreation.appendChild(restartButton)
    restartButton.addEventListener('click', function restart(){
        roundCounter+=1
        decisionOutcome.textContent=`Commence Round ${roundCounter}`;
        choices.textContent=''
        score.textContent=''
        compScore=0;
        playerScore=0;
        score.style.cssText='border:none'
        resultElementCreation.removeChild(roundWinCounter)
        resultElementCreation.removeChild(restartButton)
        decisionOutcome.style.cssText='color:rgb(46, 255, 175)'
})}

function getComputerChoice(){
    let compNum=Math.floor(Math.random()*3)
    if (compNum===2){
        compChoice='scissors'
    }
    else if(compNum===1){
        compChoice='paper'
    }
    else {
        compChoice='rock'
    }
    return compChoice;
}

function displayChoices(playerInput,compChoice){
    choices.textContent=
    `You Chose: ${playerInput.charAt(0).toUpperCase()+playerInput.slice(1)}  ${'\xa0'.repeat(30)} Computer Chose: ${compChoice.charAt(0).toUpperCase()+compChoice.slice(1)}`
}

function decideWinnerWithMessages(){
    getComputerChoice()
    displayChoices(playerInput,compChoice)
    if (playerInput==compChoice){
        outcomeText="Tie, try again"
        decisionOutcome.style.cssText='color:white'
    }
    else if (playerInput=='scissors' && compChoice=='paper'||
            playerInput=='rock' && compChoice=='scissors'||
            playerInput=='paper' && compChoice=='rock'){
        decisionOutcome.style.cssText='color:yellow'
        if (playerScore==4){
            playerScore+=1
            playerTotalWins+=1
            createRestart()
            if(compScore==0){
                outcomeText="Astounding Victory!!!<br/>Poor soul never stood a chance<br/>You Just Used Up The Rest Of Your Luck For The Week"
            }
            else if(compScore<=2){
                outcomeText="Impressive Win!<br/>You did them dirty"
            }
            else if (compScore<4){
                outcomeText="Congrats On The Dub<br/>Don't let them catch you slacking"
            }
            else{
                outcomeText="Hard-fought Victory, PHEW!<br/>That was too close for comfort"
            }
        }
        else{
            playerScore+=1
            outcomeText='You won the round!'
    }}
    else {
        decisionOutcome.style.cssText='color:bright-red'
        if(compScore==4){
            compScore+=1
            compTotalWins+=1
            createRestart()
            if(playerScore==0){
                outcomeText="Horrifying Defeat...<br/>Did you even try?"
            }
            else if(playerScore<=2){
                outcomeText="Loss By Significant Margin<br/>Get good mate"
            }
            else if (playerScore<4){
                outcomeText="Tough Loss<br/>Maybe next time champ"
            }
            else{
                outcomeText="Heartbreaking Defeat... <br/>The choke of a century"
            }
        }
        else{
            compScore+=1
                outcomeText='Lost round...'
    }}}

    const playerButtons=document.querySelectorAll('.button');
    playerButtons.forEach((button) => {
        button.addEventListener('click', function getPlayerInput(){
            if(playerScore==5 || compScore==5){
                return
            }
            else{
            playerInput=button.id
            decideWinnerWithMessages()
            decisionOutcome.innerHTML=outcomeText
            score.style.cssText='border:solid white;'
            score.textContent=`Your Score: ${playerScore} | Computer Score: ${compScore}`
    }})});
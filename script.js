let compChoice;
let playerInput;
let outcomeText="";
let secondaryOutcome="";
let compScore=0;
let playerScore=0;

const score=document.querySelector('.score')
const decisionOutcome=document.querySelector('.decisionOutcome')


function createRestart(){
    const restartButtonCreation=document.querySelector('.results')
    const restartButton=document.createElement('button')
    restartButton.textContent="Go Again?"
    restartButton.classList.add('.restartButton')
    restartButtonCreation.appendChild(restartButton)
    restartButton.addEventListener('click', function restart(){
        decisionOutcome.textContent="Let's Begin";
        score.textContent=''
        compScore=0;
        playerScore=0;
        restartButtonCreation.removeChild(restartButton)

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

function decideWinner(){
    getComputerChoice()
    console.log("Computer: "+compChoice)
    console.log("You: "+playerInput)
    if (playerInput==compChoice){
        outcomeText="It's a tie, try again"
    }
    else if (playerInput=='scissors' && compChoice=='paper'||
            playerInput=='rock' && compChoice=='scissors'||
            playerInput=='paper' && compChoice=='rock'){
        if (playerScore==4){
            playerScore+=1
            outcomeText='WINNNNNNNNNN'
            createRestart()
        }
        else{
        playerScore+=1
        outcomeText='You won!'
    }}
    else {
        if(compScore==4){
            compScore+=1
            createRestart()
            outcomeText='Heartbreaking Defeat...\nThe Choke Of A Century'
            // if(playerScore==0){
            //     outcomeText=`Horrifying Defeat\nDid You Even Try?`

            // }
            // else if(playerScore<=2){
            //     outcomeText=`Significant Margin Loss\nGet Good Mate`

            // }
            // else if (playerScore<4){
            //     outcomeText='Tough Loss. Maybe Next Time Champ'

            // }
            // else{
            //     outcomeText1='Heartbreaking Defeat...'
            //     outcomeText2='The Choke Of A Century'
            // }
        }
        else{
        compScore+=1
        outcomeText='You lost...'
    }}
}



    const playerButtons=document.querySelectorAll('.button');
    playerButtons.forEach((button) => {
        button.addEventListener('click', function getPlayerInput(){
            if(playerScore==5 || compScore==5){
                return
            }
            else{
            playerInput=button.id
            decideWinner()
            decisionOutcome.textContent=outcomeText+secondaryOutcome
            score.textContent=`Your Score: ${playerScore} | Computer Score: ${compScore}`
    }})});


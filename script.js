let compChoice;
let compScore=0;
let playerScore=0;

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
function getPlayerInput(){
    let playerInput=prompt("Rock? Paper? Maybe Scissors?\n\nClick 'cancel' or 'esc' on your keyboard to quit\n")
    playerInput=playerInput.toLowerCase()
    getComputerChoice()
    console.log("Computer: "+compChoice)
    console.log("You: "+playerInput)
    if (playerInput==compChoice){
        alert("It's a tie!")
        console.log("It's a tie, try again")
    }
    else if (!(playerInput=='rock' || playerInput=='paper' || playerInput=='scissors')){
        alert("Invalid response")
        console.log('Nothing')
    }
    else if (playerInput=='scissors' && compChoice=='paper'||
            playerInput=='rock' && compChoice=='scissors'||
            playerInput=='paper' && compChoice=='rock'){
        alert('You got the dub')
        playerScore+=1
        console.log('You won!')
        return playerScore;
    }
    else {
        alert('Loser')
        compScore+=1
        console.log('You lost...')
        return compScore;
    }}
    

function game(){
    while (playerScore< 5 && compScore<5){
    console.log('            ----               ')
    console.log('Your Score: '+playerScore)
    console.log('Computer Score: '+compScore)
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    getPlayerInput()

    if (playerScore==5){
        alert("You won the whole thing")
        console.log('Total victory')
    }
    else if (compScore==5){
        alert("Game Over...")
        console.log('Everything is lost')
    }}
    console.log('Your Score: '+playerScore)
    console.log('Computer Score: '+compScore)
}

let begin=prompt("Click \'ok\' to play the game\nClick 'cancel' or 'esc' on your keyboard to exit")
if(begin!=null){
game()
}

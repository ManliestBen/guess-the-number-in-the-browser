/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let secretNum, guessList, isWinner


/*------------------------ Cached Element References ------------------------*/
const form = document.querySelector("form")
const guessInput = document.querySelector("#guess-input")
const guessesEl = document.querySelector("#prev-guesses")
const messageEl = document.querySelector("#message")
const resetBtn = document.querySelector("#reset-button")
const prevGuessMsg = document.querySelector("#prev-guesses-msg")


/*----------------------------- Event Listeners -----------------------------*/
form.addEventListener('reset', init)


/*-------------------------------- Functions --------------------------------*/

init()

function init(){
  // Remove all guesses from the guess list
  guessesEl.innerText = ''
  // Reset the starting message
  messageEl.innerText = 'Please enter a number from 1 to 100!' 
  // Hide the reset button
  resetBtn.setAttribute('hidden', true)
  // Get rid of 'Previous Guesses' text
  prevGuessMsg.innerText = ''
  // Reset guessList
  guessList = []
  // Reset isWinner
  isWinner = false
  // Generate new secretNum
  secretNum = Math.floor(Math.random() * 100 + 1)
  console.log(secretNum)
}



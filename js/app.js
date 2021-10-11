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
form.addEventListener('submit', function(evt) {
  evt.preventDefault()
  if (isWinner === false) {
    checkGuess(parseInt(guessInput.value))
  }
})

/*-------------------------------- Functions --------------------------------*/

init()

function checkGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    // ERROR
  } else if (guess === secretNum) {
    // WINNAH WINNAH CHICKEN DINNAH!
  } else {
    guessList.push(guess)
  }
}



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



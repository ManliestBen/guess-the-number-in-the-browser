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
    renderError('Whoops!  Please enter a number from 1 to 100.')
    return
  } else if (guess === secretNum) {
    // WINNAH WINNAH CHICKEN DINNAH!
    isWinner = true
  }
  guessList.push(guess)
  render()
}

function renderError(error) {

}

function renderGuess(div, lastGuess) {
  
}

function render() {
  const lastGuess = guessList[guessList.length -1]
  const div = document.createElement('div')
  div.innerText = lastGuess

  if (guessList.length === 1) {
    prevGuessMsg.innerText = 'Previous Guesses:'
    resetBtn.removeAttribute('hidden')
  }

  if (isWinner) {
    renderWin(div)
  } else if (lastGuess > secretNum || lastGuess < secretNum) {
    renderGuess(div, lastGuess)
  }
}

function init(){
  // Remove className from message div (turns it back to black)
  messageEl.className = ''
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
  render()
}



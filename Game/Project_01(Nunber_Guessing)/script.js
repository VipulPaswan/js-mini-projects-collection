let randomnum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowhigh = document.querySelector('.lowerHi');
const startover = document.querySelector('.resultParas');
const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;
let playGame = true;


if(playGame){
submit.addEventListener('click', function (e) {
  e.preventDefault();
  const guess = parseInt(userInput.value);

  validateGuess(guess);
});
}

function validateGuess(guess) {
      if(isNaN(guess)){
            alert('Please enter valid number');
      }
      else if(guess<1){
            alert('Please enter a number more than 1');
      }
      else if(guess >100){
            alert("Please enter a number less than 100");
      }

      else{
            prevGuess.push(guess);
            if(numGuess===10){
                  displayGuess(guess)
                  displayMessage(`Game Over.Random number was ${randomnum}`)
                  endGame();
            }
            else{
                  displayGuess(guess);
                  checkGuess(guess);
            }
      }

}


function checkGuess(guess) {
      if(guess===randomnum){
            displayMessage(`You guessed it right`);
            endGame();
      }
      else if(guess<randomnum){
            displayMessage(`Number is Too Low`);
      }

      else if(guess>randomnum){
            displayMessage(`Number is Too High`);
      }
}


function displayGuess(guess) {
      userInput.value = '';
      guessesSlot.innerHTML += `${guess} ,`;
      numGuess++;
      remaining.innerHTML = `${11-numGuess}`

}

function displayMessage(message) {
      lowhigh.innerHTML = `<h2>${message}</h2>`;

}



function endGame() {
      userInput.value = '';
      userInput.setAttribute('disabled','');
      p.classList.add('button');
      p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
      startover.appendChild(p);
      playGame = false;
      newGame()


}



function newGame() {
      const newGamebtn = document.querySelector('#newGame');
      newGamebtn.addEventListener('click',function(e){
            randomnum = parseInt(Math.random() * 100 + 1);
            prevGuess = [];
            numGuess = 1;
            guessesSlot.innerHTML = ''
            remaining.innerHTML = `${11 - numGuess}`; 
            userInput.removeAttribute('disabled');
            startover.removeChild(p);
            displayMessage("");
            
            playGame = true;
      })

      
}

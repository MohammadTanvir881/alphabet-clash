// function play(){
//     const homeScreen = document.getElementById('home')
//     const hide = homeScreen.classList.add('hidden')
//     const playGround = document.getElementById('play-ground');
//     const show = playGround.classList.remove('hidden')
// }

function keyBoardButtonIsPressed(event){
  const playerPressed = event.key;
   if ( playerPressed === 'Escape'){
     gameOver()
   }
  // console.log('player pressed :' , playerPressed)

  const expectedKeyToPress = document.getElementById('current-alphabet')
  const expectedKey = expectedKeyToPress.innerText.toLowerCase();
  // console.log('expected key to press :', expectedKeyToPress.innerText)
  if (playerPressed === expectedKey){
          // console.log('you get a point')
          removeBackgroundColorById(expectedKey)
        // current score
        const currentScore = document.getElementById('current-score')
        const scoreText = currentScore.innerText;
        const score = parseInt(scoreText);

        // game result
       
    
       
        // update score
        const updateScore = score + 1;
        // new score set in display
        const newScore = updateScore;
        currentScore.innerText = newScore;
        const finalScore = document.getElementById('game-score');
        finalScore.innerText = newScore;


          continueGame()
  }
  else {
    // console.log('you lose a life')
    // current life 
    const currentLife = document.getElementById('current-life');
    const currentLifeText = currentLife.innerText;
    const life = parseInt(currentLifeText);
    // update life number
    const updateLife = life - 1;
    currentLife.innerText = updateLife;
    if (updateLife === 0){
      gameOver();
    }
  }
}

// add keybord handeler
document.addEventListener('keyup', keyBoardButtonIsPressed)

function continueGame(){
   // generate a random alphabet
   const alphabet = getRandomAlphabet();
//    console.log('your random alphabet' , alphabet)
  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet;
  // set background color
  setBackgroundColorById(alphabet)
}

function play(){
    hideElementById('home');
    showElementById('play-ground');
    hideElementById('total-score')

    // life update
    const updateLife = document.getElementById('current-life');
    updateLife.innerText = 5;
    const life = parseInt(updateLife)

    // updateScore
    const updateScore = document.getElementById('current-score');
    updateScore.innerText = 0;
    const score = parseInt(updateScore)
   


    // 
    continueGame();
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('total-score')
  const currentAlphabet = document.getElementById('current-alphabet');
  const alphabet = currentAlphabet.innerText;
  removeBackgroundColorById(alphabet)

  
  
  
}

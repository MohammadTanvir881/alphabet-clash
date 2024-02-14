// function play(){
//     const homeScreen = document.getElementById('home')
//     const hide = homeScreen.classList.add('hidden')
//     const playGround = document.getElementById('play-ground');
//     const show = playGround.classList.remove('hidden')
// }

function keyBoardButtonIsPressed(event){
  const playerPressed = event.key;
  // console.log('player pressed :' , playerPressed)

  const expectedKeyToPress = document.getElementById('current-alphabet')
  const expectedKey = expectedKeyToPress.innerText.toLowerCase();
  // console.log('expected key to press :', expectedKeyToPress.innerText)
  if (playerPressed === expectedKey){
          // console.log('you get a point')
          removeBackgroundColorById(expectedKey)
          continueGame()
  }
  else {
    // console.log('you lose a life')
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
    continueGame();
}

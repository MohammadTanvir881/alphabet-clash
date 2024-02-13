// function play(){
//     const homeScreen = document.getElementById('home')
//     const hide = homeScreen.classList.add('hidden')
//     const playGround = document.getElementById('play-ground');
//     const show = playGround.classList.remove('hidden')
// }

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

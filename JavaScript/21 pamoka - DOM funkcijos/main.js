const flag = document.querySelector('.flag');
const flagTop = document.querySelector('.flag__top');
const flagMiddle = document.querySelector('.flag__middle');
const flagBottom = document.querySelector('.flag__bottom');

// LT flag
function displayFlagLT(){
  flagTop.style.background = '#feeb00';
  flagMiddle.style.background = '#058104';
  flagBottom.style.background = '#fc0204';
}

const btnLT = document.querySelector('#flag-lt');
btnLT.addEventListener('click', displayFlagLT);

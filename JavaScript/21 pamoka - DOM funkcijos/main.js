const flag = document.querySelector('.flag');
const flagTop = document.querySelector('.flag__top');
const flagMiddle = document.querySelector('.flag__middle');
const flagBottom = document.querySelector('.flag__bottom');

// Toggle direction button
function toggleFlagDirection() {
  if (flag.classList.contains('flag--vertical')) {
    btnFlagDirectionToggle.innerHTML = 'Vertical';
    flag.classList.remove('flag--vertical');
  } else {
    btnFlagDirectionToggle.innerHTML = 'Horizontal';
    flag.classList.add('flag--vertical');
  }
}
const btnFlagDirectionToggle = document.querySelector('#btn-flag-direction-toggle');
btnFlagDirectionToggle.addEventListener('click', toggleFlagDirection);

// LT flag
function displayFlagLT() {
  flagTop.style.background = '#feeb00';
  flagMiddle.style.background = '#058104';
  flagBottom.style.background = '#fc0204';
}

const btnLT = document.querySelector('#btn-flag-lt');
btnLT.addEventListener('click', displayFlagLT);

// AR flag
function displayFlagAr() {
  flagTop.style.background = '#f70503';
  flagMiddle.style.background = '#0503ff';
  flagBottom.style.background = '#f88242';
}

const btnAR = document.querySelector('#btn-flag-ar');
btnAR.addEventListener('click', displayFlagAr);

// AU flag
function displayFlagAU() {
  flagTop.style.background = '#fa0400';
  flagMiddle.style.background = '#ffffff';
  flagBottom.style.background = '#fa0400';
}

const btnAU = document.querySelector('#btn-flag-au');
btnAU.addEventListener('click', displayFlagAU);

// BUL flag
function displayFlagBUL() {
  flagTop.style.background = '#fcfefb';
  flagMiddle.style.background = '#0b7f04';
  flagBottom.style.background = '#fc0204';
}

const btnBUL = document.querySelector('#btn-flag-bul');
btnBUL.addEventListener('click', displayFlagBUL);

// Hung flag
function displayFlagHung() {
  flagTop.style.background = '#fc0204';
  flagMiddle.style.background = '#fdffff';
  flagBottom.style.background = '#068106';
}

const btnHUNG = document.querySelector('#btn-flag-hung');
btnHUNG.addEventListener('click', displayFlagHung);

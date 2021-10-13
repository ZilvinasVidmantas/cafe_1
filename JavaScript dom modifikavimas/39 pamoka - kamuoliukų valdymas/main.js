const ballBlue = new Ball('#ball-blue', '#0000aa');
const ballRed = new Ball('#ball-red', '#aa0000', 100, 100);
const btnStartBlue = document.querySelector('#btn-ball-blue-start');
const btnStopBlue = document.querySelector('#btn-ball-blue-stop');
const btnStartRed = document.querySelector('#btn-ball-red-start');
const btnStopRed = document.querySelector('#btn-ball-red-stop');

btnStartBlue.addEventListener('click', ballBlue.startMovement);
btnStopBlue.addEventListener('click', ballBlue.stopMovement);

btnStartRed.addEventListener('click', ballRed.startMovement);
btnStopRed.addEventListener('click', ballRed.stopMovement);

/*
  1. Sukurti žalią kamuoliuką, su atitinkamais paleidimo ir sustabdymo mygtukais
*/
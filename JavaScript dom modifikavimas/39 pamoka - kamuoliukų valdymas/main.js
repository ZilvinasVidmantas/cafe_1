const ballBlue = new Ball('#ball-blue', '#0000aa');
const btnBlue = document.querySelector('#btn-ball-blue');
btnBlue.addEventListener('click', () => {
  if (btnBlue.classList.contains('btn-success')) {
    btnBlue.classList.replace('btn-success', 'btn-danger');
    btnBlue.innerHTML = 'Stop';
  } else {
    btnBlue.classList.replace('btn-danger', 'btn-success');
    btnBlue.innerHTML = 'Start';
  }
  ballBlue.toggleMovement();
});

const ballRed = new Ball('#ball-red', '#aa0000', 100, 100);
const btnStartRed = document.querySelector('#btn-ball-red-start');
const btnStopRed = document.querySelector('#btn-ball-red-stop');
btnStartRed.addEventListener('click', ballRed.startMovement);
btnStopRed.addEventListener('click', ballRed.stopMovement);

const ballGreen = new Ball('#ball-green', '#00aa00', 50, 100);
const btnStartGreen = document.querySelector('#btn-ball-green-start');
const btnStopGreen = document.querySelector('#btn-ball-green-stop');
btnStartGreen.addEventListener('click', ballGreen.startMovement);
btnStopGreen.addEventListener('click', ballGreen.stopMovement);

/*
  1. Pakeisti raudono ir žalio kamuoliuko valdymo mygtukus vienu 'toggle' mygtuku. 
*/
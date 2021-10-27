const ball = new Ball('.ball');
const btnStart = document.querySelector('#btn-ball-start');
const btnStop = document.querySelector('#btn-ball-stop');

btnStart.addEventListener('click', ball.startMovement);
btnStop.addEventListener('click', ball.stopMovement);

/*
  1. Papildyti kamuoliuko konstruktorių, jog būtų galima nurodyti jo spalvą, ir tai įgalinti
  2. Papildyti kamuoliuko konstruktorių, jog būtų galima pradines koordinates
  3. Sukurti dar vieną kamuoliuką, su atitinkamais paleidomo ir sustabdymo mygtukais
*/
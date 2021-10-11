const btnInc = document.querySelector('.btn-primary');
const btnDec = document.querySelector('.btn-warning');
const square = document.querySelector('.square');

const sideDelta = 10;

const incSquareSize = () => {
  const coundingRect = square.getBoundingClientRect();
  const currentSize = coundingRect.height;
  square.style.height = currentSize + sideDelta + 'px';
  square.style.width = currentSize + sideDelta + 'px';
}

const decSquareSize = () => {
  console.log('Kvadratas mažinamas');
}

btnInc.addEventListener('click', incSquareSize);
btnDec.addEventListener('click', decSquareSize);

/*
  Pertrauka iki 21:20
  21:20 - 21:25 įgalinti mažinimo logiką

*/

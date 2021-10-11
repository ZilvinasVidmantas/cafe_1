const btnInc = document.querySelector('.btn-primary');
const btnDec = document.querySelector('.btn-warning');
const colorPicker = document.querySelector('.form-control-color');
const square = document.querySelector('.square');

const sideDelta = 10;
let squareSize = square.getBoundingClientRect().height;
square.style.backgroundColor = colorPicker.value;

const changeSquareSize = (direction = 1) => {
  squareSize += sideDelta * direction;
  const sideSizeInPixels = squareSize + 'px';
  square.style.height = sideSizeInPixels;
  square.style.width = sideSizeInPixels;
}

btnInc.addEventListener('click', () => changeSquareSize());
btnDec.addEventListener('click', () => changeSquareSize(-1));
colorPicker.addEventListener('change', () => square.style.backgroundColor = colorPicker.value);

/*
  Sukurti dar vieną spalvos parinkimo įvestį, kuri nustatytų kvadrato sienelės spalvą
*/
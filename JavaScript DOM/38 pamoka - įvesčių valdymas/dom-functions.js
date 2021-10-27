const btnInc = document.querySelector('.btn-primary');
const btnDec = document.querySelector('.btn-warning');
const backgroundColorPicker = document.querySelector('#background-color-picker');
const borderColorPicker = document.querySelector('#border-color-picker');
const square = document.querySelector('.square');

const sideDelta = 10;
let squareSize = square.getBoundingClientRect().height;
square.style.backgroundColor = backgroundColorPicker.value;
square.style.borderColor = borderColorPicker.value;

const changeSquareSize = (direction = 1) => {
  squareSize += sideDelta * direction;
  const sideSizeInPixels = squareSize + 'px';
  square.style.height = sideSizeInPixels;
  square.style.width = sideSizeInPixels;
}

btnInc.addEventListener('click', () => changeSquareSize());
btnDec.addEventListener('click', () => changeSquareSize(-1));
backgroundColorPicker.addEventListener('change', () => square.style.backgroundColor = backgroundColorPicker.value);
borderColorPicker.addEventListener('change', () => square.style.borderColor = borderColorPicker.value);

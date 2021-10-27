const rootElement = document.querySelector('#root');
const userTableComponent = new TableComponent({
  headers: ['Nuotrauka', 'Vartotojas', 'Paštas'],
  data: userDataArr.reduce((prevRowsArr, { imgSrc, username, email }) => [
    ...prevRowsArr,
    [`<img src="${imgSrc}" class="table__row-img"/>`, username, email]
  ], [])
});
rootElement.appendChild(userTableComponent.htmlElement);

const user = {
  name: 'Kepalius',
  surname: 'Vandalius',
  printThisFunction: function() {
    console.log('as esu funkcija')
    console.log(this);
  },
  printThisLambda: () => {
    console.log('as esu lambda')
    console.log(this);
  }
}


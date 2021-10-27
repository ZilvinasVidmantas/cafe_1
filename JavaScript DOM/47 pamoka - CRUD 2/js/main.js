const rootElement = document.querySelector('#root');
const userTableComponent = new TableComponent({
  headers: ['Nuotrauka', 'Vartotojas', 'Paštas'],
  data: userDataArr.reduce((prevRowsArr, { imgSrc, username, email, id }) => [
    ...prevRowsArr,
    {
      id,
      rowData: [`<img src="${imgSrc}" class="table__row-img"/>`, username, email]
    }
  ], [])
});
rootElement.appendChild(userTableComponent.htmlElement);


/*
  1. Sukurti formos komponentą faile <form-component.js>, su minimaliu atvaizdavmu (hard-code)
    - komponentui perduotas savybes saugoti <props>
    - komponento elementą saugoti savybėje - <htmlElement>
    - komponento atvaizdavimo logiką atlikti metode <render>

  2. Prijungti sukurto formos komponento-elementą prie egzistuojančio html kodo
    - įdėti komponento htmlElement į elementą su id="root"
*/

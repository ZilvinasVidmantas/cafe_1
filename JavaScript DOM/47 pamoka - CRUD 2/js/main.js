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
  1. Sukurti formos komponentą faile <form-component.js>, su (hard-code) įvesties laukais ir submit mygtuku
    - komponentui perduotas savybes saugoti <props>
    - komponento elementą saugoti savybėje - <htmlElement>
    - komponento atvaizdavimo logiką atlikti metode <render>

  2. Prijungti sukurtos formos komponento-elementą prie egzistuojančio html kodo
    - įdėti komponento htmlElement į elementą su id="root"

  3. Sukurti metodą 'handleSubmit', ir vykdyti jį, kuomet form'ą yra submit'inama
    - uždėti įvykio klausiklį, 'constructor' metode
    - sustabdyti užklausos darymą, jog nebūtų perkraunama naršyklė

  4. Įgalinti metodo 'handleSubmit' logiką, jog jis atspausdintų visų formos įvesties laukų reikšmes

*/

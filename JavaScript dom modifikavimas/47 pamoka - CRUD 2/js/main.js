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
  1. Atskirai atsispausdinkite 4-10 eilutės rezultatą
  2. Peržiūrėkite virš TableComponent aprašytus tipus komentaruose. 
    Ar tipai sutampa su [1.] užduotyje peržiūrėtu rezultatu
  3. Suraskite kur naudojama savybė data TableComponent viduje.
  4. Kokie elementai yra perduodami TableComponent metodui createRow?
  5. Kodėl TableComponent 57 eilutėje yra parašyta lambda išraiška?
  6. Sugalvokite bent po 2 klausimus
  
  19:35
*/

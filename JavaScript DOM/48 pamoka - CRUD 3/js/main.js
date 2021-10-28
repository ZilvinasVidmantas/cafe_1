const rootElement = document.querySelector('#root');

const createUserFormComponent = new FormComponent({
  title: 'Sukurti vartotoją',
  fields: [{
    label: 'Vartotojas',
    type: 'text',
    name: 'username'
  }, {
    label: 'El. paštas',
    type: 'email',
    name: 'email'
  }, {
    label: 'Nuotraukos nuoroda',
    type: 'text',
    name: 'imgSrc'
  }]
});

const filterUsersFormComponent = new FormComponent({
  title: 'Ieškoti Vartotojo',
  fields: [{
    label: 'Vartotojo vardas ar jo dalis',
    type: 'text',
    name: 'username'
  }]
});

// 1. Įgalinkite, dinamišką formos pavadinimo priskyrimą.

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


rootElement.append(
  createUserFormComponent.htmlElement,
  filterUsersFormComponent.htmlElement,
  userTableComponent.htmlElement
);


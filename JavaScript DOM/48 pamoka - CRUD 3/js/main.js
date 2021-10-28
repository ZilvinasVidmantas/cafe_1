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
  }],
  onSubmit: user => console.log('Ateityje sukursiu naują vartotoją, su duomenimis:', user)
});

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

const crudContainer = document.createElement('div');
crudContainer.className = 'd-flex gap-3';

crudContainer.append(
  userTableComponent.htmlElement,
  createUserFormComponent.htmlElement,
);

rootElement.append(crudContainer);


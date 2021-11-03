const rootElement = document.querySelector('#root');

const userManager = new UserManagerComponent({
  tableProps: {
    headers: ['Nuotrauka', 'Vartotojas', 'Paštas'],
    data: userDataArr.reduce((prevRowsArr, { imgSrc, username, email, id }) => [
      ...prevRowsArr,
      {
        id,
        rowData: [`<img src="${imgSrc}" class="table__row-img"/>`, username, email]
      }
    ], []),
  },
  formProps: {
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
  }
})

rootElement.append(userManager.htmlElement);

console.log(userManager.form.props);
setTimeout(() => {
  userManager.editUser();
  console.log(userManager.form.props);
}, 5000)


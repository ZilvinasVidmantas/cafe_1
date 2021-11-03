let idBasis = 88;
const generateId = () => {
  return String(idBasis++);
}


// props - (kitų elementų)/(programos dalių) perduotos savybės/duomenys
// state - komponeneto būsena, kuri keičiama pačio komponeneto, arba jo vaikų
class UserManagerComponent {
  constructor() {
    this.state = {
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
        btnText: 'Sukurti',
        btnClass: 'btn-success',
        borderClass: 'border-success',
        title: 'Sukurti vartotoją',
        fields: [{
          label: 'Vartotojas',
          type: 'text',
          name: 'username',
          value: 'Jonatanas'
        }, {
          label: 'El. paštas',
          type: 'email',
          name: 'email',
          value: 'Dlokas@ketera.misisipi'
        }, {
          label: 'Nuotraukos nuoroda',
          type: 'text',
          name: 'imgSrc',
          value: 'https://unsplash.it/140/100'
        }],
        onSubmit: this.createUser
      }
    };
    this.intialize();
  }

  createUser = ({ username, email, imgSrc }) => {
    this.state.tableProps.data = [
      ...this.state.tableProps.data,
      {
        id: generateId(),
        rowData: [`<img src="${imgSrc}" class="table__row-img"/>`, username, email]
      }
    ];
    this.table.updateProps({
      data: this.state.tableProps.data
    })
  }

  /**
 * Atlieka pradinius veiksmus ir
 * atvaizduoja komponento dalis kurios NEpriklauso nuo besikeičiančių duomenų
 */
  intialize = () => {
    const { formProps, tableProps } = this.state;
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row g-3 flex-lg-row-reverse';

    const formContainer = document.createElement('div');
    formContainer.className = 'col-12 col-lg-3';
    this.form = new FormComponent(formProps);
    formContainer.appendChild(this.form.htmlElement);

    const tableContainer = document.createElement('div');
    tableContainer.className = 'col-12 col-lg-9';
    this.table = new TableComponent(tableProps);
    tableContainer.appendChild(this.table.htmlElement);

    this.htmlElement.append(formContainer, tableContainer);
  }

  /**
   * Atvaizduoja komponento dalis kurios priklauso nuo besikeičiančių duomenų
   */
  render = () => {

  }
}

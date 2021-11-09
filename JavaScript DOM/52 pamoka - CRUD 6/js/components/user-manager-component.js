let idBasis = 88;
const generateId = () => {
  return String(idBasis++);
}

// Jeigu programos daliai reikalinga tam tikra duomenų struktūra ar formatas, tuomet reikėtų sukurti funkciją,
// duomenims performuoti, ir tai programos daliai perduoti tos funkcijos rezultatą(performuotus duomenis). 

// props - (kitų elementų)/(programos dalių) perduotos savybės/duomenys
// state - komponeneto būsena, kuri keičiama pačio komponeneto, arba jo vaikų
class UserManagerComponent {
  constructor() {
    this.state = {
      error: null,
      users: [],
      editedUserId: null,
      tableProps: {
        headers: ['Nuotrauka', 'Vartotojas', 'Paštas'],
        onEdit: this.editUser,
        onDelete: this.deleteUser
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
          value: ''
        }, {
          label: 'El. paštas',
          type: 'email',
          name: 'email',
          value: ''
        }, {
          label: 'Nuotraukos nuoroda',
          type: 'text',
          name: 'imgSrc',
          value: ''
        }],
        onSubmit: this.createUser
      }
    };

    this.intialize();
  }

  formatTableData = () => this.state.users.reduce((prevRowsArr, { imgSrc, username, email, id }) => [
    ...prevRowsArr, {
      id,
      rowData: [`<img src="${imgSrc}" class="table__row-img"/>`, username, email]
    }], []);

  formatFormProps = () => {
    if (this.state.editedUserId) {
      const { id: _, ...userData } = this.state.users.find(x => x.id === this.state.editedUserId);
      const fields = Object.entries(userData).map(([name, value]) => ({ name, value }));
      return {
        title: 'Atnaujinti Vartotoją',
        btnText: 'Atnaujinti',
        btnClass: 'btn-warning',
        borderClass: 'border-warning',
        fields,
        onSubmit: this.updateUser
      };
    } else {
      return this.state.formProps
    }
  }
  createUser = (userProps) => {
    this.state.users.push({
      ...userProps,
      id: generateId(),
    });

    this.render();
  }

  updateUser = (userProps) => {
    const editedUser = this.state.users.find(x => x.id === this.state.editedUserId);
    for (const key in userProps) {
      editedUser[key] = userProps[key];
    }
    this.state.editedUserId = null;

    this.render();
  }

  editUser = (id) => {
    this.state.editedUserId = id;

    this.render();
  }

  deleteUser = (id) => {
    this.state.users = this.state.users.filter(x => x.id !== id);
    // this.state.users.splice(this.state.users.findIndex(x => x.id === id), 1);

    if (id === this.state.editedUserId) this.state.editedUserId = null;

    this.render();
  }

  saveUsers = (users) =>{
    this.state.users = users;

    this.render();
  }

  showAlert = (err) => {
    alert(err);
    // this.state.error = err;
    // TODO: Klaidos rodymas, galbūt su animacija
    // this.render();
  }

  /**
 * Atlieka pradinius veiksmus ir
 * atvaizduoja komponento dalis kurios NEpriklauso nuo besikeičiančių duomenų
 */
  intialize = () => {
    API.fetchApartments(this.saveUsers, this.showAlert);
    const { formProps, tableProps } = this.state;
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row g-3 flex-lg-row-reverse';

    const formContainer = document.createElement('div');
    formContainer.className = 'col-12 col-lg-3';
    this.form = new FormComponent(formProps);
    formContainer.appendChild(this.form.htmlElement);

    this.tableContainer = document.createElement('div');
    this.tableContainer.className = 'col-12 col-lg-9';
    this.table = new TableComponent({
      ...tableProps,
      data: this.formatTableData()
    });

    this.htmlElement.append(formContainer, this.tableContainer);
    this.render();
  }

  /**
   * Atvaizduoja komponento dalis kurios priklauso nuo besikeičiančių duomenų
   */
  render = () => {
    const formProps = this.formatFormProps();
    if (this.state.users.length > 0) {
      this.tableContainer.innerHTML = '';
      this.tableContainer.appendChild(this.table.htmlElement);
      this.table.updateProps({ data: this.formatTableData() });
    } else {
      this.tableContainer.innerHTML = '<div class="h2 text-danger text-center">Šiuo metu vartotojų nėra</div>';
    }
    this.form.updateProps(formProps);
  }
}

// 21 val peržiūrėti kodą
// 21:00 -21:10 pertrauka
// 21:10 tęsiame


// npx json-server --watch database.json
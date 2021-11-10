class UserManagerComponent {
  constructor() {
    this.state = {
      error: null,
      users: [],
      loading: false,
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

  saveUsersToState = (users) => {
    this.state.users = users;
    this.state.loading = false;

    this.render();
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

  // READ
  fetchUsers = () => API.fetchUsers(this.saveUsersToState, this.showAlert);

  // CREATE
  createUser = (user) => API.postUser(user, this.fetchUsers, this.showAlert);

  // UPDATE 1
  editUser = (id) => {
    this.state.editedUserId = id;

    this.render();
  }

  // UPDATE 2
  updateUser = (userProps) => {
    API.patchUser(this.state.editedUserId, userProps, this.fetchUsers, this.showAlert);
    this.state.editedUserId = null;
  }

  // DELETE
  deleteUser = (id) => {
    API.deleteUser(id, this.fetchUsers, this.showAlert);
    if (id === this.state.editedUserId) this.state.editedUserId = null;
  }

  showAlert = (err) => {
    this.state.loading = false;

    alert(err);
    // this.state.error = err;
    // TODO: Klaidos rodymas, galbūt su animacija
    this.render();
  }

  intialize = () => {
    this.state.loading = true;
    this.fetchUsers();

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

  render = () => {
    const { loading, users } = this.state;

    const formProps = this.formatFormProps();
    if (loading) {
      this.tableContainer.innerHTML = '<div class="text-center"><img src="assets/loading.gif"/></div>';
    } else if (users.length > 0) {
      this.tableContainer.innerHTML = '';
      this.tableContainer.appendChild(this.table.htmlElement);
      this.table.updateProps({ data: this.formatTableData() });
    } else {
      this.tableContainer.innerHTML = '<div class="h2 text-danger text-center">Šiuo metu vartotojų nėra</div>';
    }
    this.form.updateProps(formProps);
  }
}
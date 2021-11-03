let idBasis = 88;
const generateId = () => {
  return String(idBasis++);
}

class UserManagerComponent {
  constructor(props) {
    this.props = props;
    this.intialize();
  }

  createUser = ({ username, email, imgSrc }) => {
    this.props.tableProps.data = [ 
      ...this.props.tableProps.data,
      {
        id: generateId(),
        rowData: [`<img src="${imgSrc}" class="table__row-img"/>`, username, email]
      }
    ];
    this.table.updateProps({
      data: this.props.tableProps.data
    })
  }

  /**
 * Atlieka pradinius veiksmus ir
 * atvaizduoja komponento dalis kurios NEpriklauso nuo besikeičiančių duomenų
 */
  intialize = () => {
    const { formProps, tableProps } = this.props;
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row g-3 flex-lg-row-reverse';

    const formContainer = document.createElement('div');
    formContainer.className = 'col-12 col-lg-3';
    this.form = new FormComponent({
      ...formProps,
      onSubmit: this.createUser
    });
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

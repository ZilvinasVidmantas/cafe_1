class FormComponent {
  static #instanceCount = 0;

  constructor(props) {
    this.props = props;
    this.intialize();
  }

  /**
   * Ši funkcija suformuoja formos įvesčių duomenis objektu ir
   * iškviečia į funkciją 'this.props.onSubmit' perduodant tuos duomenis
   * pirmuoju argumentu.
   * 
   * @param {Event} e - įvykio duomenys
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = this.fields.reduce((ob, field) => {
      ob[field.name] = field.value;
      return ob;
    }, {});
    this.props.onSubmit(formData);
  }

  createFieldString = ({ label, type, name }) => {
    const inputID = `form${FormComponent.#instanceCount}-${name}`;
    return `<div class="mb-3">
      <label for="${inputID}" class="form-label">${label}</label>
      <input type="${type}" class="form-control" id="${inputID}" name="${name}">
    </div>`;
  }

  /**
   * Atlieka pradinius veiksmus ir
   * atvaizduoja komponento dalis kurios NEpriklauso nuo besikeičiančių duomenų
   */
  intialize = () => {
    const { title, fields } = this.props;

    this.htmlElement = document.createElement('form');
    this.htmlElement.addEventListener('submit', this.handleSubmit);
    FormComponent.#instanceCount++;
    this.htmlElement.className = 'shadow p-3';

    const fieldsStrArr = fields.map(this.createFieldString);
    const fieldsStr = fieldsStrArr.join('');

    this.htmlElement.innerHTML = `
    <h2>${title}</h2>
    ${fieldsStr}
    <div class="text-center">
      <button class="btn btn-success">Išsaugoti duomenis</button>
    </div>`;

    this.fields = Array.from(this.htmlElement.querySelectorAll('[name]'));
    this.render();
  }

  /**
   * Atvaizduoja komponento dalis kurios priklauso nuo besikeičiančių duomenų
   */
  render = () => {

  }
}

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

  createFieldString = ({ label, type, name, value }) => {
    const inputID = `form${FormComponent.#instanceCount}-${name}`;
    const initValue = value ?? '';
    return `<div class="mb-3">
      <label for="${inputID}" class="form-label">${label}</label>
      <input type="${type}" class="form-control" id="${inputID}" name="${name}" value="${initValue}">
    </div>`;
  }

  /**
   * Atlieka pradinius veiksmus ir
   * atvaizduoja komponento dalis kurios NEpriklauso nuo besikeičiančių duomenų
   */
  intialize = () => {
    const { title, fields, btnText, btnClass, borderClass } = this.props;

    this.htmlElement = document.createElement('form');
    this.htmlElement.addEventListener('submit', this.handleSubmit);
    FormComponent.#instanceCount++;

    this.htmlElement.className = 'shadow p-3 border' + (borderClass ? ' ' + borderClass : '');

    const fieldsStrArr = fields.map(this.createFieldString);
    const fieldsStr = fieldsStrArr.join('');

    const btnClassName = btnClass ?? 'btn-success'

    this.htmlElement.innerHTML = `
    <h2>${title}</h2>
    ${fieldsStr}
    <div class="text-center">
      <button class="btn ${btnClassName}">${btnText}</button>
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

/*
  Sukurkite metodą updateProps, kuris papildytų esamus props naujais. Alternatyviai, kaip TableComponent
  
  Perkelti visą, nuo this.props, priklausančią logiką į render
    - realiai, viskas kas nėra įvesties laukai
    - - įvesties laukų value atributų sukurimą perkelkite į render metodą,
    - - tačiau pačių laukų sukūrima palikiti intialize metode
*/



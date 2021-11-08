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

  initFieldString = ({ label, type, name }) => {
    const inputID = `form${FormComponent.#instanceCount}-${name}`;
    return `<div class="mb-3">
      <label for="${inputID}" class="form-label">${label}</label>
      <input type="${type}" class="form-control" id="${inputID}" name="${name}">
    </div>`;
  }

  createClassNames = () => {
    const { btnClass, borderClass } = this.props;
    return {
      htmlElementClassName: 'shadow p-3 border' + (borderClass ? ' ' + borderClass : ''),
      buttonClassName: 'btn' + (btnClass ? ' ' + btnClass : '')
    }
  }

  /**
   * Atlieka pradinius veiksmus ir
   * atvaizduoja komponento dalis kurios NEpriklauso nuo besikeičiančių duomenų
   */
  intialize = () => {
    this.htmlElement = document.createElement('form');
    this.htmlElement.addEventListener('submit', this.handleSubmit);
    FormComponent.#instanceCount++;

    this.htmlElement.innerHTML = `
    <h2></h2>
    ${this.props.fields.map(this.initFieldString).join('')}
    <div class="text-center">
      <button></button>
    </div>`;

    this.header = this.htmlElement.querySelector('h2');
    this.button = this.htmlElement.querySelector('button');
    this.fields = Array.from(this.htmlElement.querySelectorAll('[name]'));

    this.render();
  }

  updateProps = (props) => {
    const { fields: newFields, ...newProps } = props;

    const oldFieldNames = this.props.fields.map(x => x.name);
    const freshFields = newFields.filter(x => !oldFieldNames.includes(x.name));

    this.props = {
      ...this.props,
      ...newProps,
      fields: [
        ...this.props.fields.map(field => {
          const sameField = newFields.find(x => x.name === field.name);
          if (sameField) {
            return {
              ...field,
              ...sameField
            }
          } else {
            return field
          }
        }),
        ...freshFields
      ]
    };

    this.render();
  }

  /**
   * Atvaizduoja komponento dalis kurios priklauso nuo besikeičiančių duomenų
   */
  render = () => {
    const { title, btnText, fields } = this.props;
    const { htmlElementClassName, buttonClassName } = this.createClassNames();

    this.htmlElement.className = htmlElementClassName;
    this.button.className = buttonClassName;

    fields.forEach(({ name, value }) => {
      if (value !== undefined) this.fields.find(htmlField => htmlField.name === name).value = value;
    });

    this.button.innerHTML = btnText ?? 'Submit';
    this.header.innerHTML = title ?? "Form-" + FormComponent.#instanceCount;
  }
}

/*
  Sukurkite metodą updateProps, kuris papildytų esamus props naujais. Alternatyviai, kaip TableComponent

  Perkelti visą, nuo this.props, priklausančią logiką į render
    - realiai, viskas kas nėra įvesties laukai
    - - įvesties laukų value atributų sukurimą perkelkite į render metodą,
    - - tačiau pačių laukų sukūrima palikiti intialize metode
*/



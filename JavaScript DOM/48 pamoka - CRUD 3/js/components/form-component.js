class FormComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement('form');
    this.htmlElement.addEventListener('submit', this.handleSubmit);
    this.render();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = Array
      .from(this.htmlElement.querySelectorAll('[name]'))
      .reduce((ob, field) => {
        ob[field.name] = field.value;
        return ob;
      }, {});
    console.log(formData);
  }

  createFieldString = (/*...*/) => /*...*/;

  render = () => {
    const { title, fields } = this.props;
    this.htmlElement.className = 'shadow p-3 my-3';

    // Naudojant this.props.fields masyvo objektų duomenis, sukurti įvesties laukų (string) masyvą
    // 1. sukurti funkciją 'this.createFieldString', kuri grąžintų įvesties lauko String reprezentaciją
    // 2. Funkcijai 'this.createFieldString' įgalinti parametro priėmimą, ir duomenų panaudojimą
    // 3. Kurti masyvą performuojant 'this.props.fields objektų duomenis į  metodo 'this.createFieldString' grąžinamus stringus
    const fieldsStrArr = fields.map(/* */);
    // 4. [3.] gautą masyvą sujungti be tarpelių į vieną string reikšmę(kuri reprezentuoja įvesties laukus)
    const fieldsStr = fieldsStrArr.??? ('');
    // 5. Vietoj hard-code'intų įvestie laukų, įdėti suformuota reprezentacinį string'ą


    this.htmlElement.innerHTML = `
    <h2>${title}</h2>
    ${fieldsStr}
    <div class="text-center">
      <button class="btn btn-success">Išsaugoti duomenis</button>
    </div>`;
  }
}
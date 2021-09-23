// [-1.]
// Schema
const schema = {
  email: value => /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/.test(value) ? true : 'Neteisingas paštas',
  password: value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/.test(value) ? true : 'Min 8 simboliai, nors viena didžioji ir nors vienas skaičius',
  repeatPassword: {
    validate: (val, val2) => val === val2 ? true : 'Slaptažodžiai nesutampa',
    fieldNames: ['password', 'repeatPassword']
  },
};

/* Validacijos procesas:
  0. Išvalyti praeito submit'o klaidas ir pranešimus
  1. Reaguoti į formos submit'inimą
  2. Suformuoti formos duomenis su atitinkančiais įvesties laukais
  3. Validavimas ir validavimo rezultato formavimas
  4. Validavimo rezultato panaudojimas
    4.1 -> duomenys geri -> siunčiame duomenis į serverį
    4.2 -> duomenys blogi -> išrašome klaidos pranešimus po atitinkamu įvesties lauku 
*/

// [0.]
/**
 * Ši funkciją kviečiame, kuomet reikia išvalyti klaidos pranešimus, kurie buvo atsiradę po praeito submit'o
 */
function clearRegisterFormErrors(formData) {
  for (const fieldName in formData) {
    const { input } = formData[fieldName];
    if (input.classList.contains('is-invalid')) {
      input.classList.remove('is-invalid');
      const errorFeedbackContainer = input.parentElement.querySelector('.invalid-feedback');
      errorFeedbackContainer.innerHTML = '';
    }
  }
}

// [2.]
/**
 * Suformuojami formos duomenys su atitinkančiu įvesties lauku pagal pavadinimą
 * 
 * @param {HTMLFormElement} form - forma, kuri buvo pa'submit'inta
 * 
 * @return { 
  *  fieldName1: { input: HTMLElement, value: string },
  *  fieldName2: { input: HTMLElement, value: string },
  *  ...,
  *  fieldNameN: { input: HTMLElement, value: string }
 *  } - FormData
 */
function structureRegisterFormData(form) {
  return Array
    .from(form)
    .filter(el => el.name)
    .reduce((res, input) => ({
      ...res,
      [input.name]: {
        input,
        value: input.value
      }
    }), {});
}

// [3.]
/**
 * 
 * @param {*} schema - validacijos schema
 * @param {*} formData - įvesties laukai su reikšmėmis ir pavadinimais
 * 
 * @return {
 *    {
 *      fieldName1: string,
 *      fieldName2: string,
 *      ...,
 *      fieldNameN: string
 *    } | true
 * }
 */
function validateRegisterFormData(schema, formData) {
  const errors = {};
  for (const fieldName in schema) {
    const validator = schema[fieldName];
    const value = formData[fieldName].value;
    let fieldValidationResult;
    if (typeof validator === 'function') {
      fieldValidationResult = validator(value);
    } else {
      const args = validator.fieldNames.map(fieldName => formData[fieldName].value);
      fieldValidationResult = validator.validate(...args)
    }
    if (fieldValidationResult !== true) {
      errors[fieldName] = fieldValidationResult;
    }
  }
  return Object.keys(errors).length === 0 ? true : errors;
}

function sendRequest(data) {
  alert('Duomenis geri, siunčiame užklausą į serverį');
}

function displayErrors(formData, errors) {
  for (const fieldName in errors) {
    // const input = formData[fieldName].input;
    const { input } = formData[fieldName];
    input.classList.add('is-invalid');
    const errorFeedbackContainer = input.parentElement.querySelector('.invalid-feedback');
    errorFeedbackContainer.innerHTML = errors[fieldName];
  }
}

const formRegister = document.querySelector('#formRegister');

// [1.]
/**
 *  Ši funkcija skirta apdoroti registracijos formą
 * 
 * @param {Event} event - informacija apie įvykį
 */
function handleRegisterForm(event) {
  event.preventDefault();
  const formData = structureRegisterFormData(formRegister);
  clearRegisterFormErrors(formData);
  const validationResult = validateRegisterFormData(schema, formData);
  if (validationResult === true) {
    sendRequest(formData);
  } else {
    displayErrors(formData, validationResult);
  }
}

formRegister.addEventListener('submit', handleRegisterForm);

class Form {
  constructor(selector, validationSchema) {
    const form = document.querySelector(selector);
    if (!form)
      throw new Error(`Nėra rastas elementas su tokiu selektoriumi: ${selector}`);
    if (!(form instanceof HTMLFormElement))
      throw new TypeError(`Kuriant Form klasės objektą, turite perduoti selektorių kuris pasirinkitų HTMLFormElement elementą`);
    this.fields = Array
      .from(form)
      .filter(x => x.name)
      .reduce((result, field) => ({
        ...result,
        [field.name]: {
          field,
          errorContainer: field.parentElement.querySelector('.invalid-feedback')
        }
      }), {});
    if(!Object.keys(validationSchema).every(fieldName => Object.keys(this.fields).includes(fieldName)))
      throw new TypeError(`Validacijos schema nėra pritaikyta šiai formai`);
    this.validationSchema = validationSchema;
    form.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit(e) {
    e.preventDefault();
    // funkcija, kuri atliks visus veiksmus
    this.validate()
  }

  validate() {
    this.validationSchema;
  }
}

const validationSchema = {
  email: value => /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/.test(value) ? true : 'Neteisingas paštas',
  password: value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/.test(value) ? true : 'Min 8 simboliai, nors viena didžioji ir nors vienas skaičius',
  repeatPassword: {
    validate: (val, val2) => val === val2 ? true : 'Slaptažodžiai nesutampa',
    fieldNames: ['password', 'repeatPassword']
  },
}

const registrationForm = new Form('#formRegister', validationSchema);
